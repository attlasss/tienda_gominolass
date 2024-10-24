let carrito = [];

function addToCart(nombre, idCantidad) {
    let cantidad = document.getElementById(idCantidad).value;
  
    let producto = {
      nombre: nombre,
      cantidad: parseInt(cantidad)
    };

    carrito.push(producto);

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cesta() {
    location.href = "cesta.html";
}

function login() {
    location.href = "login.html";
}

