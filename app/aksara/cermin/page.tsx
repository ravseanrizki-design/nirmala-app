"use client";

import { useState } from "react";

export default function CerminPage() {
  const [hasil, setHasil] = useState("");

  const cekEmosi = (emosi: string) => {
    const data: any = {
      sedih: "Hari ini hatimu sedang rapuh.",
      marah: "Ada sesuatu yang mengganggu batinmu.",
      rindu: "Ada seseorang atau masa yang sedang kamu kenang.",
      bingung: "Pikiranmu sedang mencari arah.",
      lelah: "Tubuh dan pikiranmu butuh jeda.",
    };

    setHasil(data[emosi]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-6">
        🪞 Cermin Emosi
      </h1>

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => cekEmosi("sedih")}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Sedih
        </button>

        <button
          onClick={() => cekEmosi("marah")}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Marah
        </button>

        <button
          onClick={() => cekEmosi("rindu")}
          className="bg-pink-500 px-4 py-2 rounded"
        >
          Rindu
        </button>

        <button
          onClick={() => cekEmosi("bingung")}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Bingung
        </button>

      </div>

      {hasil && (
        <div className="mt-8 bg-white/10 p-6 rounded-xl">
          {hasil}
        </div>
      )}

    </main>
  );
}