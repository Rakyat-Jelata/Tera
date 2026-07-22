import Link from "next/link";

const propertyLinks = [
  { name: "Rumah", href: "/properties?type=rumah" },
  { name: "Apartemen", href: "/properties?type=apartemen" },
  { name: "Ruko", href: "/properties?type=ruko" },
  { name: "Villa", href: "/properties?type=villa" },
  { name: "Tanah", href: "/properties?type=tanah" },
];

const companyLinks = [
  { name: "Tentang Kami", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Membership", href: "/membership" },
  { name: "Pasang Iklan", href: "/pasang-iklan" },
  { name: "Hubungi Kami", href: "/contact" },
];

const supportLinks = [
  { name: "Pusat Bantuan", href: "/help" },
  { name: "FAQ", href: "/faq" },
  { name: "Kebijakan Privasi", href: "/privacy" },
  { name: "Syarat & Ketentuan", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black text-white">
              TERAVIA
            </h2>

            <p className="mt-5 max-w-md leading-8 text-slate-400">
              Marketplace properti modern untuk jual, beli,
              dan sewa properti di seluruh Indonesia.
              Didukung AI untuk membantu agen, broker,
              developer, dan pemilik properti.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl transition hover:bg-cyan-600"
              >
                📘
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl transition hover:bg-cyan-600"
              >
                📷
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl transition hover:bg-cyan-600"
              >
                🎵
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl transition hover:bg-cyan-600"
              >
                ▶️
              </a>

            </div>

          </div>

          {/* Properti */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Properti
            </h3>

            <ul className="space-y-3">

              {propertyLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Perusahaan */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Perusahaan
            </h3>

            <ul className="space-y-3">

              {companyLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Bantuan */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-white">
              Bantuan
            </h3>

            <ul className="space-y-3">

              {supportLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} TERAVIA. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <Link
              href="/privacy"
              className="hover:text-cyan-400"
            >
              Privasi
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-400"
            >
              Syarat
            </Link>

            <Link
              href="/contact"
              className="hover:text-cyan-400"
            >
              Kontak
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
