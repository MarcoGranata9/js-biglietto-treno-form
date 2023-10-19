
const distance = document.getElementById("distance");

const age = document.getElementById("age");
console.log(distance, age);

const ticketPrice = 0.21

const sendBtn = document.getElementById("sendbtn");

let totalPrice 

let totalPrice20

let totalPrice40

let message

sendBtn.addEventListener("click", function () {
    // Raccolta Dati
    const distanceValue = parseInt(distance.value);
    const ageValue = parseInt(age.value);
    console.log(distanceValue, ageValue, typeof distanceValue, typeof ageValue);

    // Logica
    totalPrice = distanceValue * ticketPrice
    message = `Il prezzo del biglietto è ${totalPrice}`
    console.log(message)

    if (ageValue < 18) 
    {
        totalPrice20 = totalPrice - (totalPrice * 0.20);
        message = `Il prezzo del biglietto è ${totalPrice20.toFixed(2)}`
        console.log(message);
    } else if (ageValue > 65) {
        totalPrice40 = totalPrice - (totalPrice * 0.40);
        message = `Il prezzo del biglietto è ${totalPrice40.toFixed(2)}`
        console.log(message);
    }
})