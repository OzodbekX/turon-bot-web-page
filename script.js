// Scroll to sections when navigation links are clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        // Scroll to the selected section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});


function goToConnect() {
    // Get the first section height to scroll to the next section
    const firstSectionHeight = document.getElementById('connect');
    // Scroll to the next section
    firstSectionHeight?.scrollIntoView({
        block: 'start',
        behavior: 'smooth' // Smooth scrolling
    });
}

function scrollToParentElement(elementId) {
    // Access the parent window
    window.parent.postMessage({action: "goToConnect", elementId}, "*");
    localStorage.setItem("selectTariffId", elementId)
}

window.addEventListener("message", function (event) {
    const data = event.data;
    if (data.action === "goToConnect") {
        const element = document.getElementById('connect');
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        const childIframe = document.getElementById("connectFrame"); // Replace with your iframe's ID
        if (childIframe) {
            // Forward the message to the child iframe
            childIframe.contentWindow.postMessage(data, "*"); // Replace '*' with the iframe's origin if known
        }

    }
});

function goToTariffs() {
    // Get the first section height to scroll to the next section
    const firstSectionHeight = document.getElementById('tariffs');

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


function goToBot() {
    const telegramUrl = `https://t.me/turontelecomchannel`; // Format to open the bot
    window.open(telegramUrl, '_blank');
}

