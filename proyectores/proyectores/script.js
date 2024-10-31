document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var reservationForm = document.getElementById('reservation-form');
    var reservationFormElement = document.getElementById('reservationForm');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        selectHelper: true,
        dateClick: function(info) {
            reservationForm.classList.remove('hidden');

            var startInput = document.getElementById('start');
            var endInput = document.getElementById('end');
            startInput.value = info.dateStr + "T00:00";
            endInput.value = info.dateStr + "T23:59";
        },
        eventClick: function(info) {
            if (confirm('¿Deseas eliminar esta reservación?')) {
                info.event.remove();
            }
        },
        locale: 'es' // Configura el idioma a español
    });

    calendar.render();

    reservationFormElement.addEventListener('submit', function(e) {
        e.preventDefault();

        var title = document.getElementById('title').value;
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;

        if (title && start && end) {
            calendar.addEvent({
                title: title,
                start: start,
                end: end
            });

            reservationForm.classList.add('hidden');
            reservationFormElement.reset();
        }
    });

    // Ocultar el formulario al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!reservationForm.contains(event.target) && !event.target.closest('.fc-daygrid-day')) {
            reservationForm.classList.add('hidden');
        }
    });

    // Prevenir la propagación del evento de clic dentro del formulario
    reservationForm.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
