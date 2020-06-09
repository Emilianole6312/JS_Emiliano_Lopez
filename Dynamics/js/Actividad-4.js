let number = prompt("introduzca un numero mayor a uno");
let divisores = 0;
let result = Array();
let b = 1;

// Verifica si lo introducido por el usuario es un numero mayor a 1
if (number > 1)
{
    // Genera todos los números enteros entre 2 y el numero introducido por el usuario 
    for(let a = 2; a <= number; a++)
    {
        // Verifica si el numero es divisor del numero introducido por el usuario
        if(number % a === 0)
        {
            // Restea los divisores de los  números que son divisores del numero introducido por el usuario
            divisores = 0;
            // Cuenta los divisores del numero que es divisor del numero introducido por el usuario
            for (b = 1; b <= a; b++)
                if (a % b == 0)
                    divisores += 1;
            // Si el numero es primo lo agrega a el arreglo
            if (divisores == 2)
                result.push(a);
        }
    }
    console.log(result);
}
else
    console.log("Debes introducir un numero mayor a 1.");