let anggota = [
    {
        nama: "Adit",
        simpanan: 50000,
    },
    {
        nama: "Budi",
        simpanan: 70000,
    },
];

let isEdit = false;

function calcTotalSimpanan() {
    let sum = 0;
    anggota.forEach((value) => {
        sum += parseInt(value.simpanan);
    });
    return sum;
}

function updateTotalSimpanan() {
    let totalSimpanan = calcTotalSimpanan();
    let result = document.getElementById("totalSimpanan");
    result.innerHTML =
      `<p>Total Simpanan Semua Anggota Rp${totalSimpanan} </p>`;
}

function printAnggota() {
    const listAnggota = document.getElementById("listAnggota");
    let dataAnggota = "";
    anggota.forEach((value, index) => {
        dataAnggota += `
        <tr>
            <td>${value.nama}</td>
            <td>${value.simpanan}</td>
            <td>
                <button onclick="deleteAnggota(${index})">Delete</button>
                <button onclick="updateAnggota(${index})">Update</button>
            </td>
        </tr>`;
        console.log(dataAnggota);
    });
    updateTotalSimpanan();
    listAnggota.innerHTML = dataAnggota;
    isEdit = false;
    resetForm();
}

function addAnggota() {
    const inputName = document.getElementById("inputName");
    const inputSimpanan = document.getElementById("inputSimpanan");

    const valueName = inputName.value;
    const valueSimpanan = inputSimpanan.value;
}

function submitAnggota() {
    const inputName = document.getElementById("inputName");
    const inputSimpanan = document.getElementById("inputSimpanan");
    const editIndex = document.getElementById("editIndex");

    const valueName = inputName.value;
    const valueSimpanan = inputSimpanan.value;

    if (isEdit) {
        anggota[editIndex.value] = {
            nama: valueName,
            simpanan: valueSimpanan,
        };
    } else {
        anggota.push({
            nama: valueName,
            simpanan: valueSimpanan,
        });
    }

    resetForm();
    printAnggota();
}

function deleteAnggota(index) {
    anggota.splice(index, 1);
    printAnggota();
}

function updateAnggota(index) {
    isEdit = true;
    const editIndex = document.getElementById("editIndex");
    const inputName = document.getElementById("inputName");
    const inputSimpanan = document.getElementById("inputSimpanan");
    const selectAnggota = anggota[index];

    inputName.value = selectAnggota.nama;
    inputSimpanan.value = selectAnggota.simpanan;
    editIndex.value = index;
}

function resetForm() {
    const editIndex = document.getElementById("editIndex");
    const inputName = document.getElementById("inputName");
    const inputSimpanan = document.getElementById("inputSimpanan");
    isEdit = false;
    editIndex.value = "";
    inputName.value = "";
    inputSimpanan.value = null;
}

printAnggota();