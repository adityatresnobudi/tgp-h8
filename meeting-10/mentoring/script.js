let namaKaryawan = ["a", "b", "c", "d", "e", "f"];

function pengaturanTempatDuduk(karyawan, kolom) {
    if (kolom === 0) {
        return "kolom invalid"
    }
    let jumlahKaryawan = karyawan.length;
    let jumlahKolom = Math.ceil(jumlahKaryawan / kolom);
    // console.log(jumlahKolom);
    let result = [];
    let klmpk = [];
    for (const k of karyawan) {
        klmpk.push(k)
        if (klmpk.length === kolom) {
            result.push(klmpk);
            klmpk = [];
        }
    }

    for ((value) of result) {
        for (let i = 0; i < kolom; i++) {
            if (value[i] === undefined) {
                value[i] = "Kursi Kosong";
            }
        }
    }
    return result
}

let nasabah = [
    {nama: "John", nilaiKredit: 80, kelasKredit: "Platinum"},
    {nama: "Jane", nilaiKredit: 60, kelasKredit: "Gold"},
    {nama: "Doe", nilaiKredit: 85, kelasKredit: "Platinum"},
    {nama: "Smith", nilaiKredit: 77, kelasKredit: "Silver"},
    {nama: "Arif", nilaiKredit: 200, kelasKredit: "Black"},
]

function daftarNasabahLolos(nasabah) {
    let result = {};
    nasabah.forEach((value) => {
        if (value.nilaiKredit > 75) {
            if (value.kelasKredit in result) {
                result[value.kelasKredit].push({nama:value.nama, nilaiKredit:value.nilaiKredit});
            } else {
                result[value.kelasKredit] = [{nama:value.nama, nilaiKredit:value.nilaiKredit}];
            }
        }
    })
    return result;
}

// console.log(pengaturanTempatDuduk(namaKaryawan, 3));
console.log(daftarNasabahLolos(nasabah));