document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Configuración y opciones de FullCalendar
        initialView: 'dayGridMonth', // Vista inicial del calendario
        events: [
            // Eventos del calendario (puedes proporcionar eventos aquí)
            {
                title: 'Mi evento',
                start: '2023-09-15'
            }
            // Agrega más eventos según sea necesario
        ]
    });
    calendar.render(); // Renderiza el calendario
});