import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const prompt = `
Buat deskripsi iklan properti profesional dalam Bahasa Indonesia.

Data Properti:

Judul:
${formData.title}

Kategori:
${formData.category}

Jenis Properti:
${formData.propertyType}

Transaksi:
${formData.transaction}

Lokasi:
${[
  formData.address,
  formData.village,
  formData.district,
  formData.city,
  formData.province,
]
  .filter(Boolean)
  .join(", ")}

Luas Tanah:
${formData.landArea} m²

Luas Bangunan:
${formData.buildingArea} m²

Kamar Tidur:
${formData.bedroom}

Kamar Mandi:
${formData.bathroom}

Jumlah Lantai:
${formData.floor}

Legalitas:
${formData.legal}

Kondisi Bangunan:
${formData.buildingCondition}

Fasilitas:
${formData.facilities?.join(", ")}

Harga:
Rp ${Number(formData.price || 0).toLocaleString("id-ID")}

Buat deskripsi:
- Profesional
- Menarik
- Maksimal 250 kata
- Tidak mengulang data secara berlebihan
- Sertakan keunggulan lokasi
- Sertakan Call To Action di akhir.
`;

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content:
                "Kamu adalah copywriter profesional untuk marketplace properti Indonesia.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.8,
          max_tokens: 600,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      console.error(json);

      return NextResponse.json(
        {
          error: "OpenAI Error",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      description: json.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
  }
