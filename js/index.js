// obtener array de carrito, si no existe se crea un array.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// obtener contador de la cesta.
let contador_cesta = parseInt(localStorage.getItem("contador_cesta")) || 0;

function addToCart(nombre, idCantidad) {
    let precio;
    // obtener el numero de cantidad y convertirlo a número entero
    let cantidad = parseInt(document.getElementById(idCantidad).value) || 0;

    // Validar cantidad
    if (cantidad <= 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }

    // switch para asignar el precio de los items
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
        case "Ferrero":
            precio = 10;
            break;
        case "Oreo":
            precio = 2;
            break;
        case "Conguitos":
            precio = 2;
            break;
        case "MMs":
            precio = 1;
            break;
        default:
            console.log("Tipo de chuche no reconocido.");
            return; // salir de la función si no se reconoce el producto
    }

    try {
        let productoExistente = carrito.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            // Si el producto ya existe, actualizar cantidad y precio total
            productoExistente.cantidad += cantidad;
            productoExistente.precioTotal = productoExistente.cantidad * precio;
        } else {
            // Si el producto no existe, agregarlo al carrito
            let producto = {
                nombre: nombre,
                cantidad: cantidad,
                precio: precio,
                precioTotal: precio * cantidad
            };
            carrito.push(producto);
        }

        // Actualizar el contador de la cesta
        contador_cesta += cantidad;

        // Guardar los cambios en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("contador_cesta", contador_cesta);

        // Actualizar el contador en la página
        document.getElementById('contador_cesta').innerHTML = contador_cesta; // Cambiar 'items' por 'contador_cesta'

    } catch (error) {
        console.error(error);
        alert("Ha habido algún error");
    }
}

// Funciones para navegar
function cesta() {
    location.href = "cesta.html";
}

function login() {
    location.href = "login.html";
}
