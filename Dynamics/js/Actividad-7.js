let tamano = prompt("Cual quiere que sea el tamaño de su tablero?");
let tablero = document.createElement("div");
tablero.setAttribute("class","tablero");

for(let a = 0; a < tamano; a++)
{
	let fila = document.createElement("div");
	fila.setAttribute("class", "fila");
	for (let a = 0; a < tamano; a++) 
	{
		let celda = document.createElement("div");
		celda.setAttribute("class", "celda");
		console.log(a);
		fila.appendChild(celda);
	}
	tablero.appendChild(fila);
}

let body = document.getElementsByTagName("body");
body[0].appendChild(tablero);

console.log(tablero);
