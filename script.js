// Scroll to sections when navigation links are clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        // Scroll to the selected section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});
function scrollToNext() {
    // Get the first section height to scroll to the next section
    const firstSectionHeight = document.querySelector('#tariffs').clientHeight;
    
    // Scroll to the next section
    window.scrollTo({
        top: firstSectionHeight,
        behavior: 'smooth' // Smooth scrolling
    });
}
function goToConnect() {
    // Get the first section height to scroll to the next section
    const firstSectionHeight = document.getElementById('connect');
    
    // Scroll to the next section
    firstSectionHeight.scrollIntoView({
        block: 'start',
        behavior: 'smooth' // Smooth scrolling
    });
}
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


// // Optional: Automatically update the active link when scrolling through sections
// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY + 200; // Adjust for slight offset

//     document.querySelectorAll('.section').forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
        
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             const sectionId = section.getAttribute('id');

//             // Remove 'active' from all links and set active for the visible section
//             document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
//             document.querySelector(`.nav-link[data-section="${sectionId}"]`).classList.add('active');
//         }
//     });
// });
