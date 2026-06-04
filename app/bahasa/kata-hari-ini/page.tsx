import { kamusNirmala } from "../../../data/kamus";

export default function KataHariIniPage() {
  const semuaKata = Object.entries(kamusNirmala);

  const random =
    semuaKata[
      new Date().getDate() %
      semuaKata.length
    ];

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl mb-4">
          Kata Hari Ini
        </h1>

        <h2 className="text-3xl text-blue-300">
          {random?.[1]}
        </h2>

        <p className="opacity-70 mt-3">
          berasal dari kata "{random?.[0]}"
        </p>

      </div>

    </main>
  );
}