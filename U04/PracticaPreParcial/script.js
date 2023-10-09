function calcular(){
    let pesosArgentinos = document.getElementById('pesosArgentinos').value
    let monedaExtranjera = document.getElementById('monedaExtranjera').value
    let valido = true;

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
        
        document.getElementById('resultado').innerHTML = "Cotizacion: " + resultado
    }
}

function agregar() {
    let divisa_nombre = document.getElementById('nuevaMoneda').value;
    let valor_divisa = document.getElementById('cotizacionMoneda').value;

    if ((divisa_nombre == '') || valor_divisa == 0) {
        alert("Por favor, complete todos los campos para realizar el alta de la moneda");
    } else if (valor_divisa < 1) {
        alert("Por favor, ingrese una cotización de pesos válida para realizar el calculo");
    } else {
        let select = document.getElementById("monedaExtranjera");
        let option = document.createElement("option");
        option.value = valor_divisa;
        option.text = divisa_nombre;
        select.appendChild(option);
    }
}