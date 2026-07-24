"use client";

interface PropertyAgentCardProps {
  name: string;
  brokerId?: string;
  phone: string;
  email?: string;
  photo?: string;
  verified?: boolean;
  activeListings?: number;
  joinedAt?: string;
  rating?: number;
}

export default function PropertyAgentCard({
  name,
  brokerId,
  phone,
  email,
  photo,
  verified = false,
  activeListings = 0,
  joinedAt = "-",
  rating = 0,
}: PropertyAgentCardProps) {
  const whatsapp = phone.replace(/\D/g, "");

  return (
    <aside className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex flex-col items-center text-center">

        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100 text-4xl">
            👤
          </div>
        )}

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          {name}
        </h2>

        <p className="mt-1 text-slate-500">
          {brokerId || "Owner"}
        </p>

        {verified && (
          <span className="mt-3 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ✓ Agen Terverifikasi
          </span>
        )}

      </div>

      <div className="mt-8 space-y-3">

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          className="block w-full rounded-2xl bg-green-600 py-4 text-center font-semibold text-white transition hover:bg-green-700"
        >
          💬 WhatsApp
        </a>

        <a
          href={`tel:${phone}`}
          className="block w-full rounded-2xl bg-cyan-600 py-4 text-center font-semibold text-white transition hover:bg-cyan-700"
        >
          📞 Telepon
        </a>

        {email && (
          <a
            href={`mailto:${email}`}
            className="block w-full rounded-2xl border border-slate-300 py-4 text-center font-semibold transition hover:bg-slate-100"
          >
            ✉️ Email
          </a>
        )}

      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">

        <div className="flex justify-between py-2">
          <span className="text-slate-500">Listing Aktif</span>
          <span className="font-semibold text-slate-900">
            {activeListings}
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-500">Bergabung</span>
          <span className="font-semibold text-slate-900">
            {joinedAt}
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-500">Rating</span>
          <span className="font-semibold text-amber-500">
            ⭐ {rating.toFixed(1)}
          </span>
        </div>

      </div>

    </aside>
  );
}
