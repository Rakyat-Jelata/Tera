import { NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Inisialisasi API Key dari Environment Variable
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

export async function POST(req: Request) {
  try {
    // Validasi jika API Key tidak ditemukan di .env / Vercel Vars
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY belum terpasang di Environment Variables' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { title, propertyType, price, bedroom, bathroom } = body;

    // Gunakan model resmi: gemini-1.5-flash
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
    console.error('Error Gemini API:', error);
    return NextResponse.json(
      { error: error.message || 'Gagal menghasilkan deskripsi AI' },
      { status: 500 }
    );
  }
}
