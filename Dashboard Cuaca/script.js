const weatherData = {
  Jakarta: { temperature: 30, condition: "Cerah" },
  Bandung: { temperature: 25, condition: "Hujan Ringan" },
  Surabaya: { temperature: 33, condition: "Panas Terik" },
  Samarinda: { temperature: 28, condition: "Mendung" },
  Medan: { temperature: 31, condition: "Gerimis" },
  Denpasar: { temperature: 29, condition: "Cerah Berawan" },
  Makassar: { temperature: 30, condition: "Hujan Sedang" },
  Yogyakarta: { temperature: 27, condition: "Berawan" },
  Semarang: { temperature: 29, condition: "Cerah" },
  Palembang: { temperature: 32, condition: "Panas Terik" },
  Pekanbaru: { temperature: 30, condition: "Cerah Berawan" },
  Pontianak: { temperature: 31, condition: "Gerimis" },
  Manado: { temperature: 29, condition: "Hujan Sedang" },
  Padang: { temperature: 28, condition: "Hujan Ringan" },
  Balikpapan: { temperature: 30, condition: "Cerah" },
  Banjarmasin: { temperature: 31, condition: "Cerah Berawan" },
  Kupang: { temperature: 32, condition: "Panas Terik" },
  Jayapura: { temperature: 29, condition: "Hujan Ringan" },
  Ambon: { temperature: 27, condition: "Mendung" },
  Mataram: { temperature: 28, condition: "Cerah Berawan" },
  Ternate: { temperature: 29, condition: "Hujan Ringan" },
  Manokwari: { temperature: 28, condition: "Mendung" },
  Gorontalo: { temperature: 30, condition: "Cerah" },
  Palu: { temperature: 32, condition: "Panas Terik" },
  Kendari: { temperature: 29, condition: "Cerah Berawan" },
  Tarakan: { temperature: 30, condition: "Gerimis" },
  Batam: { temperature: 31, condition: "Cerah Berawan" },
  Tanjungpinang: { temperature: 30, condition: "Berawan" },
  "Banda Aceh": { temperature: 29, condition: "Hujan Sedang" },
  Lhokseumawe: { temperature: 28, condition: "Hujan Ringan" },
  Langsa: { temperature: 30, condition: "Cerah" },
  Bengkulu: { temperature: 27, condition: "Mendung" },
  Jambi: { temperature: 30, condition: "Cerah Berawan" },
  Palangkaraya: { temperature: 32, condition: "Panas Terik" },
  Serang: { temperature: 29, condition: "Cerah" },
  Cirebon: { temperature: 30, condition: "Cerah Berawan" },
  Tasikmalaya: { temperature: 26, condition: "Hujan Ringan" },
  Malang: { temperature: 25, condition: "Berawan" },
  Probolinggo: { temperature: 32, condition: "Panas Terik" },
  Blitar: { temperature: 30, condition: "Cerah" },
  Solo: { temperature: 28, condition: "Cerah Berawan" },
  Salatiga: { temperature: 26, condition: "Mendung" },
  Purwokerto: { temperature: 27, condition: "Berawan" },
  Bogor: { temperature: 24, condition: "Hujan Sedang" },
  Depok: { temperature: 29, condition: "Cerah" },
  Tangerang: { temperature: 30, condition: "Cerah Berawan" },
  Bekasi: { temperature: 31, condition: "Panas Terik" },
  Karawang: { temperature: 32, condition: "Cerah" },
  Cilegon: { temperature: 30, condition: "Berawan" },
  Magelang: { temperature: 27, condition: "Hujan Ringan" },
  Sukabumi: { temperature: 25, condition: "Mendung" },
};

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  const city = input.value.trim();

  if (weatherData[city]) {
    const data = weatherData[city];
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    console.log(`Data cuaca untuk ${city} tidak ditemukan.`);
  }
});
