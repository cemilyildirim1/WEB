let ad = "Sadık";
let soyad = "Turan";
let yas = 65;
let sehir = "Kocaeli";

//backtick

let mesaj = `Benim adım ${ad} soyadım ${soyad}.Yaşadığım şehir ${sehir}.Ve emekliliğe ${65-yas} sene kaldı.`; 

//ternary operators
let emeklilik = (65-yas) >0 ? "Emekliliğe "+(65-yas)+" sene kaldı." :"Zaten emekli oldunuz.";

mesaj = `Benim adım ${ad} soyadım ${soyad}.Yaşadığım şehir ${sehir}.${emeklilik}.`; 

console.log(mesaj);
