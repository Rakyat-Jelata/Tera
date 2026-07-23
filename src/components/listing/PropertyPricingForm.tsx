"use client";

interface PropertyPricingFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyPricingForm({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyPricingFormProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Harga & Legalitas
        </h2>

        <p className="mt-2 text-slate-600">
          Lengkapi informasi harga, pajak, biaya dan dokumen kepemilikan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Harga Properti
          </label>

          <input
            type="number"
            value={formData.price}
            onChange={(e) => updateFormData("price", e.target.value)}
            placeholder="850000000"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Harga per m²
          </label>

          <input
            type="number"
            value={formData.pricePerMeter}
            onChange={(e) => updateFormData("pricePerMeter", e.target.value)}
            placeholder="7500000"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Harga Masih Bisa Nego
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white p-4">
            <input
              type="checkbox"
              checked={formData.negotiable}
              onChange={(e) =>
                updateFormData("negotiable", e.target.checked)
              }
              className="h-5 w-5"
            />

            <span className="font-medium text-slate-900">
              Ya, harga masih bisa dinegosiasikan
            </span>
          </label>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Status Kepemilikan
          </label>

          <select
            value={formData.ownershipStatus}
            onChange={(e) =>
              updateFormData("ownershipStatus", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Status</option>
            <option value="Pemilik Langsung">Pemilik Langsung</option>
            <option value="Agen Properti">Agen Properti</option>
            <option value="Developer">Developer</option>
            <option value="Bank">Bank</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Status PBB
          </label>

          <select
            value={formData.propertyTaxStatus}
            onChange={(e) =>
              updateFormData("propertyTaxStatus", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Status</option>
            <option value="Sudah Lunas">Sudah Lunas</option>
            <option value="Belum Lunas">Belum Lunas</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            IMB / PBG
          </label>

          <select
            value={formData.buildingPermit}
            onChange={(e) =>
              updateFormData("buildingPermit", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih</option>
            <option value="Ada">Ada</option>
            <option value="Tidak Ada">Tidak Ada</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-900">
            Catatan Tambahan
          </label>

          <textarea
            rows={5}
            value={formData.pricingNotes}
            onChange={(e) =>
              updateFormData("pricingNotes", e.target.value)
            }
            placeholder="Contoh: Harga masih bisa dinegosiasikan, bebas banjir, sertifikat siap balik nama."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
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
