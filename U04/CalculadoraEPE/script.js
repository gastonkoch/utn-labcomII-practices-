function calcular(){
    let residencial = document.getElementById('residencial');
    let industrial = document.getElementById('industrial');
    let distrito = document.getElementById('distrito').value;
    let kwh = document.getElementById('kwh').value;
    let iva;
    const costoServicio = 102;

    if (residencial.checked && industrial.checked){
        alert("Solo puede seleccionar un campo")
        residencial.checked = false1;
        industrial.checked = false;
    } else if (residencial.checked == false && industrial.checked == false){
        alert("Debe seleccionar un campo")
    } else if (residencial.checked){
        iva = 0.21;
    } else if (industrial.checked){
        iva = 0.27;
    }

    if(0 >= kwh){
        alert("Los kwh deben ser mayores que 0")
    }
    let precio;
    switch(distrito){
        case "centro":
            precio = 5.80
            break;
        case "sur":
            precio = 5.40
            break;
        case "oeste":
            precio = 5.35
            break;
        case "norte":
            precio = 5.60
            break;
        case "0":
            alert("Debe seleccionar su distrito")
            break;
    }

    document.getElementById('costo').innerHTML = costoServicio + (kwh * precio) * (1 + iva);
}