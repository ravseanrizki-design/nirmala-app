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
      <nav className="sticky top-0 z-20 flex justify-between px-10 py-6 bg-white/10 backdrop-blur-md">
        <h1 className="text-xl font-bold">NIRMALA</h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/aksara">Aksara</Link>
          <Link href="/bahasa">Bahasa</Link>
          <Link href="/galeri">Galeri</Link>
          <Link href="/tentang">Tentang</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-light mb-4">
          Aksara
        </h1>

        <p className="text-white/70 mb-12">
          Tempat perasaan diterjemahkan menjadi kata.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/tulis"
            className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
          >
            <h2 className="text-2xl mb-2">
              ✍️ Tulis Perasaan
            </h2>

            <p className="text-white/70">
              Ceritakan isi hatimu dan biarkan Nirmala membacanya.
            </p>
          </Link>

          <div className="bg-white/10 p-6 rounded-xl">
            <h2 className="text-2xl mb-2">
              🪞 Cermin Emosi
            </h2>

            <p className="text-white/70">
              Menampilkan emosi dominan dari tulisanmu.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h2 className="text-2xl mb-2">
              🤍 Pelukan Kata
            </h2>

            <p className="text-white/70">
              Kalimat penguat yang hadir secara acak.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h2 className="text-2xl mb-2">
              ✨ Puisi
            </h2>

            <p className="text-white/70">
              Puisi pendek yang lahir dari suasana hatimu.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}