document.getElementById("myBtn").onclick = function() {

    const myCheckBox = document.getElementById("checkBtn");
    const visaPay = document.getElementById("visabtn");
    const mastercardPay = document.getElementById("mastercardbtn");
    const paypalPay = document.getElementById("paypalbtn");

    if (myCheckBox.checked) {
        console.log("Você esta inscrito!!");
    }
    else {
        console.log("Você não esta inscrito!!");
    }

    if (visaPay.checked) {
        console.log("Você esta pagando com cartão VISA!!");
    }
    else if (mastercardPay.checked) {
        console.log("Você esta pagando com cartão MASTERCARD!!");
    }
    else if (paypalPay.checked) {
        console.log("Você esta pagando com cartão PAYPAL!!");
    }
    else {
        console.log("Selecione uma forma de pagamento!!");
    }
}