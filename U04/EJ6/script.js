let intruso = 0

function validar(){
    let password = "password"
    let valor = document.getElementById('valor').value
    const resultado = document.getElementById('resultado')
    
    if(intruso < 3) {
        if(password == valor){
            resultado.style.color = "green";
            document.getElementById('resultado').innerHTML = "Acceso concedido";
            intruso = 0;
        } else {
            resultado.style.color = "red";
            document.getElementById('resultado').innerHTML = "Clave incorrecta";
            intruso ++;
        }
    } else {
        alert("Intruso")
    }
    console.log(intruso)
}