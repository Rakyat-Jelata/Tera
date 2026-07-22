interface PropertyBadgeProps {
  type?:
    | "featured"
    | "new"
    | "hot"
    | "sold"
    | "rent"
    | "sale";
}

export default function PropertyBadge({
  type = "sale",
}: PropertyBadgeProps) {
  const badge = {
    featured: {
      text: "Featured",
      className: "bg-yellow-500 text-white",
    },
    new: {
      text: "Baru",
      className: "bg-green-600 text-white",
    },
    hot: {
      text: "Hot",
      className: "bg-red-600 text-white",
    },
    sold: {
      text: "Terjual",
      className: "bg-slate-700 text-white",
    },
    rent: {
      text: "Disewa",
      className: "bg-blue-600 text-white",
    },
    sale: {
      text: "Dijual",
      className: "bg-cyan-600 text-white",
    },
  }[type];

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold shadow ${badge.className}`}
    >
      {badge.text}
    </span>
  );
}
