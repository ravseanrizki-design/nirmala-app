import Link from "next/link";

export default function AksaraPage() {
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
      <nav className="sticky top-0 z-20 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-lg md:text-xl font-bold tracking-wider">
              NIRMALA
            </h1>

            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              <Link href="/" className="hover:text-white/70 transition">
                Home
              </Link>

              <Link href="/aksara" className="hover:text-white/70 transition">
                Aksara
              </Link>

              <Link href="/bahasa" className="hover:text-white/70 transition">
                Bahasa
              </Link>

              <Link href="/galeri" className="hover:text-white/70 transition">
                Galeri
              </Link>

              <Link href="/tentang" className="hover:text-white/70 transition">
                Tentang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <h1 className="text-3xl md:text-5xl font-light mb-4">
          Aksara
        </h1>

        <p className="text-white/70 text-sm md:text-base mb-10 md:mb-12">
          Tempat perasaan diterjemahkan menjadi kata.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Link
            href="/tulis"
            className="bg-white/10 p-5 md:p-6 rounded-xl hover:bg-white/20 transition"
          >
            <h2 className="text-xl md:text-2xl mb-2">
              ✍️ Tulis Perasaan
            </h2>

            <p className="text-white/70 text-sm md:text-base">
              Ceritakan isi hatimu dan biarkan Nirmala membacanya.
            </p>
          </Link>

          <div className="bg-white/10 p-5 md:p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl mb-2">
              🪞 Cermin Emosi
            </h2>

            <p className="text-white/70 text-sm md:text-base">
              Menampilkan emosi dominan dari tulisanmu.
            </p>
          </div>

          <div className="bg-white/10 p-5 md:p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl mb-2">
              🤍 Pelukan Kata
            </h2>

            <p className="text-white/70 text-sm md:text-base">
              Kalimat penguat yang hadir secara acak.
            </p>
          </div>

          <div className="bg-white/10 p-5 md:p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl mb-2">
              ✨ Puisi
            </h2>

            <p className="text-white/70 text-sm md:text-base">
              Puisi pendek yang lahir dari suasana hatimu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}