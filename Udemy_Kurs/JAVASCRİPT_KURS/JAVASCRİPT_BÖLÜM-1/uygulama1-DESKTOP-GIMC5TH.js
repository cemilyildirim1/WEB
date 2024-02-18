
let suankiYil = new Date().getUTCFullYear();
console.log("Suanki Yil : "+suankiYil);

// 1.Öğrencinin Bilgileri
let ogrenci1 = "Ada Bilgi"
let dogTarih1 = "2012";
let yas1 =  suankiYil-parseInt(dogTarih1);

let ortNot1=(70+70+80)/3;

console.log("1.Ogrencinin Bilgileri : \n Yas : "+yas1+"\nNot Ortalaması : "+parseInt(ortNot1));

let basari1 = (ortNot1>50);
console.log(basari1);

// 2.Öğrencinin Bilgileri
let ogrenci2 = "Yigit Bilgi"
let dogTarih2 = "2010";
let yas2 =  suankiYil-parseInt(dogTarih2);

let ortNot2=(40+40+50)/3;

console.log("2.Ogrencinin Bilgileri : \n Yas : "+yas2+"\nNot Ortalaması : "+parseInt(ortNot2));

let basari2 = (ortNot2>50);
console.log(basari2);