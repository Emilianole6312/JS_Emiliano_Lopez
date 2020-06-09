let pisoGama = prompt("En que piso te encuentras Gama?");
let elevadorA = prompt("En que piso esta el ascensor A");
let elevadorB = prompt("En que piso esta el ascensor B");

pisoGama = parseInt(pisoGama);
elevadorA = parseInt(elevadorA);
elevadorB = parseInt(elevadorB);

if ( elevadorA != NaN || elevadorB != NaN || pisoGama != NaN) 
{
    let distanciaAG = (pisoGama - elevadorA > 0) ? pisoGama - elevadorA : pisoGama - elevadorA * -1;
    let distanciaBG = (pisoGama - elevadorB > 0) ? pisoGama - elevadorB : pisoGama - elevadorB * -1;

    if (distanciaAG == distanciaBG)
        console.log("Gama, ambos elevadores están a  la misma distancia de ti.");
    else if (distanciaAG < distanciaBG)
        console.log("Gama, el elevador A está más cerca de tu piso.");
    else if (distanciaAG > distanciaBG)
        console.log("Gama, el elevador B está más cerca de tu piso.");
}
else
    console.log("Debes introducir números.");    