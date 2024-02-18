let notFinal = 70;
let notVize  = 0;

let ortalama= (notFinal*6)/10 + (notVize*4)/10;

console.log("Ortalama notunuz : "+ortalama);

if ((ortalama >= 50 && notFinal>=50) || notFinal >=70 ){
    console.log("DERSTEN GEÇTİNİZ.");
}
else {
    console.log("DERSTEN KALDINIZ.");
}