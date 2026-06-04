"use client";

import { useEffect, useState } from "react";

export default function CerminEmosiPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("nirmala-history");

    if (saved) {
      const history = JSON.parse(saved);

      if (history.length > 0) {
        setData(history[0]);
      }
    }
  }, []);

  const warna: any = {
    sedih: "text-blue-300",
    marah: "text-red-300",
    lelah: "text-purple-300",
    kecewa: "text-gray-300",
    bingung: "text-yellow-300",
    rindu: "text-pink-300",
    netral: "text-white",
  };

  return (
    <main className="min-h-screen text-white relative">

      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      <section className="pt-16 px-6 text-center">

        <h1 className="text-5xl mb-4">
          🪞 Cermin Emosi
        </h1>

        <p className="text-white/60">
          Refleksi dari tulisan terakhirmu.
        </p>

      </section>

      <section className="flex justify-center px-6 py-12">

        <div className="max-w-3xl w-full bg-white/10 rounded-3xl p-10 backdrop-blur-md">

          {!data ? (
            <p className="text-center text-white/60">
              Belum ada tulisan yang dianalisis.
            </p>
          ) : (
            <>

              <div className="text-center mb-10">

                <h2 className="text-xl text-white/60">
                  Emosi Dominan
                </h2>

                <p
                  className={`text-6xl mt-4 capitalize ${
                    warna[data.emosi]
                  }`}
                >
                  {data.emosi}
                </p>

              </div>

              <div className="space-y-6">

                <div>
                  <h3 className="text-lg mb-2">
                    ✍️ Tulisan Terakhir
                  </h3>

                  <p className="text-white/70">
                    {data.text}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">
                    📖 Bahasa Nirmala
                  </h3>

                  <p className="italic text-blue-200">
                    {data.bahasaNirmala}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">
                    🧠 Makna
                  </h3>

                  <p>{data.makna}</p>
                </div>

                <div>
                  <h3 className="text-lg mb-2">
                    🌱 Saran
                  </h3>

                  <p>{data.saran}</p>
                </div>

              </div>

            </>
          )}

        </div>

      </section>

    </main>
  );
}