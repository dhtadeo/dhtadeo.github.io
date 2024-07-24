// Get HTML element by ID
var datetimeElement = document.getElementById('datetime');

// Month name array
var meses = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Obtain date & time and update the actual time 
function mostrarFechaHoraActual() {
    var fechaHoraActual = new Date();
    var dia = fechaHoraActual.getDate();
    var mes = meses[fechaHoraActual.getMonth()];
    var ano = fechaHoraActual.getFullYear(); // jajaja ano
    var hora = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();
    //var amPm = hora >= 12 ? "PM" : "AM";

    // Format minutes and seconds to always have two digits
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Update HTML content
    datetimeElement.textContent = mes + " " + dia + ", " + ano + " - " + hora + ":" + minutos + ":" + segundos;
}

// Call the date time update function
mostrarFechaHoraActual();

// Update the interval every second (1000)
setInterval(mostrarFechaHoraActual, 1000);