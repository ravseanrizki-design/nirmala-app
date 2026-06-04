"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GaleriPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("nirmala-history");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  return (
    <main className="relative min-h-screen text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>


      {/* Header */}
      <section className="text-center pt-20 pb-12 px-6">
        <h1 className="text-5xl mb-4">
          Galeri Rasa
        </h1>

        <p className="max-w-2xl mx-auto text-white/70">
          Tempat tersimpannya jejak perasaan,
          puisi, dan bahasa yang pernah kamu temukan
          di dalam Nirmala.
        </p>
      </section>

      {/* Isi Galeri */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        {history.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-2xl mb-4">
              Belum ada karya tersimpan
            </h2>

            <p className="text-white/60 mb-8">
              Mulailah menulis di Labirin Rasa,
              lalu hasilnya akan muncul di sini.
            </p>

            <Link href="/aksara/cermin-emosi">
              <button className="bg-white text-black px-6 py-3 rounded-full">
                Mulai Menulis
              </button>
            </Link>

          </div>
        ) : (
          <div className="grid gap-6">

            {history.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
              >
                <h3 className="text-xl mb-4">
                  Catatan #{history.length - index}
                </h3>

                <div className="space-y-4">

                  <div>
                    <p className="text-white/50 text-sm mb-1">
                      Tulisan Asli
                    </p>

                    <p>
                      {item.text}
                    </p>
                  </div>

                  {item.bahasaNirmala && (
                    <div>
                      <p className="text-white/50 text-sm mb-1">
                        Bahasa Nirmala
                      </p>

                      <p className="italic text-blue-200">
                        {item.bahasaNirmala}
                      </p>
                    </div>
                  )}

                  {item.puisi && (
                    <div>
                      <p className="text-white/50 text-sm mb-1">
                        Puisi
                      </p>

                      <p className="whitespace-pre-line">
                        {item.puisi}
                      </p>
                    </div>
                  )}

                  {item.pelukan && (
                    <div>
                      <p className="text-white/50 text-sm mb-1">
                        Pelukan Kata
                      </p>

                      <p className="italic text-pink-200">
                        "{item.pelukan}"
                      </p>
                    </div>
                  )}

                  {item.makna && (
                    <div>
                      <p className="text-white/50 text-sm mb-1">
                        Makna
                      </p>

                      <p>
                        {item.makna}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>
        )}
      </section>
    </main>
  );
}