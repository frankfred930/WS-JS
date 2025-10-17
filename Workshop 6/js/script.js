function getData() {
    const destination = document.getElementById("destination").value.trim();
    const arrival = document.getElementById("arrival").value.trim();

    const services = [];
    const checkboxes = document.querySelectorAll('#services input[type="checkbox"]');
    checkboxes.forEach(box => {
        if(box.checked) services.push(box.value);
    });

    const data = {
        destination: destination,
        arrival: arrival,
        services: services
    };

    localStorage.setItem("reservation", JSON.stringify(data));
    alert("Data saved to LocalStorage!");
    loadData();
}

function loadData() {
    const sessionDiv = document.getElementById("sessiondata");
    const data = localStorage.getItem("reservation");
    if(data) {
        const obj = JSON.parse(data);
        let html = `<p><strong>Destination:</strong> ${obj.destination}</p>`;
        html += `<p><strong>Arrival:</strong> ${obj.arrival}</p>`;
        html += `<p><strong>Services:</strong> ${obj.services.join(", ")}</p>`;
        sessionDiv.innerHTML = html;

        document.getElementById("destination").value = obj.destination;
        document.getElementById("arrival").value = obj.arrival;

        const checkboxes = document.querySelectorAll('#services input[type="checkbox"]');
        checkboxes.forEach(box => {
            box.checked = obj.services.includes(box.value);
        });
    } else {
        sessionDiv.innerHTML = "<p>No saved data yet.</p>";
    }
}
