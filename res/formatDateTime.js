// Obtener la referencia al elemento HTML
var datetimeElement = document.getElementById('datetime');

// Array de nombres de los meses
var meses = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
];

// Función para obtener la fecha y hora actual y actualizar el contenido del elemento HTML
function mostrarFechaHoraActual() {
    var fechaHoraActual = new Date();
    var dia = fechaHoraActual.getDate();
    var mes = meses[fechaHoraActual.getMonth()];
    var ano = fechaHoraActual.getFullYear();
    var hora = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();
    var amPm = hora >= 12 ? "PM" : "AM";

    // Formatear los minutos y segundos para que siempre tengan dos dígitos
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Actualizar el contenido del elemento HTML
    datetimeElement.textContent = dia + " / " + mes + " / " + ano + " - " + hora + ":" + minutos + ":" + segundos + " " + amPm;
}

// Llamar a la función inicialmente para mostrar la fecha y hora actual
mostrarFechaHoraActual();

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaHoraActual, 1000);