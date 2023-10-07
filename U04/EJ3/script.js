function calcular() {
    let preRealizadas = document.getElementById('preguntasrealizadas').value
    let preCorrectas = document.getElementById('preguntasacertadas').value

    let porcentaje = ((preCorrectas * 100) / preRealizadas)
    
    if(porcentaje>= 90){
        document.getElementById('respuestas').innerHTML = "Nivel superior"
    } else if (porcentaje >= 75 && porcentaje < 90){
        document.getElementById('respuestas').innerHTML = "Nivel medio"
    } else if (porcentaje >= 50 && porcentaje < 75) {
        document.getElementById('respuestas').innerHTML = "Nivel regular"
    } else {
        document.getElementById('respuestas').innerHTML = "Fuera de nivel"
    }
    console.log(porcentaje)
}