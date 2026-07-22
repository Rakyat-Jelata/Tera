export default function Stats() {
  const stats = [
    {
      value: "25.000+",
      label: "Listing Properti",
      icon: "🏠",
      color: "bg-blue-100 text-blue-600",
    },
    {
      value: "5.200+",
      label: "Agen Terverifikasi",
      icon: "👨‍💼",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      value: "514",
      label: "Kabupaten / Kota",
      icon: "📍",
      color: "bg-orange-100 text-orange-600",
    },
    {
      value: "1,2 Juta+",
      label: "Pengunjung",
      icon: "👥",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-900">
            TERAVIA dalam Angka
          </h2>

          <p className="mt-3 text-slate-600">
            Marketplace properti modern untuk seluruh Indonesia.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
