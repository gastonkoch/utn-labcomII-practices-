function calcular() {
    let valor = document.getElementById("valor").value
    if (valor > 0) {
        alert("El numero es positivo")
    } else if (valor < 0){
        alert("El numero es negativo")
    } else {
        alert("El numero es 0")
    }
}