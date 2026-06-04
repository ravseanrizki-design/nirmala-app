"use client";

import { puisiNirmala } from "../../../data/puisi";
import { useState } from "react";

export default function PuisiPage() {
  const [puisi, setPuisi] = useState("");

  const ambilPuisi = () => {
    const random =
      puisiNirmala[
        Math.floor(
          Math.random() * puisiNirmala.length
        )
      ];

    setPuisi(random);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-6">
        ✨ Puisi Nirmala
      </h1>

      <button
        onClick={ambilPuisi}
        className="bg-white text-black px-6 py-3 rounded-full"
      >
        Ambil Puisi
      </button>

      {puisi && (
        <div className="mt-8 bg-white/10 p-6 rounded-xl whitespace-pre-line">
          {puisi}
        </div>
      )}

    </main>
  );
}