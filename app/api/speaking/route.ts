function getApiKeys(): string[] {
  return [
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_KEY_2,
    process.env.GOOGLE_KEY_3,
    process.env.GOOGLE_KEY_4,
    process.env.GOOGLE_KEY_5,
  ].filter((k): k is string => Boolean(k));
}

// 429 olursa diğer key’leri sırayla dene
async function withFailover<T>(fn: (key: string) => Promise<T>) {
  const keys = getApiKeys();
  if (keys.length === 0) throw new Error("No API Keys found");

  // random başlangıç
  const start = Math.floor(Math.random() * keys.length);

  let lastErr: any = null;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[(start + i) % keys.length];
    try {
      return await fn(key);
    } catch (e: any) {
      const msg = String(e?.message || e);
      lastErr = e;
      // 429 ise diğer key’e geç, değilse patlat
      if (msg.includes("429") || msg.toLowerCase().includes("quota") || msg.toLowerCase().includes("too many requests")) {
        continue;
      }
      throw e;
    }
  }
  throw lastErr ?? new Error("All keys failed");
}