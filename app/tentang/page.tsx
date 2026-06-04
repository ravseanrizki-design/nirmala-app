"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TentangPage() {
  const router = useRouter();

  return (
    <main className="relative text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* efek titik air */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:25px_25px] opacity-20" />
      </div>


      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-24 left-6 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <span className="text-black text-lg">←</span>
      </button>

      {/* SECTION 1 */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-light mb-6">
            Tentang NIRMALA
          </h2>

          <p className="text-blue-100 max-w-xl mx-auto">
            Ruang sunyi untuk menuliskan rasa yang tak sempat diucapkan.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl mb-6 font-light">
            Latar Belakang
          </h3>

          <p className="text-blue-100 leading-relaxed">
            Banyak perasaan tidak memiliki ruang untuk disampaikan.
            Dalam diam, kata-kata tertahan dan perlahan mengendap.
            NIRMALA hadir sebagai tempat untuk melepas itu semua.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl mb-6 font-light">
            Tentang Aplikasi
          </h3>

          <p className="text-blue-100 leading-relaxed">
            Dengan bantuan AI, curhatan sederhana dapat berubah menjadi
            rangkaian kata yang lebih puitis, tenang, dan bermakna.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl mb-6 font-light">
            Sebuah Pesan
          </h3>

          <p className="text-blue-200 italic leading-relaxed text-lg">
            "Tidak semua rasa harus dimengerti orang lain,
            tapi setiap rasa layak untuk dituliskan."
          </p>
        </div>
      </section>

    </main>
  );
}