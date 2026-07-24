"use client";
import { useState } from "react";
import PropertyStepper from "@/components/listing/PropertyStepper";
import PropertyLocationForm from "@/components/listing/PropertyLocationForm";
import PropertyBasicForm from "@/components/listing/PropertyBasicForm";
import PropertySpecificationForm from "@/components/listing/PropertySpecificationForm";
import PropertyFacilitiesForm from "@/components/listing/PropertyFacilitiesForm";
import PropertyPricingForm from "@/components/listing/PropertyPricingForm";
import PropertyImageUpload from "@/components/listing/PropertyImageUpload";
import PropertyVideoUpload from "@/components/listing/PropertyVideoUpload";
import PropertySEOForm from "@/components/listing/PropertySEOForm";
import PropertyAIDescription from "@/components/listing/PropertyAIDescription";
import PropertyPreview from "@/components/listing/PropertyPreview";
import PropertyPublish from "@/components/listing/PropertyPublish";
import { uploadPropertyImages } from "@/services/storage.service";
import { saveDraft, savePropertyImages,} from "@/services/property.service"; 

export default function PasangIklanPage() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({

  // Informasi Dasar
  title: "",
  category: "",
  propertyType: "",
  transactionType: "",

  // Harga
  price: "",
  pricePerMeter: "",
  negotiable: false,
  serviceCharge: "",
  annualTax: "",
  pricingNotes: "",


  // Lokasi
  province: "",
  city: "",
  district: "",
  village: "",
  address: "",
  postalCode: "",
  googleMapsUrl: "",
  latitude: "",
  longitude: "",


  // Spesifikasi
  landArea: "",
  buildingArea: "",
  bedrooms: "",
  bathrooms: "",
  floor: "",
 buildYear: "",
 electricity: "",
 waterSource: "",
 buildingOrientation: "",
 garage: "",
 carport: "",
 

  buildingCondition: "",


  // Legalitas
  certificate: "",
  ownershipStatus: "",
  propertyTaxStatus: "",
  buildingPermit: "",


  // Fasilitas
  facilities: [] as string[],
  otherFacilities: "",

  // Media
  images: [] as File[],
  video: null as File | null,
  youtubeUrl: "",
  virtualTourUrl: "",


  // SEO
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",


  // AI
  aiDescription: "",


  // Deskripsi
  shortDescription: "",

});
  
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 11));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (
  field: string,
  value: any
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  const handleSaveDraft = async () => {
  try {
    const draft = await saveDraft(formData);

    if (formData.images.length > 0) {
      const urls = await uploadPropertyImages(
        formData.images
      );

      await savePropertyImages(
        draft.id,
        urls
      );
    }

    alert("Draft berhasil disimpan.");

  } catch (err) {
    console.error(err);

    alert("Gagal menyimpan draft.");
  }
};
  
  return (
    <main className="min-h-screen bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">
  Pasang Iklan Properti
</h1>

<p className="mt-3 text-lg leading-8 text-slate-700">
  Isi informasi properti Anda dengan lengkap agar lebih cepat ditemukan calon pembeli maupun penyewa.
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
  onSaveDraft={handleSaveDraft}
/>
  )}

</div>

      </div>

    </main>
  );
}
