interface PropertySpecificationProps {
  bedroom: number;
  bathroom: number;
  land: number;
  building: number;
}

export default function PropertySpecification({
  bedroom,
  bathroom,
  land,
  building,
}: PropertySpecificationProps) {
  const items = [
    {
      icon: "🛏",
      label: "Kamar Tidur",
      value: bedroom,
    },
    {
      icon: "🚿",
      label: "Kamar Mandi",
      value: bathroom,
    },
    {
      icon: "🌳",
      label: "Luas Tanah",
      value: `${land} m²`,
    },
    {
      icon: "🏠",
      label: "Luas Bangunan",
      value: `${building} m²`,
    },
  ];

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Spesifikasi Properti
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-300 hover:bg-white hover:shadow-md"
          >
            <div className="text-3xl">
              {item.icon}
            </div>

            <p className="mt-4 text-sm text-slate-500">
              {item.label}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {item.value}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}
