//Contoh Program If,Else,Nested IF
//===================================
//Contoh Program IF
// let Umur = 20;

// if (Umur >= 18) {
//   console.log("Umur Anda Sudah Kategori Dewasa");
// }
//===================================
//Contoh Program IF ELSE
let Umur = 12;

if (Umur >= 18) {
  console.log("Umur Anda Sudah Kategori Dewasa");
} else {
    console.log("Umur Anda Masih Kategori Anak Anak");
}
//===================================
//Contoh Program IF ELSE
let angka = 15;

if (angka > 10) {
  console.log("Angka lebih besar dari 10");

  if (angka % 2 === 0) {
    console.log("Angka adalah bilangan genap");
  } else {
    console.log("Angka adalah bilangan ganjil");
  }
} else {
  console.log("Angka kurang dari atau sama dengan 10");
}
//Contoh Program Switch Case
//===================================
//Contoh Program Switch Case
var jenisHewan = "kucing";

switch (jenisHewan) {
  case "Kuda":
    console.log("Hewan ini adalah Beruang.");
    break;
  case "Kuda":
    console.log("Hewan ini adalah kuda.");
    break;
  case "burung":
    console.log("Hewan ini adalah burung.");
    break;
  case "Babi":
    console.log("Hewan ini adalah Babi.");
    break;
  default:
    console.log("Jenis hewan tidak dikenali.");
    break;
}
//Contoh Program For Statement
//===================================
//Contoh Program For Statement
var batasAtas = 10;

for (var i = 2; i <= batasAtas; i += 2) {
  console.log(i);
}
//Contoh Program While, Do While
//===================================
//Contoh Program While
let bilangan = 2;

while (bilangan <= 12) {
  console.log(bilangan);
  bilangan++;
}
//===================================
//Contoh Program Do While
let bil = 0;

do {
  console.log(bil);
  bil++;
} while (bil <= 15);
//Contoh Program Function
//===================================
//Contoh Program Function
function cekBilanganPositif(i) {
    if (i > 0) {
      return "Positif";
    } else if (i < 0) {
      return "Negatif";
    } else {
      return "Nol";
    }
  }
  
  console.log(cekBilanganPositif(99)); // Output: Positif
  console.log(cekBilanganPositif(-21)); // Output: Negatif
  console.log(cekBilanganPositif(0)); // Output: Nol
  
