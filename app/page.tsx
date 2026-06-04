"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
const fiturRef = useRef<HTMLDivElement>(null);
const tentangRef = useRef<HTMLDivElement>(null);

const [showFitur, setShowFitur] = useState(false);
const [showTentang, setShowTentang] = useState(false);

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.target === fiturRef.current && entry.isIntersecting) {
setShowFitur(true);
}

if (entry.target === tentangRef.current && entry.isIntersecting) {
        setShowTentang(true);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

if (fiturRef.current) {
  observer.observe(fiturRef.current);
}

if (tentangRef.current) {
  observer.observe(tentangRef.current);
}

return () => observer.disconnect();


}, []);

return ( <main className="relative text-white">
{/* Background */} <div className="fixed inset-0 -z-10"> <img
       src="/bg.jpg"
       alt="Background Nirmala"
       className="h-full w-full object-cover"
     /> <div className="absolute inset-0 bg-black/60" /> <div className="absolute inset-0 backdrop-blur-sm" /> </div>


  {/* Navbar */}
  <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-white/10 px-10 py-6 backdrop-blur-md">
    <h1 className="font-light tracking-[0.3em]">NIRMALA</h1>

    <div className="flex gap-8 text-sm">
  <Link href="/">Beranda</Link>
  <Link href="/tulis">Tulis</Link>
  <Link href="/aksara">Aksara</Link>
  <Link href="/bahasa">Bahasa</Link>
  <Link href="/galeri">Galeri</Link>
  <a href="#tentang">Tentang</a>
    </div>
  </nav>

  {/* Hero */}
  <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <h1 className="mb-6 text-7xl tracking-[0.4em] md:text-8xl">
      NIRMALA
    </h1>

    <p className="mb-3 text-xl text-blue-200">
      Ruang untuk memahami rasa melalui bahasa
    </p>

    <p className="mb-10 max-w-2xl text-white/70">
      Temukan kata yang mewakili perasaanmu, tuliskan isi hati,
      dan jelajahi keindahan bahasa dalam satu ruang yang tenang.
    </p>

    <a href="#fitur" className="animate-bounce text-sm">
      ↓ Jelajahi Nirmala
    </a>
  </section>

  {/* Fitur */}
  <section
    id="fitur"
    ref={fiturRef}
    className="flex min-h-screen items-center justify-center px-6"
  >
    <div
      className={`max-w-6xl transition-all duration-1000 ${
        showFitur
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="mb-12 text-center text-4xl">
        Bahasa untuk Perasaan
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Cermin Emosi */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <h3 className="mb-4 text-2xl">Cermin Emosi</h3>

          <p className="mb-6 text-white/70">
            Kenali emosi yang sedang kamu rasakan dan temukan
            kata yang paling mewakilinya.
          </p>

          <Link href="/aksara">
            <button className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105">
              Buka
            </button>
          </Link>
        </div>

        {/* Bahasa Nirmala */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <h3 className="mb-4 text-2xl">Bahasa Nirmala</h3>

          <p className="mb-6 text-white/70">
            Jelajahi kosakata pilihan yang dapat memperindah
            cara mengekspresikan perasaan.
          </p>

          <Link href="/bahasa">
            <button className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105">
              Jelajahi
            </button>
          </Link>
        </div>

        {/* Pelukan Kata */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <h3 className="mb-4 text-2xl">Pelukan Kata</h3>

          <p className="mb-6 text-white/70">
            Temukan rangkaian kalimat yang menenangkan,
            menguatkan, dan menemani perjalanan emosimu.
          </p>

          <Link href="/aksara">
            <button className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105">
              Temukan
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Galeri Rasa */}
<div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
  <h3 className="mb-4 text-2xl">Galeri Rasa</h3>

  <p className="mb-6 text-white/70">
    Simpan dan lihat kembali jejak tulisan,
    puisi, serta refleksi perasaan yang pernah
    kamu buat di Nirmala.
  </p>

  <Link href="/galeri">
    <button className="rounded-full bg-white px-5 py-3 text-black transition hover:scale-105">
      Lihat Galeri
    </button>
  </Link>
</div>

  {/* Tentang */}
  <section
    id="tentang"
    ref={tentangRef}
    className="flex min-h-screen items-center justify-center px-6 text-center"
  >
    <div
      className={`max-w-3xl transition-all duration-1000 ${
        showTentang
          ? "translate-x-0 opacity-100"
          : "-translate-x-10 opacity-0"
      }`}
    >
      <h2 className="mb-8 text-4xl">Tentang Nirmala</h2>

      <p className="leading-8 text-white/70">
        Nirmala adalah ruang bahasa dan rasa yang dirancang
        untuk membantu seseorang memahami dirinya melalui kata.
        Dengan perpaduan refleksi emosi, kosakata pilihan,
        dan aktivitas menulis, Nirmala mengajak pengguna
        menemukan cara yang lebih lembut dalam mengenali serta
        mengekspresikan perasaannya.
      </p>

      <Link href="/tentang">
        <button className="mt-10 rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black">
          Pelajari Lebih Lanjut
        </button>
      </Link>
    </div>
  </section>
</main>


);
}