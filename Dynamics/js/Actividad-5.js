
let carnada = prompt("Escribe lo que quieras (esto no es una trampa para el famoso hacker 'Password123').");

let script = new RegExp('<script>.+<\/script>','i');
let equisde = new RegExp(/equisde/g);

script = carnada.search(script);
equisde = carnada.match(equisde);
equisde = (equisde != null) ? equisde.length : 0;


if(script != -1 && equisde >= 5)
    console.log("Oso oso mentiroso, vete lejos antes de que te lance mis calcetines olor a queso.");
else if (script != -1 || equisde >= 5)
    console.log("Bob? Wade? ");
else
    console.log("Todo bien por aquí. :)")