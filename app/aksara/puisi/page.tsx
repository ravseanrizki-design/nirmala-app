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
    <main className="min-h-screen bg-black text-white px-4 py-8 md:px-10 md:py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl mb-6">
          ✨ Puisi Nirmala
        </h1>

        <button
          onClick={ambilPuisi}
          className="
            bg-white
            text-black
            px-5
            py-3
            md:px-6
            rounded-full
            text-sm
            md:text-base
            hover:opacity-90
            transition
          "
        >
          Ambil Puisi
        </button>

        {puisi && (
          <div
            className="
              mt-8
              bg-white/10
              p-4
              md:p-6
              rounded-xl
              whitespace-pre-line
              leading-relaxed
              text-sm
              md:text-base
            "
          >
            {puisi}
          </div>
        )}
      </div>
    </main>
  );
}