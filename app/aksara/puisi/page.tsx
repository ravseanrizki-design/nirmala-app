"use client";

import { puisiNirmala } from "../../../data/puisi";
import { useState } from "react";

export default function PuisiPage() {
  const [puisi, setPuisi] = useState("");

  const ambilPuisi = () => {
    const random =
      puisiNirmala[
        Math.floor(Math.random() * puisiNirmala.length)
      ];

    setPuisi(random);
  };

  return (
    <main className="min-h-screen text-white relative">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      {/* Header */}
      <section className="pt-16 px-6 text-center">
        <h1 className="text-5xl mb-4">
          ✨ Puisi Nirmala
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto">
          Setiap puisi adalah potongan rasa yang dapat
          menemanimu hari ini.
        </p>
      </section>

      {/* Konten */}
      <section className="flex flex-col items-center px-6 py-12">

        <button
          onClick={ambilPuisi}
          className="
            bg-white
            text-black
            px-6
            py-3
            rounded-full
            hover:scale-105
            transition
          "
        >
          Ambil Puisi
        </button>

        {puisi && (
          <div
            className="
              mt-10
              max-w-3xl
              w-full
              bg-white/10
              backdrop-blur-md
              p-8
              rounded-3xl
            "
          >
            <p className="whitespace-pre-line text-center text-xl leading-10 italic">
              {puisi}
            </p>
          </div>
        )}

      </section>

    </main>
  );
}