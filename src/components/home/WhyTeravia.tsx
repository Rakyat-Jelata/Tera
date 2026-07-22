import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI Deskripsi Properti",
    description:
      "Buat deskripsi iklan profesional dalam hitungan detik menggunakan AI TERAVIA.",
  },
  {
    icon: "⚡",
    title: "Pasang Iklan Cepat",
    description:
      "Upload foto, isi data properti, lalu publikasikan hanya dalam beberapa menit.",
  },
  {
    icon: "🛡️",
    title: "Akun Terverifikasi",
    description:
      "Broker, agen, developer, dan pemilik dapat diverifikasi untuk meningkatkan kepercayaan.",
  },
  {
    icon: "📈",
    title: "Auto Boost Listing",
    description:
      "Listing premium mendapatkan fitur boost otomatis agar tampil di posisi teratas.",
  },
  {
    icon: "💬",
    title: "Hubungi Penjual Langsung",
    description:
      "Calon pembeli dapat menghubungi pemilik atau agen secara langsung tanpa perantara.",
  },
  {
    icon: "🌎",
    title: "Jangkauan Nasional",
    description:
      "Melayani pencarian properti dari Aceh hingga Papua dalam satu platform.",
  },
];

export default function WhyTeravia() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Kenapa Memilih TERAVIA?
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Marketplace Properti Modern
            <br />
            untuk Seluruh Indonesia
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            TERAVIA dirancang untuk mempermudah proses jual, beli,
            dan sewa properti dengan teknologi modern, AI,
            dan pengalaman pengguna yang cepat.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Siap Memasarkan Properti Anda?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-cyan-100">
            Bergabung bersama ribuan agen, broker, developer,
            dan pemilik properti yang telah menggunakan TERAVIA.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/register"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:bg-slate-100"
            >
              Daftar Gratis
            </Link>

            <Link
              href="/pasang-iklan"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-cyan-700"
            >
              Pasang Iklan
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
                }
