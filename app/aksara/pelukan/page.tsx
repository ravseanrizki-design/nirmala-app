"use client";

import { pelukanKata } from "../../../data/pelukan";
import { useState } from "react";

export default function PelukanPage() {
  const [kata, setKata] = useState("");

  const ambilPelukan = () => {
    const random =
      pelukanKata[
        Math.floor(
          Math.random() * pelukanKata.length
        )
      ];

    setKata(random);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-6">
        🤍 Pelukan Kata
      </h1>

      <button
        onClick={ambilPelukan}
        className="bg-white text-black px-6 py-3 rounded-full"
      >
        Peluk Aku
      </button>

      {kata && (
        <div className="mt-8 bg-white/10 p-6 rounded-xl italic">
          "{kata}"
        </div>
      )}

    </main>
  );
}