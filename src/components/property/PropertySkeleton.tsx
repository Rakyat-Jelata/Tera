export default function PropertySkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border bg-white">

      <div className="h-64 bg-slate-200"></div>

      <div className="space-y-4 p-6">

        <div className="h-6 w-3/4 rounded bg-slate-200"></div>

        <div className="h-4 w-1/2 rounded bg-slate-200"></div>

        <div className="h-8 w-2/5 rounded bg-slate-200"></div>

        <div className="grid grid-cols-2 gap-3">

          <div className="h-4 rounded bg-slate-200"></div>

          <div className="h-4 rounded bg-slate-200"></div>

          <div className="h-4 rounded bg-slate-200"></div>

          <div className="h-4 rounded bg-slate-200"></div>

        </div>

        <div className="h-12 rounded-xl bg-slate-200"></div>

      </div>

    </div>
  );
}
