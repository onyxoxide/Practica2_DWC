let inicializar = function () {
    let boton = document.getElementById('agregar');
    boton.onclick = agregarLinea;
}
 
// Inicialización de la aplicación cuando se carga el DOM
document.body.onload = inicializar;

// Declarar las variables necesarias para ser usadas después
let suma_totalproductos = 0;
let div = document.createElement('div');

function agregarLinea() {
    let tbody = document.getElementById("tbody");
    let tfoot = document.getElementById("tfoot");
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio_unitario = document.getElementById("precio_unitario").value;
    let preciototal_producto = precio_unitario * cantidad;
    let porcentaje_IVA = tfoot.children[1].childNodes[1].getAttribute("data-iva");
    let introducirdatos = document.createElement('tr');
    introducirdatos.innerHTML = '<td>'+producto+'</td><td>'+cantidad+'</td><td>'+precio_unitario+'€</td><td>'+preciototal_producto+'€</td>';

    tbody.appendChild(introducirdatos);
    suma_totalproductos = preciototal_producto + suma_totalproductos;
    let total_IVA = suma_totalproductos * porcentaje_IVA;
    let total_Factura = suma_totalproductos + total_IVA;

    // Modificar el contenido de base imponible
    base_imponible.innerHTML = suma_totalproductos.toFixed(2);
    // Especificar precio con IVA
    iva.innerHTML = total_IVA.toFixed(2);
    // Especificar precio total y modificarlo en el HTML
    total.innerHTML = total_Factura.toFixed(2); 

    // Guardar en fecha los datos que ofrece la clase Date()
    let fecha = new Date();
    // Añadir un atributo class
    div.className = "alert alert-danger";
    // Añadir atributo role
    div.setAttribute("role", "alert");
    // Guardar en el div creado la fecha y la hora actual
    div.innerHTML = "Fecha y Hora de la actualización:  <br/>" + fecha.getDate() + "/" + fecha.getDay() + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes();
    // Añadir debajo de la tabla la fecha de actualización
    document.body.appendChild(div);
}