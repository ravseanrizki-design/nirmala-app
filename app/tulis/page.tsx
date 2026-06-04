import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen relative text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <h1 className="text-6xl md:text-8xl font-light mb-6">
          NIRMALA
        </h1>

        <p className="max-w-2xl text-white/70 text-lg mb-12">
          Ruang digital tempat perasaan diterjemahkan
          menjadi bahasa, puisi, dan makna.
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

          <Link
            href="/aksara"
            className="bg-white/10 p-8 rounded-3xl hover:bg-white/20 transition"
          >
            <h2 className="text-2xl mb-3">
              ✍️ AKSARA
            </h2>

            <p className="text-white/60">
              Tulis perasaan, pelukan kata,
              cermin emosi, dan puisi.
            </p>
          </Link>

          <Link
            href="/bahasa"
            className="bg-white/10 p-8 rounded-3xl hover:bg-white/20 transition"
          >
            <h2 className="text-2xl mb-3">
              📖 Bahasa Nirmala
            </h2>

            <p className="text-white/60">
              Kamus emosi dan kosakata baru.
            </p>
          </Link>

          <Link
            href="/galeri"
            className="bg-white/10 p-8 rounded-3xl hover:bg-white/20 transition"
          >
            <h2 className="text-2xl mb-3">
              🌌 Galeri Rasa
            </h2>

            <p className="text-white/60">
              Kumpulan tulisan dan puisi yang lahir.
            </p>
          </Link>

          <Link
            href="/karya"
            className="bg-white/10 p-8 rounded-3xl hover:bg-white/20 transition"
          >
            <h2 className="text-2xl mb-3">
              📚 Karya Saya
            </h2>

            <p className="text-white/60">
              Statistik perjalanan emosimu.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}