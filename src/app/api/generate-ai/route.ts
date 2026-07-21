import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, propertyType, transactionType, price, bedroom, bathroom, landSize, buildingSize, regencyName, provinceName } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY belum terpasang di Environment Variables Vercel.' }, { status: 500 });
    }

    const prompt = `
Kamu adalah seorang Property Copywriter & Marketer Profesional. 
Buatkan deskripsi penjualan properti yang sangat menarik, persuasif, dan rapi untuk listing berikut:

- Judul: ${title}
- Jenis Properti: ${propertyType} (${transactionType})
- Harga: Rp ${Number(price || 0).toLocaleString('id-ID')}
- Lokasi: ${regencyName || 'Indonesia'}, ${provinceName || ''}
- Spesifikasi: ${bedroom || 0} Kamar Tidur, ${bathroom || 0} Kamar Mandi, Luas Tanah ${landSize || 0} m², Luas Bangunan ${buildingSize || 0} m²

Format Output:
1. Headline Hook (1 kalimat mencolok)
2. Keunggulan Utama Properti (Gunakan bullet points & emoji menarik)
3. Call to Action (Ajak calon pembeli untuk hubungi agen)
    `;

    // Memanggil API Gemini 1.5 Flash
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.error?.message || 'Terjadi kesalahan pada server Gemini API.';
      return NextResponse.json({ error: `[Gemini Error ${response.status}] ${errorMsg}` }, { status: response.status });
    }

    // Pengecekan teks hasil generate dari struktur response Gemini
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json({ 
        error: 'AI memproses permintaan, tetapi tidak mengembalikan teks deskripsi. Coba ubah detail properti.' 
      }, { status: 500 });
    }

    return NextResponse.json({ description: generatedText });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
