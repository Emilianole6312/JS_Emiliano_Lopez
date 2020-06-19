//Función para recuperar cookies
function cookies(cookie) {
    let galletitas = document.cookie.split(";");
    let coincidencias = 0;
    for (let a = 0; a < galletitas.length;) {
        let datosCookie = galletitas[a].split("=");
        if (datosCookie[0] = cookie) {
            return datosCookie[1];
            coincidencias += 1;
        }
    }
    if (coincidencias = 0) {
        return false;
    }
}


let body = document.getElementsByTagName("body");


let victoria = false;

function hanoi() {
    //El usuario intenta hacer su movimiento
    let emisor = parseInt(prompt("De que torre?"));
    let receptor = parseInt(prompt("A que torre?"));

    //Verifica que la torre emisora y dde destino no sean las mismas y se haya
    if (emisor != receptor && receptor >= 1 && receptor <= 3 && emisor >= 1 && emisor <= 3)
    {

        //Se obtienen la torres que el usuario introdujo.
        let torreEmis = document.getElementById("torre" + emisor);
        let torreRecep = document.getElementById("torre" + receptor);

        //Se obtienen las piezas en las torres
        let piezaViaje = torreEmis.getElementsByTagName("div");
        let piezaRecep = torreRecep.getElementsByTagName("div");

        //Verifica que la torre de donde se va a sacar la pieza no este vaciá
        if (piezaViaje.length != 0 )
        {
            //Se obtiene el tamaño de la pieza a mover y laque recibe
            let idPiezaViaje = piezaViaje[piezaViaje.length - 1].getAttribute("id");
            idPiezaViaje = idPiezaViaje[5];
            let idPiezaRecep = (piezaRecep.length === 0) ? null : piezaRecep[piezaRecep.length - 1].getAttribute("id");
            idPiezaRecep = (idPiezaRecep === null) ? null : idPiezaRecep[5];

            //Verifica que el movimiento sea valido (la torre de destino esta vaciá o la ultima pieza de esta es mas grande que la que se quiere introducir)
            if (idPiezaRecep === null || idPiezaViaje < idPiezaRecep) 
            {

                //Guarda la pieza en una variable
                let piezaDestino = piezaViaje[piezaViaje.length - 1];

                //Elimina la pieza de la torre de donde se saco
                torreEmis.removeChild(piezaViaje[piezaViaje.length - 1]);
                
                //Inserta la pieza a la torre de destino
                torreRecep.appendChild(piezaDestino);

                //Cuenta las piezas que hay en las torres
                let torre1 = document.getElementById("torre1");
                let torre2 = document.getElementById("torre2");
                let torre3 = document.getElementById("torre3");
                torre1 = torre1.getElementsByTagName("div");
                torre2 = torre2.getElementsByTagName("div");
                torre3 = torre3.getElementsByTagName("div");
                // console.log(torre1);

                // for(let a = 0; a < torre1.length; a++)

                // console.log(torre1);
                // console.log(torre2);
                // console.log(torre3);
                document.cookie = "torre1=" + torre1;
                document.cookie = "torre2=" + torre2;
                document.cookie = "torre3=" + torre3;

                //Concede la victoria si alguna de las torres tiene 5 piezas
                if (torre2.length === 5 || torre3.length === 5)
                    victoria = true;
            }
            else
                alert("No puedes poner una pieza mas grande sobre una mas chica");
        }
        else
            alert("La torre que seleccionaste esta vaciá");
    }
    else
        alert("Solo puedes introducir números del uno al 3");
    if(victoria === false)
    {
        setTimeout(hanoi, 100);
    }
    else
        setTimeout(() => {
            alert("Has Ganado el juego :)");
        },100);
}

setTimeout(hanoi,100);