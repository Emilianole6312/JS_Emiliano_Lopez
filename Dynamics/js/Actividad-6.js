// Soy el mas grande...
let grande = document.createElement("h1");
let a = document.createElement("a");
a.innerText = ("Soy el mas grande...");
a.setAttribute("href", "#");
grande.appendChild(a);

// Curso Web 2020
let web = document.createElement("h2");
web.innerText = ("Curso Web 2020.");

// Mediano
let mediano = document.createElement("h3");
let aMediano = document.createElement("a");
aMediano.setAttribute("href","#");
aMediano.innerText = ("Mediano");
mediano.appendChild(aMediano);

//Jelou
let jelou = document.createElement("h4");
jelou.innerText = ("Jelou");
jelou.setAttribute("class","rojito")

//Estoy medio chiquito :c
let chiquito = document.createElement("h4");
chiquito.innerText = ("Estoy medio Chiquito :(");

//Div
let div = document.createElement("div");
div.prepend(grande,web,mediano,jelou,chiquito);

//Agregarlo al html
var elemento1 = document.getElementsByTagName("body");
console.log(elemento1);
elemento1[0].appendChild(div);

