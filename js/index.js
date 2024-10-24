// obtener array de carrito, si no existe se crea un array.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function addToCart(nombre, idCantidad) {
    let precio;
    // obtener el numero de cantidad
    let cantidad = document.getElementById(idCantidad).value;
    // switch para asignar el precio de los items, con una bbdd lo
    // obtendriamos de la misma bbdd
    switch (nombre) {
        case "Ositos":
            precio = 1;
            break;

        case "Fresas":
            precio = 2;
            break;

        case "Tiburones":
            precio = 3;
            break;

        case "Sandias":
            precio = 4;
            break;

        case "Fresas Con Chocolate":
            precio = 4;
            break;

        case "Oreo":
            precio = 2;
            break;

        case "Conguitos":
            precio = 2;
            break;

        case "M&Ms":
            precio = 1;
            break;

        default:
            console.log("Tipo de chuche no reconocido.");
            break;
    }

    let precioTotal = precio * cantidad;

    try {

        // Buscamos en el carrito si ya ha estado añadido . 
        
        // creamos el producto con la cantidad de chuches que nos pasan.
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
            precioTotal: precioTotal
        };

        console.log(producto);
        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

    } catch (error) {
        console.error(error);
        alert("Ha habido algun error");
    }
}

function cesta() {
    location.href = "cesta.html";
}

function login() {
    location.href = "login.html";
}
