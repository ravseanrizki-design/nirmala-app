"use client";

import Link from "next/link";
import { pelukanKata } from "../../../data/pelukan";

export default function PelukanKataPage() {
  const index =
    new Date().getDate() % pelukanKata.length;

  const quote = pelukanKata[index];

  return (
    <main className="min-h-screen text-white relative">

      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      <nav className="flex justify-between px-10 py-6 bg-white/10 backdrop-blur-md">
        <h1>NIRMALA</h1>

        <Link href="/aksara">
          Kembali
        </Link>
      </nav>

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="max-w-2xl text-center bg-white/10 p-10 rounded-3xl">

          <h1 className="text-5xl mb-6">
            🤍 Pelukan Kata
          </h1>

          <p className="text-2xl italic text-pink-100">
            "{quote}"
          </p>

          <p className="mt-8 text-white/50">
            Pelukan kata hari ini.
          </p>

        </div>

      </section>

    </main>
  );
}