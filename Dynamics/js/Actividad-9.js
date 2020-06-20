function sumar (a, b, c, d, e, callback) {
    callback(a,b,c,d,e);
}

sumar(Math.round(Math.random() * 99 + 1),0,0,0,0, (a,b,c,d,e) => {
    alert("El primer numero es: " + a);
    numeroA = prompt("Repite el primer numero")
    if (numeroA == a){
        setTimeout(()  =>{
            sumar(a, Math.round(Math.random() * 99 + 1), 0, 0, 0, (a, b, c, d, e) => {
                alert("el segundo numero es: " + b);
                numeroA = prompt("Repite el primer numero");
                numeroB = prompt("Repite el segundo numero");
                if (numeroA == a && numeroB == b){
                    setTimeout(()=>{
                        sumar(a, b, Math.round(Math.random() * 99 + 1), 0, 0, (a, b, c, d, e) => {
                            alert("El tercer numero es: " + c);
                            numeroA = prompt("Repite el primer numero");
                            numeroB = prompt("Repite el segundo numero");
                            numeroC = prompt("Repite el tercer numero");
                            if (numeroA == a && numeroB == b && numeroC == c){
                                setTimeout(()=>{
                                    sumar(a, b, c, Math.round(Math.random() * 99 + 1), 0, (a, b, c, d, e) => {
                                        alert("El cuarto numero es: " + d);
                                        numeroA = prompt("Repite el primer numero");
                                        numeroB = prompt("Repite el segundo numero");
                                        numeroC = prompt("Repite el tercer numero");
                                        numeroD = prompt("Repite el cuarto numero");
                                        if (numeroA == a && numeroB == b && numeroC == c && numeroD == d){
                                            setTimeout(()=>{
                                                sumar(a, b, c, d, Math.round(Math.random() * 99 + 1), (a, b, c, d, e) => {
                                                    alert("El quinto numero es: " + e);
                                                    numeroA = prompt("Repite el primer numero");
                                                    numeroB = prompt("Repite el segundo numero");
                                                    numeroC = prompt("Repite el tercer numero");
                                                    numeroD = prompt("Repite el cuarto numero");
                                                    numeroE = prompt("Repite el quinto numero");
                                                    if (numeroA == a && numeroB == b && numeroC == c && numeroD == d && numeroE == e)
                                                        alert("Haz ganado, Felicidades!!! Simon esta muy feliz contigo :))")
                                                    else
                                                        alert("Que lastima has perdido en la ultima ronda, Simon no esta contento contigo")
                                                })
                                            },100)
                                        }
                                        else
                                            alert("Simón está triste, te has equivocado : c")
                                    })
                                },100);
                            }
                            else
                                alert("Simón está triste, te has equivocado : c")
                        })
                    },100);
                }
                else
                    alert("Simón está triste, te has equivocado : c")
            });
        },100);
    }
    else
        alert("Simón está triste, te has equivocado : c")
});