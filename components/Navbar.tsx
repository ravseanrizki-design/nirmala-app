"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-light tracking-widest"
        >
          NIRMALA
        </Link>

        <div className="flex gap-6 text-sm">

          <Link href="/aksara">
            Aksara
          </Link>

          <Link href="/bahasa">
            Bahasa
          </Link>

          <Link href="/galeri">
            Galeri
          </Link>

          <Link href="/karya">
            Karya
          </Link>

          <Link href="/tentang">
            Tentang
          </Link>

        </div>

      </div>

    </nav>
  );
}