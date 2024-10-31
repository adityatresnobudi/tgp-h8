let simpanan_wajib = 50000;
let simpanan_sukarela = 30000;
let simpanan_khusus = 20000;
let total_simpanan = simpanan_wajib+simpanan_sukarela+simpanan_khusus;
let bunga = 0.05*total_simpanan;

console.log(`Total Simpanan: Rp.${total_simpanan}`);
console.log("Bunga: Rp."+bunga);
console.log("Total Simpanan Akhir: Rp."+(bunga+total_simpanan));

