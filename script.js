function calculatePrice() {
    let price = document.getElementById("price").value;
    let tickets = document.getElementById("tickets").value;
    let children = document.getElementById("children").value;
    let todayM = document.getElementById("today's menu").value;
    let childrenM = document.getElementById("Children's menu").value;
    let buffet = document.getElementById("buffet").value;
    let days = document.getElementById("days").value;

    let menuTotal = (Number(todayM) * 15) + (Number(childrenM) * 10) + (Number(buffet) * 20);
    let total = (price * tickets - (price * children) + menuTotal) * days;

    let totalFormat = total.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
    document.getElementById("total").value = totalFormat;
}


function validateForm() {
    let nameInput = document.getElementById("name");
    let nameValue = nameInput.value.trim();
    let emailInput = document.getElementById("email");
    let emailValue = emailInput.value.trim();
    let phoneInput = document.getElementById("phone");
    let phoneValue = phoneInput.value.trim();

    let numberPattern = /[0-9]/;
    let phonePattern = /^[0-9]+$/;

    let validForm = true;


    if (numberPattern.test(nameValue)) {
        let nameError = document.getElementById("name-error");
        nameError.textContent = "El nombre y apellidos no deben contener números";
        nameError.style.display = "inline-block";
        validForm = false;
    } else {
        let nameError = document.getElementById("name-error");
        nameError.style.display = "none";
    }


    if (!phonePattern.test(phoneValue)) {
        let phoneError = document.getElementById("phone-error");
        phoneError.textContent = "El teléfono debe contener solo números";
        phoneError.style.display = "inline-block";
        validForm = false;
    } else {
        let phoneError = document.getElementById("phone-error");
        phoneError.style.display = "none";
    }

    return validForm;
}