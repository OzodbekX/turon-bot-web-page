// Scroll to sections when navigation links are clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        console.log(`Scrolled to ${sectionId}`);
    });
});

// Log message for each "Подключить" button in the tariffs section
document.querySelectorAll('.connect-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Подключить button clicked');
    });
});

// Log message for the form submission
document.getElementById('connect-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
});
