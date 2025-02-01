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

function onLoadFrame(iframeId, sectionId, contentId, minHeight) {
    const iframe = document.getElementById(iframeId);
    try {
        // Access the iframe's document
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        // Find the target element in the iframe
        const targetElement = iframeDocument.querySelector(`#${contentId}`); // Replace with the desired element selector
        if (targetElement) {
            // Get the height of the target element
            const elementHeight = targetElement.offsetHeight;
            // Set the height of the section
            const section = document.getElementById(sectionId);
            section.style.height = elementHeight + 16 + 'px';
            section.style.minHeight = minHeight || (elementHeight + 16 + 'px');
            iframe.style.height = elementHeight + 16 + 'px';
        }
    } catch (error) {
        console.error('Error accessing iframe content:', error);
    }
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
    const telegramUrl = `https://t.me/telecomturon`; // Format to open the bot
    window.open(telegramUrl, '_blank');
}

