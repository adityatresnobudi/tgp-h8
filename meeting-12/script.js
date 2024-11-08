const pelanggan = [
  {
    id: 1,
    nama: "John Doe",
    saldo_awal: 150000,
    riwayat_transaksi: [
      { type: "debit", amount: 50000 },
      { type: "kredit", amount: 100000 },
    ],
  },
  {
    id: 2,
    nama: "Jane Doe",
    saldo_awal: 200000,
    riwayat_transaksi: [
      { type: "kredit", amount: 150000 },
      { type: "debit", amount: 100000 },
    ],
  },
  {
    id: 3,
    nama: "Bob Smith",
    saldo_awal: 50000,
    riwayat_transaksi: [
      { type: "debit", amount: 20000 },
      { type: "kredit", amount: 10000 },
    ],
  },
];

function hitungSaldoAkhir(pelanggan) {
  return pelanggan.map((p) => {
    let total = p.saldo_awal;
    // for (const value of p.riwayat_transaksi) {
    //     if (value.type === 'debit') {
    //         total += value.amount;
    //         continue
    //     }
    //     total -= value.amount
    // }
    const saldoAkhir = p.riwayat_transaksi.reduce(
      (prev, value) =>
        prev + (value.type == "debit" ? value.amount : -value.amount),
      total
    );

    return { nama: p.nama, saldo_akhir: saldoAkhir };
  });
}

function filterSaldoRendah(pelanggan) {
  pelanggan = hitungSaldoAkhir(pelanggan);
  return pelanggan.filter((p) => p.saldo_akhir < 100000);
}

function totalDebit(pelanggan) {
  return pelanggan.reduce((total, p) => {
    let sumDebit = 0;
    for (const data of p.riwayat_transaksi) {
      data.type === "debit" ? (sumDebit += data.amount) : sumDebit;
    }
    return total + sumDebit;
  }, 0);
}

function main() {
  console.log("Saldo Akhir Pelanggan:", hitungSaldoAkhir(pelanggan));
  console.log(
    "Pelanggan dengan saldo < 100.000:",
    filterSaldoRendah(pelanggan)
  );
  console.log("Total Debit Semua Pelanggan:", totalDebit(pelanggan));
}

main();
