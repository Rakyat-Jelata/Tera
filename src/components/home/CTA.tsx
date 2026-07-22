import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 py-24">

      {/* Background Decoration */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            🚀 Saatnya Bergabung dengan TERAVIA
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
            Jual, Beli & Sewa Properti
            <br />
            Lebih Cepat Bersama TERAVIA
          </h2>

          <p className="mt-6 text-lg leading-8 text-cyan-100">
            Bergabunglah bersama ribuan agen, broker, developer,
            dan pemilik properti di seluruh Indonesia.
            Pasang iklan, gunakan AI, dan temukan pembeli
            lebih cepat.
          </p>

          {/* CTA Button */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 shadow-lg transition hover:bg-slate-100"
            >
              Daftar Gratis
            </Link>

            <Link
              href="/pasang-iklan"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-cyan-700"
            >
              Pasang Iklan
            </Link>

            <Link
              href="/membership"
              className="rounded-xl border border-cyan-300 px-8 py-4 font-semibold text-cyan-100 transition hover:bg-cyan-500 hover:text-white"
            >
              Lihat Membership
            </Link>

          </div>

          {/* Statistics */}

          <div className="mt-20 grid grid-cols-2 gap-8 text-white md:grid-cols-4">

            <div>

              <h3 className="text-4xl font-bold">
                25K+
              </h3>

              <p className="mt-2 text-cyan-100">
                Listing
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">
                5K+
              </h3>

              <p className="mt-2 text-cyan-100">
                Agen
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">
                514
              </h3>

              <p className="mt-2 text-cyan-100">
                Kota
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">
                1,2M+
              </h3>

              <p className="mt-2 text-cyan-100">
                Pengunjung
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
