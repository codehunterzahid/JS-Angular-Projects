const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#min");
const secondsElement = document.querySelector("#sec");

let coming = new Date("Dec 31, 2024 00:00:00").getTime();

let x = setInterval(() => {
    let currentTime = new Date().getTime();
    let distance = coming - currentTime;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
    minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(x);
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
    }
}, 1000);
