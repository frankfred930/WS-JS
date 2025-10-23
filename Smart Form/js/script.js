const timeForm = document.getElementById("timeForm");
const entryList = document.getElementById("entryList");
const errorDiv = document.getElementById("error");
const totalHoursDiv = document.getElementById("totalHours");
const categorySummaryDiv = document.getElementById("categorySummary");

let entries = [];

// Lomakkeen käsittely
timeForm.addEventListener("submit", function(e){
    e.preventDefault();
    const day = document.getElementById("day").value;
    const category = document.getElementById("category").value;
    const hours = parseFloat(document.getElementById("hours").value);
    const description = document.getElementById("description").value.trim();

    // Virhetarkastus
    let errorMsg = "";
    if(!day) errorMsg += "Valitse päivä.<br>";
    if(!category) errorMsg += "Valitse kategoria.<br>";
    if(isNaN(hours) || hours <= 0) errorMsg += "Tunnit tulee olla positiivinen luku.<br>";

    if(errorMsg){
        errorDiv.innerHTML = errorMsg;
        errorDiv.classList.remove("hidden");
        return;
    } else {
        errorDiv.classList.add("hidden");
    }

    const entry = {day, category, hours, description};
    entries.push(entry);

    // Tallennetaan localStorageen
    localStorage.setItem("weekEntries", JSON.stringify(entries));

    // Päivitetään näkymä
    updateEntries();
    timeForm.reset();
});

// Päivitä listaus ja yhteenveto
function updateEntries(){
    entryList.innerHTML = "";
    let totalHours = 0;
    let categoryTotals = {};

    entries.forEach((e, idx) => {
        totalHours += e.hours;
        categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.hours;

        const li = document.createElement("li");
        li.innerHTML = `<strong>${e.day}</strong> (${e.category}): ${e.hours} h - ${e.description}`;
        entryList.appendChild(li);
    });

    totalHoursDiv.textContent = `Kokonaisuudessaan: ${totalHours} tuntia`;

    let summaryHtml = "<ul>";
    for(const cat in categoryTotals){
        const percent = ((categoryTotals[cat]/totalHours)*100).toFixed(1);
        summaryHtml += `<li>${cat}: ${categoryTotals[cat]} h (${percent}%)</li>`;
    }
    summaryHtml += "</ul>";
    categorySummaryDiv.innerHTML = summaryHtml;
}

// Lataa tallennetut merkinnät localStoragesta
function loadEntries(){
    const data = localStorage.getItem("weekEntries");
    if(data){
        entries = JSON.parse(data);
        updateEntries();
    }
}
