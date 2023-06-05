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
