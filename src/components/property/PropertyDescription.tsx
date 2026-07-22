interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({
  description,
}: PropertyDescriptionProps) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
          📝
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Deskripsi Properti
          </h2>

          <p className="text-sm text-slate-500">
            Informasi lengkap mengenai properti
          </p>
        </div>

      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">

        <p className="leading-8 text-slate-600">
          {description}
        </p>

      </div>

    </section>
  );
}
