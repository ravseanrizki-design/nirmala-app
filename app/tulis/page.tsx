"use client";

import { kamusNirmala } from "../../data/kamus";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { puisiNirmala } from "../../data/puisi";
import { pelukanKata } from "../../data/pelukan";

type ResultType = {
  puisi: string;
  makna: string;
  saran: string;
  text: string;
  bahasaNirmala: string;
  bahasaEmosi: string;
  maknaBahasa: string;
  pelukan: string;
};
export default function TulisPage() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [result, setResult] = useState<ResultType | null>(null);
  const [history, setHistory] = useState<ResultType[]>([]);
  const [bgColor, setBgColor] = useState("bg-black/30");

  const rainRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("nirmala-history");

    if (saved) {
      setHistory(JSON.parse(saved));
    }

    if (rainRef.current) {
      rainRef.current.volume = 0.15;
      rainRef.current.play().catch(() => {});
    }
  }, []);

  const handleSubmit = () => {
    if (!text.trim()) return;

    const bahasaNirmala = text
      .split(" ")
      .map((kata) => {
        const bersih = kata.toLowerCase();
        return (kamusNirmala as Record<string, string>)[bersih] || kata;
      })
      .join(" ");

    const lower = text.toLowerCase();

    let emosi = "netral";

    if (
      lower.includes("sedih") ||
      lower.includes("kecewa") ||
      lower.includes("menangis")
    ) {
      emosi = "sedih";
    } else if (
      lower.includes("marah") ||
      lower.includes("kesal")
    ) {
      emosi = "marah";
    } else if (
      lower.includes("lelah") ||
      lower.includes("capek")
    ) {
      emosi = "lelah";
    } else if (
      lower.includes("rindu")
    ) {
      emosi = "rindu";
    } else if (
      lower.includes("bingung")
    ) {
      emosi = "bingung";
    }

    const warna: Record<string, string> = {
      sedih: "bg-blue-900/50",
      marah: "bg-red-900/50",
      lelah: "bg-purple-900/50",
      rindu: "bg-pink-900/50",
      bingung: "bg-yellow-900/50",
      netral: "bg-black/30",
    };

    setBgColor(warna[emosi]);
    let bahasaEmosi = "";
let maknaBahasa = "";

if (emosi === "sedih") {
  bahasaEmosi = "Gulana";
  maknaBahasa =
    "Gulana adalah keadaan hati yang dipenuhi kesedihan dan perenungan yang sunyi.";
}

if (emosi === "marah") {
  bahasaEmosi = "Amarah";
  maknaBahasa =
    "Amarah adalah gejolak emosi yang muncul ketika hati merasa terluka atau tidak diterima.";
}

if (emosi === "lelah") {
  bahasaEmosi = "Derana";
  maknaBahasa =
    "Derana menggambarkan kelelahan yang tidak hanya dirasakan tubuh tetapi juga jiwa.";
}

if (emosi === "rindu") {
  bahasaEmosi = "Renjana";
  maknaBahasa =
    "Renjana adalah kerinduan yang mendalam terhadap seseorang, tempat, atau masa.";
}

if (emosi === "bingung") {
  bahasaEmosi = "Resah";
  maknaBahasa =
    "Resah adalah keadaan hati yang mencari arah di tengah ketidakpastian.";
}

if (emosi === "netral") {
  bahasaEmosi = "Saujana";
  maknaBahasa =
    "Saujana menggambarkan keluasan rasa yang tenang dan belum didominasi emosi tertentu.";
}

    const kataEmosi: Record<string, string> = {
      sedih: "gulana",
      marah: "amarah",
      lelah: "derana",
      rindu: "renjana",
      bingung: "resah",
      netral: "saujana",
    };

    const kata = kataEmosi[emosi];
    const puisiRandom =
  puisiNirmala[
    Math.floor(Math.random() * puisiNirmala.length)
  ];

const pelukan =
  pelukanKata[
    Math.floor(Math.random() * pelukanKata.length)
  ];

    const puisi = `
Di antara sunyi yang jatuh perlahan,
aku menemukan ${kata} dalam diam.

Ia tidak berisik,
namun cukup kuat untuk mengubah arah langkahku.

Dan di sela waktu yang berjalan,
aku belajar bahwa setiap rasa
layak untuk dipeluk.
`;

    const makna = `Tulisanmu menunjukkan nuansa ${kata}. Perasaan ini sedang cukup dominan dalam dirimu saat ini.`;

    const saranMap: Record<string, string> = {
      sedih:
        "Tidak apa-apa merasa sedih. Beri dirimu ruang untuk beristirahat dan menerima perasaan itu.",

      marah:
        "Cobalah memberi jeda sebelum bereaksi. Kadang ketenangan memberi jawaban yang lebih baik.",

      lelah:
        "Tubuh dan pikiranmu mungkin sedang meminta waktu untuk pulih. Istirahat juga bagian dari perjalanan.",

      rindu:
        "Rindu adalah bukti bahwa sesuatu pernah berarti. Tidak semua yang jauh harus dilupakan.",

      bingung:
        "Kamu tidak harus menemukan semua jawaban hari ini. Satu langkah kecil sudah cukup.",

      netral:
        "Teruslah mendengarkan isi hatimu dengan lembut.",
    };

    const saran = saranMap[emosi];

   const newResult: ResultType = {
  puisi: puisiRandom,
  makna,
  saran,
  text,
  bahasaNirmala,
  bahasaEmosi,
  maknaBahasa,
  pelukan,
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

      <audio
        ref={rainRef}
        src="/rain.mp3"
        loop
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 ${bgColor} transition-all duration-1000`}
        />

        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      {/* Back */}
      <button
        onClick={() => router.back()}
        className="fixed top-24 left-4 z-20 rounded-full bg-white px-3 py-2 text-black"
      >
        ←
      </button>

      <section className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-24">

        <h1 className="mb-4 text-center text-4xl md:text-5xl">
          Labirin Rasa
        </h1>

        <p className="mb-8 text-center text-white/70">
          Tuliskan isi hatimu. Nirmala akan membantu
          menerjemahkannya menjadi bahasa, makna,
          dan puisi.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis perasaanmu di sini..."
          className="h-52 w-full rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md outline-none placeholder:text-white/50"
        />

        <button
          onClick={handleSubmit}
          className="mx-auto mt-6 rounded-full bg-white px-8 py-3 text-black transition hover:scale-105"
        >
          Analisis
        </button>

        {result && (
          <div className="mt-10 space-y-4">

          <div className="rounded-3xl bg-white/10 p-5">
  <h3 className="mb-3 text-lg">
    📖 Bahasa Nirmala
  </h3>

  <p className="mb-3 text-xl font-semibold text-blue-200">
    Perasaanmu saat ini disebut "{result.bahasaEmosi}"
  </p>

  <p className="text-white/80">
    {result.maknaBahasa}
  </p>
</div>  

            <div className="rounded-3xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">
                ✨ Puisi
              </h3>

              <p className="whitespace-pre-line">
                {result.puisi}
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5">
  <h3 className="mb-2 text-lg">
    🤍 Pelukan Kata
  </h3>

  <p className="italic text-pink-100">
    "{result.pelukan}"
  </p>
</div>

            <div className="rounded-3xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">
                🧠 Makna
              </h3>

              <p>{result.makna}</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5">
              <h3 className="mb-2 text-lg">
                🌱 Saran
              </h3>

              <p>{result.saran}</p>
            </div>

          </div>
        )}

        {history.length > 0 && (
          <div className="mt-10">

            <h3 className="mb-4 text-xl">
              🕰️ Riwayat Tulisan
            </h3>

            <div className="space-y-3">

              {history.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 p-4"
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
    </main>
  );
}