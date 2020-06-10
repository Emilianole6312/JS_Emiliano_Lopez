let longitud = prompt("Cual quiere que sea la longitud de su caracol?");
let altura = prompt("Cual quiere que sea la altura de su caracol?");

// Crear la sucesión de fibonacci
let fibonacci = new Array(0,1);
for (let f = 2; f < longitud * altura; f++)
	fibonacci.push(fibonacci[f - 1] + fibonacci[f - 2]);


// Creo el arreglo bidimensional que sera el caracol y lo lleno de nueves;
let arregloX = new Array();
let caracol = new Array();

for (let a = 0; a < longitud; a++)
  arregloX.push(9);
for (let b = 0; b < altura; b++)
	caracol.push(arregloX.slice());


// Sustituyo los nueves del arreglo caracol por los valores de la sucesión de fibonacci que le corresponden
let posFibonacci = 0;
let resta = 0;

for (let l = 0; l < longitud; l++)
{
  if( l % 2 == 0)
  {
    for (var b = 0; b < longitud; b++)
    {
			caracol[l][b] = fibonacci[posFibonacci];
			posFibonacci += 1;
		}
		for (var v = 1; v <= altura - 1 -l; v++)
		{
			caracol[v][b - 1] = fibonacci[posFibonacci];
			posFibonacci += 1;
		}
  }
  else
  {
		for (let o = longitud - resta; o >= 0; o--)
		{
			
		}
	}
	resta += 1;
}

console.log(caracol);
