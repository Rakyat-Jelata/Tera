import Link from "next/link";

export default function AISection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
              🤖 TERAVIA AI
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Buat Deskripsi Properti
              <br />
              Profesional dengan AI
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Tidak perlu lagi bingung menulis deskripsi iklan.
              TERAVIA AI akan membantu membuat deskripsi yang
              menarik, profesional, SEO Friendly, dan siap dipublikasikan
              hanya dalam beberapa detik.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-2xl">
                  ⚡
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    Cepat
                  </h4>

                  <p className="text-slate-300">
                    Deskripsi selesai kurang dari 10 detik.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-2xl">
                  ✍️
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    Profesional
                  </h4>

                  <p className="text-slate-300">
                    Bahasa pemasaran yang menarik calon pembeli.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-2xl">
                  📈
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    SEO Friendly
                  </h4>

                  <p className="text-slate-300">
                    Membantu iklan lebih mudah ditemukan.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/register"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
              >
                Coba Gratis
              </Link>

              <Link
                href="/membership"
                className="rounded-xl border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
              >
                Lihat Membership
              </Link>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-bold text-slate-900">
                  AI Description Generator
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Online
                </span>

              </div>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Judul Properti"
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  rows={5}
                  placeholder="Masukkan informasi singkat mengenai properti..."
                  className="w-full rounded-xl border p-4"
                />

                <button
                  className="w-full rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700"
                >
                  Generate Deskripsi AI
                </button>

              </div>

              <div className="mt-8 rounded-2xl bg-slate-100 p-5">

                <h4 className="mb-3 font-semibold text-slate-800">
                  Preview
                </h4>

                <p className="text-sm leading-7 text-slate-600">
                  Deskripsi hasil AI akan muncul di sini setelah
                  pengguna menekan tombol Generate.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
            }
