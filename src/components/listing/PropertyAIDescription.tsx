"use client";

import { useState } from "react";
import { generatePropertyDescription } from "@/services/ai.service";

interface PropertyAIDescriptionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyAIDescription({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyAIDescriptionProps) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const description = await generatePropertyDescription(
        formData
      );

      updateFormData(
        "aiDescription",
        description
      );
    } catch (err) {
      console.error(err);

      alert("Generate AI gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          AI Description
        </h2>

        <p className="mt-2 text-slate-500">
          Buat deskripsi iklan otomatis menggunakan AI berdasarkan data properti yang telah Anda isi.
        </p>

      </div>

      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "⏳ Sedang Generate..."
          : "🤖 Generate Deskripsi AI"}
      </button>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700">
          Hasil Deskripsi
        </label>

        <textarea
          rows={14}
          value={formData.aiDescription}
          onChange={(e) =>
            updateFormData(
              "aiDescription",
              e.target.value
            )
          }
          placeholder="Hasil AI akan muncul di sini..."
          className="w-full rounded-2xl border border-slate-300 p-4 leading-7 outline-none transition placeholder:text-slate-500 focus:border-violet-500"
        />

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          ← Kembali
        </button>

        <button
          onClick={onNext}
          className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Simpan & Lanjut →
        </button>

      </div>

    </section>
  );
}
