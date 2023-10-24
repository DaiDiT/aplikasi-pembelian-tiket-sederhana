const namaPembeli = document.getElementById('nama')
const tujuanKota = document.getElementById('tujuan')
const hargaTiket = document.getElementById('harga-tiket');
const jumlahTiket = document.getElementById('jumlah-tiket');
const member = document.getElementById('member');
const diskon = document.getElementById('diskon');
const totalHarga = document.getElementById('total-harga');

hargaTiket.addEventListener('input', hitungTotalHarga);
jumlahTiket.addEventListener('input', hitungTotalHarga);
member.addEventListener('click', hitungTotalHarga);

function hitungTotalHarga() {
    const harga = parseFloat(hargaTiket.value) || 0;
    const jumlah = parseInt(jumlahTiket.value) || 0;
    const total = harga * jumlah;

    totalHarga.value = total;
    diskon.value = 0
                
    if (member.checked == true) {
        diskon.value = total * 0.1;
        totalHarga.value = total - diskon.value;
    }
}

hitungTotalHarga()

// kalo tombol ditekan
const submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    if (namaPembeli.value != "" && tujuanKota.value != "Pilih kota" && hargaTiket.value != "")
        alert("Pembelian berhasil!\n" +
            "Nama pembeli: " + namaPembeli.value + "\n" +
            "Kota tujuan: " + tujuanKota.value + "\n" +
            "Jumlah tiket: " + jumlahTiket.value + "\n" +
            "Total harga: " + totalHarga.value
    )
});