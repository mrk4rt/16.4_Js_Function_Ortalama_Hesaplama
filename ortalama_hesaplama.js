function ortalamaHesapla() {
  let sayiListesi = [];
  let toplam = 0;

  while (true) {
    let girdi = prompt("Bir sayı girin (veya işlemi bitirmek için 'q' yazın):");

    if (girdi.toLowerCase() === "q") {
      break; // Döngüyü sonlandır
    }

    let sayi = parseFloat(girdi);

    if (isNaN(sayi)) {
      alert("Lütfen geçerli bir sayı girin!");
      continue; // Geçersiz girişte döngünün başına dön
    }

    sayiListesi.push(sayi);
  }

  if (sayiListesi.length === 0) {
    console.log("Hiçbir sayı girmediniz!");
    return;
  }

  for (let sayi of sayiListesi) {
    toplam += sayi;
  }

  let ortalama = toplam / sayiListesi.length;
  console.log(`Girilen sayıların ortalaması: ${ortalama}`);
}

// Fonksiyonu çalıştır
ortalamaHesapla();
