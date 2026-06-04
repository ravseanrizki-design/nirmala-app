import { kamusNirmala } from "../../../data/kamus";

export default function KamusPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-8">
        📖 Kamus Nirmala
      </h1>

      <div className="space-y-3">
        {Object.entries(kamusNirmala).map(
          ([indo, nirmala]) => (
            <div
              key={indo}
              className="bg-white/10 p-4 rounded"
            >
              <p className="font-bold">
                {indo}
              </p>

              <p className="text-blue-200">
                {String(nirmala)}
              </p>
            </div>
          )
        )}
      </div>

    </main>
  );
}