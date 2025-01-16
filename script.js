document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            const tabName = button.getAttribute('data-tab');
            document.getElementById(tabName).classList.add('active');
        });
    });
});
