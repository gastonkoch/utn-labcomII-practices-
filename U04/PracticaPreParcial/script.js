// let moneda = document.getElementById('monedaExtranjera')

function calcular(){
    let pesosArgentinos = document.getElementById('pesosArgentinos').value
    let monedaExtranjera = document.getElementById('monedaExtranjera').value
    let valido = true;
    // const cotizaciones = [900,1000];
    const dolar = 900;
    const euro = 1000;

    if(pesosArgentinos == 0){
        alert("Ingrese la cantidad de pesos argentinos")
        valido = false;
    }
    if(monedaExtranjera == 0){
        alert("Seleccione una divisa extranjera")
        valido = false;
    }

    if(valido == true){
        let resultado;
        
        switch(monedaExtranjera){
            case "1":
                resultado =  parseFloat(pesosArgentinos / dolar)
                break;
            case "2":
                resultado = parseFloat(pesosArgentinos / euro)
                break;
        }
        
        // console.log(euro)
        
        document.getElementById('resultado').innerHTML = "Cotizacion: " + resultado
    }
}

function agregar() {
    let nuevaMoneda = document.getElementById('nuevaMoneda').value;
    let cotizacionMoneda = parseFloat(document.getElementById('cotizacionMoneda').value);
    let valido = true;
    if (nuevaMoneda === ""){
        alert("Debe ingresar el nombre de la nueva moneda")
        console.log(nuevaMoneda)
        valido = false
    }
    
    if (isNaN(cotizacionMoneda)){
        alert("Debe ingresar la cotizacion")
        valido = false
    }
}