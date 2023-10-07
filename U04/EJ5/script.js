let numero = prompt("Ingrese un numero");

if (numero <= 0){
    numero = prompt("El numero no puede ser menor o igual a 0, vuelva a ingresar el numero");
} else {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
}