// function kelimeYazma(kelime,adet){
//      for (let i =0;i<adet;i++){
//     console.log(kelime);
//      }
// }
// kelimeYazma("Bu bir alıntı yazıdır.",3);


// function Hesapla(kenar1,kenar2){
//     let alan = kenar1 * kenar2;
//     let cevre = (kenar1 + kenar2)*2;
//     console.log(`Değerleri girilen diktörtgenin alanı : ${alan}`);
//     console.log(`Değerleri girilen diktörtgenin çevresi : ${cevre}`);
// }
// Hesapla(5,4);



// function tamBolenler(sayi){
//     let dizi =[];
//     for (let i =1;i<sayi+1;i++){
//         if(sayi%i==0){
//             dizi.push(i);
//         }
//     }
//     console.log(`${sayi} sayısının tam bölenleri : ${dizi}`);

// }

// tamBolenler(12);



// function toplam(){


//     let sonuc=0 ;
//     for(let i = 0;i<arguments.length;i++){
//         sonuc += arguments[i];
//     }
//     return  sonuc;
// }


// console.log(toplam(5,4,3));
// console.log(toplam(5,4,3,11));
// console.log(toplam(5,4,3,4,5));



function yaziTura(){
    let sayi = Math.random();
    console.log(sayi);
    if(sayi<0.5){
        
        console.log(" Tura")
    }else{
        console.log(" Yazı")
    }
}
yaziTura();
