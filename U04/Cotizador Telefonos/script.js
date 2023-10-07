function calculatePrice() {
    let capacidad = document.getElementById('capacidad').value
    let cantidad = document.getElementById('cantidad').value
    if(cantidad > 0 && cantidad <= 10){
        let precio;
        let resultado;
        switch(capacidad){
            case "1":
                precio = 150000;
                break;
            case "2":
                precio = 165000;
                break;
            case "3":
                precio = 180000;
                break;
        }
        resultado = precio * cantidad;
        document.getElementById('result').innerHTML = "Cotización: $" + resultado
    } else {
        alert("La cantidad debe ser entre 1 y 10")
    }
}

function changeProductImage() {
    let color = document.getElementById('color').value;
    let imagen = document.getElementById('image_element');
    switch(color){
        case "grafito":
            imagen.setAttribute("src", "img/grafito.jpg");
            break;
        case "sierra":
            imagen.setAttribute("src", "img/sierra.jpg");
            break;
        case "silver":
            imagen.setAttribute("src", "img/silver.jpg");
            break;
        case "gold":
            imagen.setAttribute("src", "img/gold.jpg");
            break;
    }

}