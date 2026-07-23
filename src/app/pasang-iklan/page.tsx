"use client";
import { useState } from "react";
import PropertyStepper from "@/components/listing/PropertyStepper";
import PropertyLocationForm from "@/components/listing/PropertyLocationForm";

export default function PasangIklanPage() {

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 11));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-slate-900">
            Pasang Iklan Properti
          </h1>

          <p className="mt-3 text-slate-600">
            Isi informasi properti Anda dengan lengkap agar lebih cepat
            ditemukan calon pembeli maupun penyewa.
          </p>

        </div>

        <PropertyStepper currentStep={currentStep} />

        <div className="mt-8">
          <PropertyLocationForm
  onBack={prevStep}
  onNext={nextStep}
/>
        </div>

      </div>

    </main>
  );
}
