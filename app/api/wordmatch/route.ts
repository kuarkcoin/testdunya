import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // process.cwd() projenin ana klasörünü verir.
    // Dosya yolunu tam olarak oluşturuyoruz:
    const filePath = path.join(process.cwd(), 'public', 'data', 'tests', 'IELTS_Vocabulary_Phrasal_1000_format.json');

    // Dosyayı okuyoruz
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    // JSON olarak parse ediyoruz
    const data = JSON.parse(fileContents);

    // Veriyi frontend'e gönderiyoruz
    return NextResponse.json(data);
  } catch (error) {
    console.error("Dosya okuma hatası:", error);
    return NextResponse.json({ error: 'Dosya bulunamadı veya okunamadı.' }, { status: 500 });
  }
}
