
function calcular(){
    let val1 = document.getElementById("valor1").value
    let val2 = document.getElementById("valor2").value
    let val3 = document.getElementById("valor3").value
    
    if (val1 > val2 && val1 > val3) {
        alert("El numero mayor es " + val1)
    } else if (val2 > val1 && val2 > val3) {
        alert("El numero mayor es " + val2)
    } else if (val3 > val1 && val3 > val2) {
        alert("El numero mayor es " + val3)
    }
}

