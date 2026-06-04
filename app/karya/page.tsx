"use client";

import { useEffect, useState } from "react";

export default function KaryaPage() {
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    const data =
      localStorage.getItem("nirmala-history");

    if (data) {
      setJumlah(JSON.parse(data).length);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl mb-8">
        📚 Karya Saya
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/10 p-6 rounded-xl">
          <h2 className="text-xl mb-2">
            Total Tulisan
          </h2>

          <p className="text-5xl">
            {jumlah}
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h2 className="text-xl mb-2">
            Status
          </h2>

          <p>
            Penjelajah Labirin Rasa
          </p>
        </div>

      </div>

    </main>
  );
}