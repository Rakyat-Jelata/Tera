"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
import { deleteProperty } from "@/services/property.service";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.replace("/login");
      return;
    }

    setUser(session.user);

    const { data } = await supabase
      .from("properties")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false });

    setProperties(data || []);
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  async function handleDelete(id: string) {
    const ok = confirm(
      "Yakin ingin menghapus listing ini?"
    );

    if (!ok) return;

    try {
      await deleteProperty(id);

      setProperties((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Listing berhasil dihapus.");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus listing.");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Memuat Dashboard...
      </main>
    );
  }

  const total = properties.length;

  const published = properties.filter(
    (p) => p.status === "published"
  ).length;

  const draft = properties.filter(
    (p) => p.status === "draft"
  ).length;

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-4xl font-black text-slate-900">
              Dashboard Agen
            </h1>

            <p className="mt-2 text-slate-600">
              {user?.email}
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/pasang-iklan"
              className="rounded-2xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              + Pasang Iklan
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-2xl border border-slate-300 px-6 py-3 hover:bg-slate-200"
            >
              Logout
            </button>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow">

            <p className="text-slate-500">
              Total Listing
            </p>

            <h2 className="mt-3 text-5xl font-black text-cyan-600">
              {total}
            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <p className="text-slate-500">
              Published
            </p>

            <h2 className="mt-3 text-5xl font-black text-green-600">
              {published}
            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <p className="text-slate-500">
              Draft
            </p>

            <h2 className="mt-3 text-5xl font-black text-orange-500">
              {draft}
            </h2>

          </div>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Listing Saya
            </h2>

          </div>

          {properties.length === 0 ? (

            <div className="p-12 text-center text-slate-500">
              Belum ada listing.
            </div>

          ) : (

            <div className="divide-y">

              {properties.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between"
                >

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {item.city}
                    </p>

                    <p className="mt-2 font-bold text-cyan-600">
                      Rp{" "}
                      {Number(item.price || 0).toLocaleString(
                        "id-ID"
                      )}
                    </p>

                    <span
                      className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                        item.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <Link
                      href={`/properties/${item.id}`}
                      className="rounded-xl bg-cyan-600 px-5 py-3 text-white"
                    >
                      Lihat
                    </Link>

                    <Link
                      href={`/edit-listing/${item.id}`}
                      className="rounded-xl bg-amber-500 px-5 py-3 text-white"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="rounded-xl bg-red-600 px-5 py-3 text-white"
                    >
                      Hapus
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
}
