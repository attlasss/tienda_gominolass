// obtener array de carrito, si no existe se crea un array.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// obtener contador de la cesta.
let contador_cesta = localStorage.getItem("contador_cesta") || 0;
contador_cesta = parseInt(contador_cesta) || 0;

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
      break;
  }

  try {
    let productoExistente = carrito.find(producto => producto.nombre === nombre);
    contador_cesta = parseInt(contador_cesta) || 0;

    if (productoExistente) {
        let cantidadAnterior = productoExistente.cantidad;
        productoExistente.cantidad += cantidad;
        productoExistente.precioTotal = productoExistente.cantidad * precio;
        contador_cesta += cantidad;
    } else {
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
            precioTotal: precio * cantidad
        };
        carrito.push(producto);
        contador_cesta += cantidad;
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById('items').innerHTML = contador_cesta;
    localStorage.setItem("contador_cesta", contador_cesta);

} catch (error) {
    console.error(error);
    alert("Ha habido algún error");
}
}


function cesta() {
  location.href = "cesta.html";
}

function login() {
  location.href = "login.html";
}
