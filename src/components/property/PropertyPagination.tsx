"use client";

type PropertyPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function PropertyPagination({
  currentPage,
  totalPages,
}: PropertyPaginationProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">

      <button
        className="rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
      >
        ←
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            className={`rounded-xl px-4 py-2 font-semibold transition ${
              currentPage === page
                ? "bg-cyan-600 text-white"
                : "border border-slate-300 hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        className="rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
      >
        →
      </button>

    </div>
  );
}
