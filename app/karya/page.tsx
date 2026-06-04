"use client";

import { useEffect, useState } from "react";

export default function KaryaPage() {
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("nirmala-history");

    if (data) {
      setJumlah(JSON.parse(data).length);
    }
  }, []);

  return (
    <main className="relative min-h-screen text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background Nirmala"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-24">

        <h1 className="mb-12 text-center text-4xl md:text-6xl">
          📚 Karya Saya
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Total Tulisan */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-2xl">
              Total Tulisan
            </h2>

            <p className="text-6xl font-light">
              {jumlah}
            </p>
          </div>

          {/* Status */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-2xl">
              Status
            </h2>

            <p className="text-xl text-blue-200">
              Penjelajah Labirin Rasa
            </p>
          </div>

        </div>

        {/* Pencapaian */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <h2 className="mb-4 text-2xl">
            Pencapaian
          </h2>

          <p className="text-white/70">
            Kamu telah menuliskan {jumlah} refleksi rasa di Nirmala.
            Setiap tulisan adalah jejak perjalanan emosimu.
          </p>
        </div>

      </section>

    </main>
  );
}