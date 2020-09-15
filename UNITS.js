function Voorraad(item, aantal,lowVoorraad, highVoorraad) {
let artikel = item;
let voorraad = aantal;

this.getVoorraad = function () {
return voorraad;

     }
this.getArtikel = function () {
return artikel;

     }
this.showVoorrad = function () {
console.log('De voorraad van : ' + artikel + ' is ' + voorraad);

     }
this.verlaagVoorraad = function () {
voorraad = voorraad  -1;

     }

 }