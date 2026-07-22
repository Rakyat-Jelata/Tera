import Link from "next/link";

const categories = [
  {
    title: "Rumah",
    icon: "🏠",
    href: "/properties?type=rumah",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Apartemen",
    icon: "🏢",
    href: "/properties?type=apartemen",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Ruko",
    icon: "🏬",
    href: "/properties?type=ruko",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Tanah",
    icon: "🌳",
    href: "/properties?type=tanah",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Villa",
    icon: "🏡",
    href: "/properties?type=villa",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Gudang",
    icon: "🏭",
    href: "/properties?type=gudang",
    color: "bg-slate-200 text-slate-700",
  },
  {
    title: "Kost",
    icon: "🛏️",
    href: "/properties?type=kost",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Komersial",
    icon: "🏪",
    href: "/properties?type=komersial",
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-900">
            Jelajahi Berdasarkan Kategori
          </h2>

          <p className="mt-3 text-slate-600">
            Temukan properti sesuai kebutuhan Anda.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {categories.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
            >

              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-slate-800 group-hover:text-cyan-600">
                {item.title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
