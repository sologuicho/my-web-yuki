// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Reemplazar iconos Feather
feather.replace();

// Fecha de aniversario (YYYY, MM-1, DD)
const anniversary = new Date(2025, 6, 23); // 23 de agosto de 2023 (los meses van de 0 a 11)

// Función para actualizar el contador de tiempo juntos
function updateCountdown() {
    const now = new Date();
    const diff = now - anniversary;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// Efecto de máquina de escribir para las cartas de amor
function typeWriterEffect() {
    const loveLetters = document.querySelectorAll('.love-note p');
    loveLetters.forEach(note => {
        const originalText = note.textContent;
        note.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                note.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        typeWriter();
    });
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    typeWriterEffect();
    
    // Actualizar el contador cada hora
    setInterval(updateCountdown, 3600000);
    
    // Volver a reemplazar iconos por si hay alguno dinámico
    feather.replace();
});