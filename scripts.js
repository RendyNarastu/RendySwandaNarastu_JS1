function BilanganPrima(angka) {
    if (angka <= 1) {
        console.log(angka + "bukan bilangan prima");
    } else if (angka === 2) {
        console.log(angka + "bilangan prima");
    } else {
        let prima = true;
        for (let i = 2; i <= Math.sqrt(angka); i++) {
            if (angka % i === 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            console.log(angka + " bilangan prima");
        } else {
            console.log(angka + " bukan bilangan prima");
        }
    }
}

function JenisHari(namaHari) {
    if (typeof namaHari === "string") {
        switch (namaHari.toLowerCase()) {
            case "minggu":
            case "senin":
            case "selasa":
            case "rabu":
            case "kamis":
                console.log(namaHari + " hari kerja Puh");
                break;
            case "jumat":
                console.log(namaHari + " hari Jumat, biasanya libur");
                break;
            case "sabtu":
                console.log(namaHari + " hari libur");
                break;
            default:
                console.log("Nama hari tidak valid");
        }
    } else {
        console.log("Input bukan string");
    }
}

function AngkaGenap(batas) {
    console.log("Angka genap hingga " + batas + " (while):");
    let i = 2;
    while (i <= batas) {
        console.log(i);
        i += 2;
    }
}

function AngkaGanjil(batas) {
    console.log("Angka ganjil hingga " + batas + " (do while):");
    let i = 1;
    do {
        console.log(i);
        i += 2;
    } while (i <= batas);
}

BilanganPrima(7);
BilanganPrima(8);
JenisHari("Senin");
JenisHari("Sabtu");
AngkaGenap(8);
AngkaGanjil(12);
