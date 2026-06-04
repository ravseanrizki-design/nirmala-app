"use client";

import Link from "next/link";

export default function AksaraPage() {
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
      <section className="px-8 pt-16 text-center">
        <h1 className="text-6xl mb-4">
          Aksara
        </h1>

        <p className="text-white/70 text-xl max-w-2xl mx-auto">
          Tempat perasaan diterjemahkan menjadi kata,
          makna, puisi, dan pelukan yang menenangkan.
        </p>
      </section>

      {/* Menu */}
      <section className="grid md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">

        {/* Tulis Perasaan */}
        <Link href="/tulis">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 transition cursor-pointer h-full">
            <h2 className="text-3xl mb-4">
              ✍️ Tulis Perasaan
            </h2>

            <p className="text-white/70">
              Tuliskan isi hatimu dan biarkan Nirmala
              menerjemahkannya menjadi bahasa yang lebih indah.
            </p>
          </div>
        </Link>

        {/* Cermin Emosi */}
        <Link href="/aksara/cermin-emosi">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 transition cursor-pointer h-full">
            <h2 className="text-3xl mb-4">
              🪞 Cermin Emosi
            </h2>

            <p className="text-white/70">
              Lihat emosi dominan yang muncul dari tulisanmu
              dan pahami dirimu lebih dalam.
            </p>
          </div>
        </Link>

        {/* Pelukan Kata */}
        <Link href="/aksara/pelukan-kata">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 transition cursor-pointer h-full">
            <h2 className="text-3xl mb-4">
              🤍 Pelukan Kata
            </h2>

            <p className="text-white/70">
              Kalimat penguat yang hadir setiap hari
              untuk menemanimu.
            </p>
          </div>
        </Link>

        {/* Puisi */}
        <Link href="/aksara/puisi">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 transition cursor-pointer h-full">
            <h2 className="text-3xl mb-4">
              ✨ Puisi
            </h2>

            <p className="text-white/70">
              Temukan puisi-puisi pendek yang lahir dari
              berbagai suasana hati.
            </p>
          </div>
        </Link>

      </section>

    </main>
  );
}