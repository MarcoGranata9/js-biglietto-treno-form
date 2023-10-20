const distance = document.getElementById("distance");
const age = document.getElementById("age");
const username = document.getElementById("username");
const ticketPrice = 0.21;
const sendBtn = document.getElementById("sendbtn");
const delBtn = document.getElementById("delbtn");
const greeting = document.getElementById("greeting")
const ticket = document.getElementById("ticket")
const carriage = document.getElementById("carriage")
const cpcode = document.getElementById("cpcode")
const discountElem = document.getElementById("discount")
const ticketSectionElem = document.getElementById("ticketsection")

sendBtn.addEventListener("click", function () {
    // Raccolta Dati
    const distanceValue = parseInt(distance.value);
    const ageValue = parseInt(age.value);
    const usernameValue = username.value
    console.log(distanceValue, ageValue, typeof distanceValue, typeof ageValue);

    // Logica
    const startPrice = distanceValue * ticketPrice

    let discount = 0; 

    if (ageValue < 18) {
        discount = startPrice * 0.2;
    } else if (ageValue > 65) {
        discount = startPrice * 0.4;
    }
    
    const discountPrice = startPrice - discount;
    console.log(discountPrice)

    const carriageNum = (Math.floor(Math.random() * 25) + 1)

    const cpcodeNum = (Math.floor(Math.random() * (9999 - 1111 + 1) + 1111))
    
    greeting.innerHTML = `${usernameValue}`
    ticket.innerHTML = `${discountPrice.toFixed(2)}`
    discountElem.innerHTML = `${discount.toFixed(2)}`
    carriage.innerHTML = `${carriageNum}`
    cpcode.innerHTML = `${cpcodeNum}`
    ticketSectionElem.classList.remove("d-none")
})

delBtn.addEventListener("click", function () {
    distance.value = "";
    age.value = "";
    username.value = "";

    ticketSectionElem.classList.add("d-none")
})
