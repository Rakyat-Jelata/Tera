"use client";

import { useState } from "react";

import PropertyStepper from "@/components/listing/PropertyStepper";
import PropertyBasicForm from "@/components/listing/PropertyBasicForm";
import PropertyLocationForm from "@/components/listing/PropertyLocationForm";
import PropertySpecificationForm from "@/components/listing/PropertySpecificationForm";
import PropertyFacilitiesForm from "@/components/listing/PropertyFacilitiesForm";
import PropertyPricingForm from "@/components/listing/PropertyPricingForm";
import PropertyImageUpload from "@/components/listing/PropertyImageUpload";
import PropertyVideoUpload from "@/components/listing/PropertyVideoUpload";
import PropertySEOForm from "@/components/listing/PropertySEOForm";
import PropertyAIDescription from "@/components/listing/PropertyAIDescription";
import PropertyPreview from "@/components/listing/PropertyPreview";
import PropertyPublish from "@/components/listing/PropertyPublish";

import {
  saveDraft,
  savePropertyImages,
  publishProperty,
} from "@/services/property.service";

import { uploadPropertyImages } from "@/services/storage.service";

export default function PasangIklanPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [propertyId, setPropertyId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    propertyType: "",
    transaction: "",

    price: "",
    pricePerMeter: "",
    negotiable: false,
    serviceCharge: "",
    annualTax: "",
    pricingNotes: "",

    province: "",
    city: "",
    district: "",
    village: "",
    address: "",

    landArea: "",
    buildingArea: "",
    bedroom: "",
    bathroom: "",
    floor: "",

    legal: "",
    buildingCondition: "",

    facilities: [] as string[],

    images: [] as File[],
    video: null as File | null,
    youtubeUrl: "",
    virtualTourUrl: "",

    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",

    aiDescription: "",
    shortDescription: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, 11));

  const prevStep = () =>
    setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSaveDraft = async () => {
    try {
      const property = await saveDraft(formData);

      setPropertyId(property.id);

      if (formData.images.length > 0) {
        const urls = await uploadPropertyImages(formData.images);

        await savePropertyImages(property.id, urls);
      }

      alert("Draft berhasil disimpan.");
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan draft.");
    }
  };

  const handlePublish = async () => {
    try {
      let id = propertyId;

      if (!id) {
        const property = await saveDraft(formData);

        id = property.id;

        setPropertyId(id);

        if (formData.images.length > 0) {
          const urls = await uploadPropertyImages(formData.images);

          await savePropertyImages(id, urls);
        }
      }

      await publishProperty(id);

      alert("Listing berhasil dipublikasikan.");
    } catch (err) {
      console.error(err);
      alert("Publish gagal.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Pasang Iklan Properti
          </h1>

          <p className="mt-3 text-lg text-slate-700">
            Isi informasi properti secara lengkap agar lebih mudah ditemukan
            calon pembeli maupun penyewa.
          </p>
        </div>

        <PropertyStepper currentStep={currentStep} />

        <div className="mt-8">

          {currentStep === 1 && (
            <PropertyBasicForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
            />
          )}

          {currentStep === 2 && (
            <PropertyLocationForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 3 && (
            <PropertySpecificationForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 4 && (
            <PropertyFacilitiesForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 5 && (
            <PropertyPricingForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 6 && (
            <PropertyImageUpload
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 7 && (
            <PropertyVideoUpload
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 8 && (
            <PropertySEOForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 9 && (
            <PropertyAIDescription
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 10 && (
            <PropertyPreview
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}

          {currentStep === 11 && (
            <PropertyPublish
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onPublish={handlePublish}
            />
          )}

        </div>
      </div>
    </main>
  );
}
