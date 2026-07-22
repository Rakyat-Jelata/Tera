import Image from "next/image";
import Link from "next/link";

import PropertyBadge from "./PropertyBadge";
import FavoriteButton from "./FavoriteButton";
import PropertyInfo from "./PropertyInfo";

interface PropertyCardProps {
  id: number | string;
  title: string;
  location: string;
  price: string;
  image: string;
  bedroom: number;
  bathroom: number;
  land: number;
  building: number;
  badge?: "featured" | "new" | "hot" | "sold" | "rent" | "sale";
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  bedroom,
  bathroom,
  land,
  building,
  badge = "sale",
}: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-72 overflow-hidden rounded-t-3xl">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="absolute left-4 top-4">
          <PropertyBadge type={badge} />
        </div>
        <div className="absolute left-4 bottom-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
  ✓ Verified
</div>
        <div className="absolute right-4 top-4">
          <FavoriteButton />
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="line-clamp-2 text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-slate-500">
          📍 {location}
        </p>

        <div className="mt-5 flex items-center justify-between">

  <div>

    <p className="text-xs uppercase tracking-wide text-slate-500">
      Harga
    </p>

    <h4 className="text-2xl font-extrabold text-cyan-600 md:text-3xl">
      {price}
    </h4>

  </div>

  <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
    Siap Huni
  </div>

</div>

        <div className="my-6 border-t border-slate-200"></div>

        <PropertyInfo
          bedroom={bedroom} 
          bathroom={bathroom}
          land={land}
          building={building}
        />

        <div className="mt-6 flex gap-2">

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">

  <div>
    <p className="text-sm font-semibold text-slate-800">
      Budi Santoso
    </p>

    <p className="text-xs text-slate-500">
      BrokerID #TRA001 • 2 jam lalu
    </p>
  </div>

  <div className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
    TERAVIA
  </div>

</div>

</div>

  <Link
    href={`/properties/${id}`}
    className="flex-1 rounded-2xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
  >
    Lihat Detail
  </Link>

  <button
  className="rounded-2xl border border-cyan-300 bg-cyan-50 px-5 transition hover:bg-cyan-100"
>
  📞
</button>

<button
  className="rounded-2xl border border-green-300 bg-green-50 px-5 transition hover:bg-green-100"
>
  💬
</button>

</div>

      </div>

    </div>
  );
          }
