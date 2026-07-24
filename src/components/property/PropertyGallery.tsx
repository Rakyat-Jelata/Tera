"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
  location: string;
}

export default function PropertyGallery({
  images,
  title,
  location,
}: PropertyGalleryProps) {

  const gallery =
    images && images.length > 0
      ? images
      : ["/images/no-image.jpg"];

  const [activeImage, setActiveImage] = useState(gallery[0]);

  useEffect(() => {
    setActiveImage(gallery[0]);
  }, [images]);

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg">

      <div className="relative h-[520px]">

        <Image
          src={activeImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-6 top-6 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
          {gallery.length > 1 ? "Galeri Foto" : "Foto Properti"}
        </div>

        <div className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur">
          📸 {gallery.length} Foto
        </div>

        <div className="absolute bottom-6 left-6">

          <h1 className="text-4xl font-black text-white">
            {title}
          </h1>

          <p className="mt-2 text-lg text-slate-200">
            📍 {location}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-4 gap-2 p-2 md:grid-cols-5 lg:grid-cols-6">

        {gallery.map((image, index) => (

          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative h-24 overflow-hidden rounded-2xl border-2 transition ${
              activeImage === image
                ? "border-cyan-500 ring-2 ring-cyan-200"
                : "border-transparent hover:border-slate-300"
            }`}
          >

            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="160px"
              className="object-cover transition duration-300 hover:scale-110"
            />

          </button>

        ))}

      </div>

    </section>
  );
}
