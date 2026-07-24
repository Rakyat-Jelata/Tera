"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function EditListingPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    property_type: "",
    transaction: "",
    province: "",
    city: "",
    district: "",
    village: "",
    address: "",
    price: "",
    land_area: "",
    building_area: "",
    bedroom: "",
    bathroom: "",
    floor: "",
    legal: "",
    building_condition: "",
    ai_description: "",
  });

  useEffect(() => {
    loadProperty();
  }, []);

  async function loadProperty() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.replace("/login");
      return;
    }

    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .eq("id", id)
      .eq("user_id", session.user.id)
      .single();

    if (error || !data) {
      alert("Listing tidak ditemukan.");
      router.replace("/dashboard");
      return;
    }

    setFormData({
      title: data.title ?? "",
      category: data.category ?? "",
      property_type: data.property_type ?? "",
      transaction: data.transaction ?? "",
      province: data.province ?? "",
      city: data.city ?? "",
      district: data.district ?? "",
      village: data.village ?? "",
      address: data.address ?? "",
      price: data.price ?? "",
      land_area: data.land_area ?? "",
      building_area: data.building_area ?? "",
      bedroom: data.bedroom ?? "",
      bathroom: data.bathroom ?? "",
      floor: data.floor ?? "",
      legal: data.legal ?? "",
      building_condition: data.building_condition ?? "",
      ai_description: data.ai_description ?? "",
    });

    setLoading(false);
  }

  function updateField(field: string, value: any) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("properties")
      .update({
        ...formData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Listing berhasil diperbarui.");

    router.push("/dashboard");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Memuat data...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-black text-slate-900">
              Edit Listing
            </h1>

            <p className="mt-2 text-slate-600">
              Perbarui informasi properti Anda.
            </p>

          </div>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            ← Dashboard
          </Link>

        </div>

        <form
          onSubmit={handleSave}
          className="space-y-6"
        >

          <input
            value={formData.title}
            onChange={(e) =>
              updateField("title", e.target.value)
            }
            placeholder="Judul Properti"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={formData.category}
            onChange={(e) =>
              updateField("category", e.target.value)
            }
            placeholder="Kategori"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={formData.property_type}
            onChange={(e) =>
              updateField("property_type", e.target.value)
            }
            placeholder="Tipe Properti"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={formData.transaction}
            onChange={(e) =>
              updateField("transaction", e.target.value)
            }
            placeholder="Jenis Transaksi"
            className="w-full rounded-xl border p-4"
          />

          <input
            value={formData.address}
            onChange={(e) =>
              updateField("address", e.target.value)
            }
            placeholder="Alamat"
            className="w-full rounded-xl border p-4"
          />

          <div className="grid gap-4 md:grid-cols-2">

            <input
              value={formData.city}
              onChange={(e) =>
                updateField("city", e.target.value)
              }
              placeholder="Kota"
              className="rounded-xl border p-4"
            />

            <input
              value={formData.province}
              onChange={(e) =>
                updateField("province", e.target.value)
              }
              placeholder="Provinsi"
              className="rounded-xl border p-4"
            />

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                updateField("price", e.target.value)
              }
              placeholder="Harga"
              className="rounded-xl border p-4"
            />

            <input
              type="number"
              value={formData.land_area}
              onChange={(e) =>
                updateField("land_area", e.target.value)
              }
              placeholder="Luas Tanah"
              className="rounded-xl border p-4"
            />

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <input
              type="number"
              value={formData.building_area}
              onChange={(e) =>
                updateField("building_area", e.target.value)
              }
              placeholder="Luas Bangunan"
              className="rounded-xl border p-4"
            />

            <input
              type="number"
              value={formData.bedroom}
              onChange={(e) =>
                updateField("bedroom", e.target.value)
              }
              placeholder="Kamar Tidur"
              className="rounded-xl border p-4"
            />

            <input
              type="number"
              value={formData.bathroom}
              onChange={(e) =>
                updateField("bathroom", e.target.value)
              }
              placeholder="Kamar Mandi"
              className="rounded-xl border p-4"
            />

          </div>

          <textarea
            rows={10}
            value={formData.ai_description}
            onChange={(e) =>
              updateField(
                "ai_description",
                e.target.value
              )
            }
            placeholder="Deskripsi Properti"
            className="w-full rounded-xl border p-4"
          />

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-2xl bg-cyan-600 py-4 font-bold text-white hover:bg-cyan-700"
          >
            {saving
              ? "Menyimpan..."
              : "Simpan Perubahan"}
          </button>

        </form>

      </div>

    </main>
  );
}
