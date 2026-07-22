import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "7 Tips Membeli Rumah Pertama agar Tidak Salah Pilih",
    category: "Tips Properti",
    date: "20 Juli 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900",
  },
  {
    id: 2,
    title: "Cara Menentukan Harga Jual Properti Sesuai Pasar",
    category: "Investasi",
    date: "18 Juli 2026",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900",
  },
  {
    id: 3,
    title: "Mengapa AI Membantu Agen Menjual Properti Lebih Cepat",
    category: "Teknologi",
    date: "15 Juli 2026",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Blog TERAVIA
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Tips & Informasi Properti
            </h2>

            <p className="mt-3 text-slate-600">
              Artikel terbaru seputar properti, investasi, dan teknologi AI.
            </p>

          </div>

          <Link
            href="/blog"
            className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            Lihat Semua Artikel
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <img
                src={article.image}
                alt={article.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {article.category}
                </span>

                <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm text-slate-500">
                  {article.date}
                </p>

                <Link
                  href={`/blog/${article.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Baca Selengkapnya →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
