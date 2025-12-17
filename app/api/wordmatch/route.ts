import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export const runtime = "nodejs";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "tests",
      "IELTS_Vocabulary_Phrasal_1000_format.json"
    );

    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Dosya Okuma Hatası:", error);
    return NextResponse.json(
      { error: "Dosya bulunamadı veya okunamadı." },
      { status: 500 }
    );
  }
}