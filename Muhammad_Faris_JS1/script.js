// if else
let apakahSayaSuka = true;

if (apakahSayaSuka) {
  console.log("Ya, saya suka!");
} else {
  console.log("Tidak, saya tidak suka.");
}

// nested if

let UTS = 69;
let result;

if (UTS >= 85 && UTS <= 100) {
  result = "Nilai Kamu A";
} else if (UTS >= 70 && UTS < 85) {
  result = "Nilai Kamu B";
} else if (UTS >= 50 && UTS < 70) {
  result = "Nilai Kamu C";
} else {
  result = "Nilai Kamu D";
}

console.log(result);

// switch case

const Colour = "Brown";

switch (Colour) {
  case "Brown":
    console.log("Kamu suka warna Coklat");
    break;
  case "Black":
    console.log("kamu suka warna Hitam");
    break;
  default:
    console.log("Kamu tidak suka warna");
}

// For statement

const tempatMakan = ["KFC", "HokBen", "McDonald's", "Starbucks", "Burger King"];

for (let i = 0; i < tempatMakan.length; i++) {
  console.log("Saya makan di " + tempatMakan[i]);
}

// while

const Belajar = ["UI/UX", "Cyber Security", "Bahasa Pemrograman", "Editing"];
let i = 0;

while (i < Belajar.length) {
  console.log("Saya belajar " + Belajar[i]);
  i++;
}

// do while
const Transportasi = ["Motor", "Mobil", "Pesawat", "Kapa feri"];
let j = 0;

do {
  console.log("Saya Liburan naik " + Transportasi[j]);
  j++;
} while (j < Transportasi.length);

// function

function Status(ais) {
  let result;

  if (ais === "temen") {
    result = "Wawa akan sangat sedih.";
  } else {
    if (ais === "pacar") {
      result = "Wawa akan sangat cukup senang.";
    } else {
      result = "berdoa saja untuk kedepannya.";
    }
  }

  return result;
}

console.log(Status("pacar"));
