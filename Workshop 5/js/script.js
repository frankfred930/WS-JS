
const contactForm = document.querySelector('form[onsubmit=""]');
contactForm.onsubmit = function(event) {
    event.preventDefault();

    const email = contactForm.email.value.trim();
    const comment = contactForm.comment.value.trim();

    let errorMsg = '';

    if(email.length < 6 || email.length > 15 || !email.includes('@')) {
        errorMsg += 'Email is invalid. ';
        contactForm.email.style.border = "2px solid red";
    } else {
        contactForm.email.style.border = "";
    }

    if(comment === "") {
        errorMsg += 'Comment cannot be empty.';
        contactForm.comment.style.border = "2px solid red";
    } else {
        contactForm.comment.style.border = "";
    }

    if(errorMsg) {
        alert("Errors: " + errorMsg);
    } else {
        alert(`Email: ${email}\nComment: ${comment.substring(0,50)}`);
    }
}


const membershipForm = document.getElementById("theForm");
membershipForm.onsubmit = function(event) {
    event.preventDefault();

    const typeSelect = document.getElementById("type");
    const typeValue = typeSelect.value;
    const years = parseInt(document.getElementById("years").value);
    const costField = document.getElementById("cost");

    let price = 0;
    switch(typeValue){
        case "basic": price = 10; break;
        case "premium": price = 15; break;
        case "gold": price = 20; break;
        case "platinum": price = 25; break;
    }

    let total = price * years;

    let discountMessage = "";
    if(years > 2 && years < 5){
        total *= 0.8;
        discountMessage = "You get 20% discount!";
    } else if(years >= 5){
        total *= 0.8;
        total -= 5;
        discountMessage = "You get 20% discount + extra 5€!";
    }

    costField.value = total.toFixed(2);
    if(discountMessage) alert(discountMessage);
}


function calculate() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let price = parseFloat(document.getElementById("price").value);
    let tax = parseFloat(document.getElementById("tax").value);
    let discount = parseFloat(document.getElementById("discount").value);


    if(quantity > 100) discount *= 2;

    let total = (price * quantity) * (1 + tax/100) - discount;
    document.getElementById("total").value = total.toFixed(2);
}


const contactMethodSelect = document.createElement("select");
contactMethodSelect.id = "contactMethod";
const options = ["email", "phone", "sms"];
options.forEach(opt => {
    let optionElem = document.createElement("option");
    optionElem.value = opt;
    optionElem.text = opt;
    contactMethodSelect.appendChild(optionElem);
});
contactForm.appendChild(document.createElement("br"));
contactForm.appendChild(contactMethodSelect);

const extraInput = document.createElement("input");
extraInput.id = "extraInfo";
extraInput.placeholder = "Details here...";
extraInput.style.display = "none";
contactForm.appendChild(document.createElement("br"));
contactForm.appendChild(extraInput);

contactMethodSelect.addEventListener("change", function() {
    extraInput.style.display = "inline";
    extraInput.placeholder = `Enter your ${this.value} details`;
});
