
const distance = document.getElementById("distance");

const age = document.getElementById("age");
console.log(distance, age);

const ticketPrice = 0.21

const sendBtn = document.getElementById("sendbtn");

sendBtn.addEventListener("click", function () {
    // Raccolta Dati
    const distanceValue = parseInt(distance.value);
    const ageValue = parseInt(age.value);
    console.log(distanceValue, ageValue, typeof distanceValue, typeof ageValue);

    // Logica
    
})