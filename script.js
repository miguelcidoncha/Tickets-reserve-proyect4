function calculatePrice() {
    let price = document.getElementById("price").value;
    let adults = document.getElementById("adults").value;
    let tickets = document.getElementById("tickets").value;
    let restaurant = document.getElementById("restaurant").value;
    let subtotalAdults = price * adults;
    let subtotalTicketsRestaurant = tickets * restaurant;
    let total = subtotalAdults + subtotalTicketsRestaurant;
    let totalFormat = total.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
    });
    document.getElementById("total").value = totalFormat;
}

function validateForm () {
    let nameInput = document.getElementById("name");
    let nameValue = nameInput.value.trim();
    let emailInput = document.getElementById("email");
    let emailValue = emailInput.value.trim();
}