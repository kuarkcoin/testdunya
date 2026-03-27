interface FaqSectionProps {
  title?: string;
  items: { question: string; answer: string }[];
}

export default function FaqSection({ title = 'Sık Sorulan Sorular', items }: FaqSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/50 dark:bg-zinc-900/50">
            <summary className="font-semibold cursor-pointer">{item.question}</summary>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
