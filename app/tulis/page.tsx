"use client";

import { kamusNirmala } from "../../data/kamus";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ResultType = {
  puisi: string;
  makna: string;
  saran: string;
  text: string;
  bahasaNirmala: string;
};

export default function TulisPage() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [result, setResult] = useState<ResultType | null>(null);
  const [bgColor, setBgColor] = useState("bg-black/30");
  const [history, setHistory] = useState<ResultType[]>([]);

  const rainRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (rainRef.current) {
      rainRef.current.volume = 0.2;
      rainRef.current.play().catch(() => {});
    }

    const saved = localStorage.getItem("nirmala-history");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = () => {
    if (!text.trim()) return;

    const bahasaNirmala = text
      .split(" ")
      .map((kata) => {
        const bersih = kata.toLowerCase();
        return kamusNirmala[bersih] || kata;
      })
      .join(" ");

    const lower = text.toLowerCase();

    let emosi = "netral";

    if (lower.includes("sedih")) emosi = "sedih";
    else if (lower.includes("marah")) emosi = "marah";
    else if (lower.includes("lelah")) emosi = "lelah";
    else if (lower.includes("kecewa")) emosi = "kecewa";
    else if (lower.includes("bingung")) emosi = "bingung";
    else if (lower.includes("rindu")) emosi = "rindu";

    const warna: Record<string, string> = {
      sedih: "bg-blue-900/60",
      marah: "bg-red-900/60",
      lelah: "bg-purple-900/60",
      kecewa: "bg-gray-800/60",
      bingung: "bg-yellow-900/60",
      rindu: "bg-pink-900/60",
      netral: "bg-black/30",
    };

    setBgColor(warna[emosi]);

    const kamusNirmala: Record<string, string> = {
      sedih: "laram",
      marah: "amarah",
      lelah: "letih",
      kecewa: "nestapa",
      bingung: "resah",
      rindu: "renjana",
      netral: "saujana",
    };

    const kata = kamusNirmala[emosi];

    const puisi = `
Di antara sunyi yang jatuh perlahan,
aku menemukan ${kata} dalam diam.
Ia tidak berisik,
namun cukup kuat untuk mengubah arah langkahku.
`;

    const makna = `Perasaanmu mengarah pada ${kata}.`;

    const saran =
      "Pelan saja, kamu tidak harus memahami semuanya hari ini.";

    const lagu: Record<string, string> = {
      sedih: "/sedih.mp3",
      marah: "/marah.mp3",
      lelah: "/lelah.mp3",
      kecewa: "/kecewa.mp3",
      bingung: "/bingung.mp3",
      rindu: "/rindu.mp3",
      netral: "/netral.mp3",
    };

    if (musicRef.current) {
      musicRef.current.src = lagu[emosi];
      musicRef.current.volume = 0.6;
      musicRef.current.play().catch(() => {});
    }

    if (rainRef.current) {
      rainRef.current.volume = 0.1;
    }

    const newResult: ResultType = {
      puisi,
      makna,
      saran,
      text,
      bahasaNirmala,
    };

    setResult(newResult);

    const updatedHistory = [newResult, ...history].slice(0, 5);

    setHistory(updatedHistory);

    localStorage.setItem(
      "nirmala-history",
      JSON.stringify(updatedHistory)
    );
  };

  return (
    <main className="relative min-h-screen text-white">

      {/* AUDIO */}
      <audio ref={rainRef} src="/rain.mp3" loop />
      <audio ref={musicRef} loop />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background Nirmala"
          className="h-full w-full object-cover"
        />

        <div
          className={`absolute inset-0 ${bgColor} transition-all duration-1000`}
        />

        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-10 md:py-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

            <h1 className="text-lg font-light tracking-[0.3em]">
              NIRMALA
            </h1>

            <div className="flex flex-wrap justify-center gap-3 text-xs md:gap-8 md:text-sm">
              <Link href="/">Beranda</Link>
              <Link href="/tulis">Tulis</Link>
              <Link href="/aksara">Aksara</Link>
              <Link href="/bahasa">Bahasa</Link>
              <Link href="/karya">Karya</Link>
              <Link href="/galeri">Galeri</Link>
              <Link href="/tentang">Tentang</Link>
            </div>

          </div>
        </div>
      </nav>

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed left-4 top-24 rounded-full bg-white px-3 py-2 text-black shadow-lg"
      >
        ←
      </button>

      {/* CONTENT */}
      <section className="flex min-h-screen flex-col items-center px-4 py-20">

        <h2 className="mb-6 text-center text-3xl md:text-5xl">
          Labirin Rasa
        </h2>

        <p className="mb-8 max-w-2xl text-center text-white/70">
          Tuliskan apa yang sedang kamu rasakan. Nirmala akan
          menerjemahkannya menjadi bahasa, makna, dan puisi.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis perasaanmu di sini..."
          className="h-48 w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md outline-none placeholder:text-white/50"
        />

        <button
          onClick={handleSubmit}
          className="mt-6 rounded-full bg-white px-8 py-3 text-black transition hover:scale-105"
        >
          Analisis
        </button>

        {result && (
          <div className="mt-10 w-full max-w-2xl space-y-4">

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">📖 Bahasa Nirmala</h3>

              <p className="italic text-blue-200">
                {result.bahasaNirmala}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">✨ Puisi</h3>

              <p className="whitespace-pre-line">
                {result.puisi}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">🧠 Makna</h3>

              <p>{result.makna}</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">🌱 Saran</h3>

              <p>{result.saran}</p>
            </div>

          </div>
        )}

        {history.length > 0 && (
          <div className="mt-12 w-full max-w-2xl">

            <h3 className="mb-4 text-xl">
              🕰️ Riwayat
            </h3>

            <div className="space-y-3">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/5 p-4"
                >
                  <p className="text-sm text-white/60">
                    "{item.text}"
                  </p>

                  <p className="mt-2">
                    {item.makna}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

      </section>

      {/* WATERMARK */}
      <div className="fixed bottom-4 left-0 w-full text-center pointer-events-none">
        <p className="text-sm italic text-white/40">
          {result?.makna ||
            "Tulisan terindahmu adalah bentuk perasaanmu hari ini."}
        </p>
      </div>

    </main>
  );
}