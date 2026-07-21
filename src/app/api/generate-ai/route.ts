import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, propertyType, transactionType, price, bedroom, bathroom, landSize, buildingSize, regencyName, provinceName } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY belum dikonfigurasi di Vercel' }, { status: 500 });
    }

    const prompt = `
Kamu adalah seorang Property Copywriter & Marketer Profesional. 
Buatkan deskripsi penjualan properti yang sangat menarik, persuasif, dan rapi untuk listing berikut:

- Judul: ${title}
- Jenis Properti: ${propertyType} (${transactionType})
- Harga: Rp ${Number(price).toLocaleString('id-ID')}
- Lokasi: ${regencyName}, ${provinceName}
- Spesifikasi: ${bedroom} Kamar Tidur, ${bathroom} Kamar Mandi, Luas Tanah ${landSize} m², Luas Bangunan ${buildingSize} m²

Format Output:
1. Headline Hook (1 kalimat mencolok)
2. Keunggulan Utama Properti (Gunakan bullet points & emoji menarik)
3. Call to Action (Ajak calon pembeli untuk hubungi agen)
    `;

    // Menggunakan endpoint REST API Gemini yang standar
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'Error dari Google Gemini API' }, { status: response.status });
    }

    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!generatedText) {
      return NextResponse.json({ error: 'Respon AI kosong' }, { status: 500 });
    }

    return NextResponse.json({ description: generatedText });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
