"use client";

interface PropertySpecificationFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function PropertySpecificationForm({
  formData,
  updateFormData,
  onNext,
  onBack,
}: PropertySpecificationFormProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Spesifikasi Properti
        </h2>

        <p className="mt-2 text-slate-600">
          Lengkapi spesifikasi fisik bangunan dan informasi penting lainnya.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold">Luas Tanah (m²)</label>
          <input
            type="number"
            value={formData.landArea}
            onChange={(e) => updateFormData("landArea", e.target.value)}
            placeholder="120"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Luas Bangunan (m²)</label>
          <input
            type="number"
            value={formData.buildingArea}
            onChange={(e) => updateFormData("buildingArea", e.target.value)}
            placeholder="90"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Kamar Tidur</label>
          <input
            type="number"
            value={formData.bedrooms}
            onChange={(e) => updateFormData("bedrooms", e.target.value)}
            placeholder="3"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Kamar Mandi</label>
          <input
            type="number"
            value={formData.bathrooms}
            onChange={(e) => updateFormData("bathrooms", e.target.value)}
            placeholder="2"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Jumlah Lantai</label>
          <input
            type="number"
            value={formData.floor}
            onChange={(e) => updateFormData("floor", e.target.value)}
            placeholder="2"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Tahun Dibangun</label>
          <input
            type="number"
            value={formData.buildYear}
            onChange={(e) => updateFormData("buildYear", e.target.value)}
            placeholder="2024"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Legalitas</label>
          <select
            value={formData.certificate}
            onChange={(e) => updateFormData("certificate", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 p-4"
          >
            <option value="">Pilih Legalitas</option>
            <option value="SHM">SHM</option>
            <option value="SHGB">SHGB</option>
            <option value="AJB">AJB</option>
            <option value="Girik">Girik</option>
            <option value="Letter C">Letter C</option>
            <option value="HGU">HGU</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Kondisi Bangunan</label>
          <select
            value={formData.buildingCondition}
            onChange={(e) =>
              updateFormData("buildingCondition", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 p-4"
          >
            <option value="">Pilih Kondisi</option>
            <option value="Baru">Baru</option>
            <option value="Bekas">Bekas</option>
            <option value="Renovasi">Renovasi</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Daya Listrik</label>
          <input
            type="text"
            value={formData.electricity}
            onChange={(e) => updateFormData("electricity", e.target.value)}
            placeholder="2200 VA"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Sumber Air</label>
          <select
            value={formData.waterSource}
            onChange={(e) => updateFormData("waterSource", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 p-4"
          >
            <option value="">Pilih Sumber Air</option>
            <option value="PDAM">PDAM</option>
            <option value="Sumur Bor">Sumur Bor</option>
            <option value="Sumur">Sumur</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Hadap Bangunan</label>
          <select
            value={formData.buildingOrientation}
            onChange={(e) =>
              updateFormData("buildingOrientation", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 p-4"
          >
            <option value="">Pilih Arah</option>
            <option>Utara</option>
            <option>Selatan</option>
            <option>Timur</option>
            <option>Barat</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Garasi</label>
          <input
            type="number"
            value={formData.garage}
            onChange={(e) => updateFormData("garage", e.target.value)}
            placeholder="1"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Carport</label>
          <input
            type="number"
            value={formData.carport}
            onChange={(e) => updateFormData("carport", e.target.value)}
            placeholder="2"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />
        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100"
        >
          ← Kembali
        </button>

        <button
          onClick={onNext}
          className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700"
        >
          Simpan & Lanjut →
        </button>

      </div>

    </section>
  );
      }
