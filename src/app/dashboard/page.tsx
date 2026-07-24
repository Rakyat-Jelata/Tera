"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddPropertyPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pasang-iklan");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-4xl">
          🏡
        </div>

        <h1 className="mt-6 text-3xl font-black text-slate-900">
          Mengalihkan...
        </h1>

        <p className="mt-3 text-slate-600">
          Anda akan diarahkan ke halaman
          <strong> Pasang Iklan TERAVIA</strong>.
        </p>

        <div className="mt-8">
          <div className="mx-auto h-2 w-56 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full animate-pulse rounded-full bg-cyan-600"></div>
          </div>
        </div>

      </div>
    </main>
  );
}
