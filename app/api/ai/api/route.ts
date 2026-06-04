export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    const lower = text.toLowerCase();

    let emosi = "tenang";

    if (lower.includes("sedih")) emosi = "sedih";
    else if (lower.includes("marah")) emosi = "marah";
    else if (lower.includes("capek") || lower.includes("lelah")) emosi = "lelah";

    // 🔑 Ambil kata unik dari input (biar personal)
    const kataUser = text.split(" ").slice(0, 5).join(" ");

    // 🎭 Variasi puisi
    const puisiDB: any = {
      sedih: [
        `Di sela sunyi, ${kataUser} berpendar lirih,\nseperti luka yang enggan pulih.`,
        `Hujan jatuh tanpa suara,\nseperti ${kataUser} yang tak sempat bicara.`,
        `Ada sendu dalam langkahmu,\ntercermin dari ${kataUser} yang rapuh.`,
      ],
      marah: [
        `Api kecil tumbuh dalam diam,\ntersembunyi di balik ${kataUser} yang kelam.`,
        `Amarah bergetar tanpa arah,\nseperti ${kataUser} yang pecah.`,
      ],
      lelah: [
        `Langkahmu pelan, waktu terasa berat,\n${kataUser} seolah ikut tersendat.`,
        `Di tubuh yang lelah,\n${kataUser} menjadi isyarat untuk rebah.`,
      ],
      tenang: [
        `Dalam hening, ${kataUser} menemukan ruang,\nuntuk sekadar pulang.`,
        `Sunyi tidak selalu sepi,\nkarena ${kataUser} tetap menemani.`,
      ],
    };

    // 🎲 Ambil random puisi
    const randomPick = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    const puisi = randomPick(puisiDB[emosi]);

    // 🧠 Makna variatif
    const maknaDB: any = {
      sedih: [
        "Ada kesedihan yang sedang kamu rasakan.",
        "Hatimu sedang butuh ruang untuk beristirahat.",
      ],
      marah: [
        "Ada emosi kuat yang ingin keluar.",
        "Kamu sedang menahan sesuatu yang berat.",
      ],
      lelah: [
        "Tubuh dan pikiranmu sedang kelelahan.",
        "Kamu butuh jeda, bukan paksaan.",
      ],
      tenang: [
        "Perasaanmu sedang stabil.",
        "Ada ketenangan yang sedang kamu jaga.",
      ],
    };

    const makna = randomPick(maknaDB[emosi]);

    // 🌱 Saran variatif
    const saranDB: any = {
      sedih: [
        "Tidak apa-apa untuk merasa seperti ini.",
        "Coba tarik napas perlahan dan beri waktu untuk dirimu.",
      ],
      marah: [
        "Luapkan dengan cara yang aman.",
        "Coba menulis atau berjalan sejenak.",
      ],
      lelah: [
        "Istirahat adalah bentuk peduli diri.",
        "Kamu tidak harus kuat setiap saat.",
      ],
      tenang: [
        "Pertahankan ritme ini.",
        "Nikmati momen tanpa terburu-buru.",
      ],
    };

    const saran = randomPick(saranDB[emosi]);

    return Response.json({
      emosi,
      puisi,
      makna,
      saran,
    });

  } catch (err) {
    return Response.json({
      error: "Terjadi kesalahan di server",
    });
  }
}