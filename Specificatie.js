function Student(id, klas, naam) {
    let newForm= this;
    newForm.id = id;
    newForm.klas = klas;
    newForm.naam = naam;
  }
let Klasen  = new klas('MD2A','MD2B', 'GD2A', 'GD2B');
let teamgenoten = new naam('Cornell','Mees','Mika','Joey', 'Giovanni','Ruben C','Kamil');

localStorage.setItem(naam, klas);


//   Vorige week hebben jullie in groepen gewerkt, Maak voor elk van je teamgenoten uit die groep een variabele aan.
//   Sla al deze variabelen op in een array. HINT: gebruik de push funrtie van de array.
//   Sla de inhoud van de array op in de Local Storage. HInt: gebruik setItem