export default function KosakataBaruPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-6">
        🌱 Kosakata Baru
      </h1>

      <div className="space-y-4">

        <div className="bg-white/10 p-4 rounded">
          <h2>Senandika</h2>
          <p className="opacity-70">
            Percakapan batin dengan diri sendiri.
          </p>
        </div>

        <div className="bg-white/10 p-4 rounded">
          <h2>Renjana</h2>
          <p className="opacity-70">
            Kerinduan yang dalam dan hangat.
          </p>
        </div>

      </div>

    </main>
  );
}