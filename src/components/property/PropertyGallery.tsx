"use client";

import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
];

export default function PropertyGallery() {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg">

      <div className="relative h-[520px]">

        <Image
          src={images[0]}
          alt="Property"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-6 top-6 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
          Featured
        </div>

        <div className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur">
          📸 12 Foto
        </div>

        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl font-black text-white">
            Rumah Minimalis Modern
          </h1>

          <p className="mt-2 text-lg text-slate-200">
            📍 Bogor, Jawa Barat
          </p>
        </div>

      </div>

      <div className="grid grid-cols-4 gap-2 p-2">

        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-28 overflow-hidden rounded-2xl"
          >
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              fill
              className="object-cover transition duration-300 hover:scale-110"
            />
          </div>
        ))}

      </div>

    </section>
  );
}
