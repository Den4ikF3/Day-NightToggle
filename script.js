document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('day-night-toggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    });
});