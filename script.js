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

function activateConfirmation(event) {

    event.preventDefault();

    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;
    let ticketsValue = document.getElementById("tickets").value;
    let childrenValue = document.getElementById("children").value;
    let adultsValue = document.getElementById("adults").value;
    let startDateValue = document.getElementById("startDate").value;
    let endDateValue = document.getElementById("endDate").value;
    let totalValue = document.getElementById("total").value;

    let confirmationBox = document.getElementById("confirmationBox");
    confirmationBox.innerHTML =
        `
      <div class="confirmacion-content">

      <h2 class="title__form">CONFIRMACIÓN DE RESERVA:</h2>

        <p>Nombre y apellidos: ${nameValue}</p>
        <p>Correo Electrónico: ${emailValue}</p>
        <p>Teléfono de contacto: ${phoneValue}</p>
        <p>Número de entradas: ${ticketsValue}</p>
        <p>Número de niños: ${childrenValue}</p>
        <p>Número de adultos: ${adultsValue}</p>
        <p>Restaurantes Temáticos: ${ticketsValue}</p>
        <p>Fecha de inicio: ${startDateValue}</p>
        <p>Fecha de fin: ${endDateValue}</p>
        <p>Total: ${totalValue}</p>

        <div class="confirmacion-buttons">

        <button class="button" onclick="cancelarReserva()">Cancelar reserva</button>
        <button id="confirmButton" class="confirmButton" onclick="agregarConfirmacion()">Confirmar reserva</button>

        </div>
      </div>
    `;

}

function agregarConfirmacion() {

    let nameValue = document.getElementById("name").value;
    let ticketsValue = document.getElementById("tickets").value;
    let childrenValue = document.getElementById("children").value;
    let adultsValue = document.getElementById("adults").value;
    let startDateValue = document.getElementById("startDate").value;
    let endDateValue = document.getElementById("endDate").value;

    var table = document.getElementById('table');
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "Inicio: " + startDateValue + " Fin: " + endDateValue;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = nameValue;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = ticketsValue;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = adultsValue;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = childrenValue;

    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = ticketsValue;
}

function cancelarReserva() {
    document.getElementById("myForm").reset();
    document.getElementById("confirmationBox").innerHTML = "";
}