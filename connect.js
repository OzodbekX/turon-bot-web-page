document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const fullname = document.getElementById('fullname').value;
    const number = document.getElementById('number').value;
    const tariff = document.getElementById('tariff').value;

    // Prepare data to send
    const formData = {
        fullname: fullname,
        number: number,
        tariff: tariff
    };

    // Send request to server
    fetch('https://yourserver.com/api/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Заявка отправлена успешно!');
        console.log(data);
    })
    .catch(error => {
        alert('Ошибка при отправке заявки.');
        console.error(error);
    });
});
