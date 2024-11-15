window.addEventListener("message", function (event) {
    // Handle the received message
    const data = event.data;
    if (data.action === "goToConnect") {
        const elementId = data.elementId;
        const tariff = document.getElementById('tariff');
        tariff.value = elementId;
    }
});

function getFormattedDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

document.getElementById('requestForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form input values
    const phoneInput = document.getElementById('number').value;

    const phoneRegex = /^(?:\+998\d{9}|9\d{8}|9989\d{8})$/;
    if (!phoneRegex.test(phoneInput)) {
        alert("Пожалуйста, введите действительный номер телефона.");
    }else{
        const fullname = document.getElementById('fullname').value;
        const number = document.getElementById('number').value;
        const tariff = document.getElementById('tariff').value;
        const tariffs = {
            tezkor: "Tezkor",
            barqaror: "Barqaror",
            checksiz: "Checksiz"
        }
        const message = `Дата подачи заявления: ${getFormattedDate()}\n Имя: ${fullname}\n Телефон: ${number}\n Язык: ${localStorage.getItem('language132465')} \n Тариф: ${tariffs?.[tariff]}`
        const token = '7128849436:AAE6uhEK6_kViChviOAkfr-NNlAcCEx5wiU'
        // Send request to server
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: "5129468790",
                text: message
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Message sent successfully:");
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

});


