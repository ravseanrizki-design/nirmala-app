"use client";

import Link from "next/link";

export default function Navbar() { 
  return (
   <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

    <Link
      href="/"
      className="text-white text-xl md:text-2xl font-light tracking-[0.3em]"
    >
      NIRMALA
    </Link>

    <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-white">

      <Link href="/" className="hover:text-blue-200 transition">
        Beranda
      </Link>

      <Link href="/tulis" className="hover:text-blue-200 transition">
        Tulis
      </Link>

      <Link href="/aksara" className="hover:text-blue-200 transition">
        Aksara
      </Link>

      <Link href="/bahasa" className="hover:text-blue-200 transition">
        Bahasa
      </Link>

      <Link href="/karya" className="hover:text-blue-200 transition">
        Karya
      </Link>

      <Link href="/galeri" className="hover:text-blue-200 transition">
        Galeri
      </Link>

      <Link href="/tentang" className="hover:text-blue-200 transition">
        Tentang
      </Link>

    </div>
  </div>
</nav>
  );
}