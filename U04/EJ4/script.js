function mostrarDatos() {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let domicilio = document.getElementById('domicilio').value
    let curso = document.getElementById('curso').value
    let carrera = document.getElementById('carrera').value
    let materia = document.getElementById('materia').value
    let notaPrimerParcial = document.getElementById('notaPrimerParcial').value

    document.getElementById('resultado').innerHTML = "Nombre: "+nombre+"<br>"+"Apellido: "+ apellido +"<br>"+"Domicilio: "+domicilio+"<br>"+"Curso: "+ curso+"<br>"+"Carrera: "+ carrera+"<br>"+"Materia: "+ materia+"<br>"+"Nota primer parcial: "+ notaPrimerParcial
}