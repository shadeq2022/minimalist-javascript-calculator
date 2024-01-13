let layar = document.getElementById("layar");

// Fungsi untuk menambahkan angka atau operator ke layar
function klik(input) {
    if (layar.value === "Error") {
        // Jika layar menampilkan "Error", mulai dengan input baru
        layar.value = input;
    } else {
        // Jika tidak, tambahkan input baru ke layar
        layar.value += input;
    }
}

// Fungsi untuk menghapus semua isi layar (clear)
function hapussemua(){
    layar.value = "";
}

//menghapus karakter terakhir
function hapus(){
    layar.value = layar.value.slice(0, -1);
}

// Fungsi samadengan yaitu menghitung hasil operasi
function samadengan() {
    try {
        layar.value = eval(layar.value.replace("%", "/100")); //ini gunanya untuk jika "%" ganti dlu menjadi /100 sebelum di eval.
    } catch (error) {
        layar.value = "Error";
    }
}
