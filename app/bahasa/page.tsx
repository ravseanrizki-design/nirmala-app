import Link from "next/link";
import { kamusNirmala } from "../../data/kamus";

export default function BahasaPage() {
  const daftarKata = Object.entries(kamusNirmala);

  return (
    <main className="min-h-screen text-white relative">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-20 flex justify-between px-10 py-6 bg-white/10 backdrop-blur-md">
        <h1 className="text-xl font-bold">NIRMALA</h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/tulis">Aksara</Link>
          <Link href="/bahasa">Bahasa</Link>
          <Link href="/galeri">Galeri</Link>
          <Link href="/tentang">Tentang</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-light mb-4">
          Bahasa Nirmala
        </h1>

        <p className="text-white/70 mb-12">
          Kumpulan kosakata yang digunakan dalam semesta Nirmala.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          {daftarKata.map(([asal, nirmala]) => (
            <div
              key={asal}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10"
            >
              <p className="text-white/60 text-sm">
                Bahasa Umum
              </p>

              <h2 className="text-xl mt-1">
                {asal}
              </h2>

              <div className="h-px bg-white/10 my-3" />

              <p className="text-blue-200 text-lg italic">
                {nirmala}
              </p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}import { kataHari }   from "../../data/kataHariIni";