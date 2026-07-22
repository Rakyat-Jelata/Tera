interface PropertyPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function PropertyPagination({
  currentPage,
  totalPages,
}: PropertyPaginationProps) {
  return (
    <div className="mt-12 flex flex-col items-center gap-5">

      <p className="text-sm text-slate-500">
        Halaman <span className="font-semibold">{currentPage}</span> dari{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">

        <button
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100"
        >
          ← Sebelumnya
        </button>

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;

          return (
            <button
              key={page}
              className={`h-11 w-11 rounded-xl font-semibold transition ${
                page === currentPage
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100"
        >
          Selanjutnya →
        </button>

      </div>

    </div>
  );
}
