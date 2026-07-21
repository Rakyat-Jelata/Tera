import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, propertyType, price, bedroom, bathroom } = body;

    // Menggunakan model Gemini terbaru
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Buatkan deskripsi pemasaran properti yang menarik dan profesional untuk agen real estate. 
    Detail Properti:
    - Judul: ${title}
    - Tipe: ${propertyType}
    - Harga: Rp ${price}
    - Kamar Tidur: ${bedroom}
    - Kamar Mandi: ${bathroom}
    
    Buat deskripsi singkat (2-3 paragraf) yang persuasif dan memakai emotikon yang relevan.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const description = response.text();

    return NextResponse.json({ description });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
