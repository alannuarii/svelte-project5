export const timeRemining = (expiryDate) => {
    // Mengonversi string tanggal menjadi objek Date
    const expiresAt = new Date(expiryDate);
    const now = new Date();

    // Menghitung selisih waktu dalam milidetik
    const selisihWaktu = expiresAt - now;

    // Jika waktu sudah kadaluarsa
    if (selisihWaktu < 0) {
        return "Expired";
    }

    // Menghitung jumlah hari dan jam
    const totalJam = Math.floor(selisihWaktu / (1000 * 60 * 60));
    const hari = Math.floor(totalJam / 24);
    const jam = totalJam % 24;

    // Mengembalikan hasil dalam format "00 hari 00 jam"
    return `${hari.toString().padStart(2, '0')} days ${jam.toString().padStart(2, '0')} hours`;
}


export const convertDateTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

