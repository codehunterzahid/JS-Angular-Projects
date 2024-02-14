const hrs = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();

    hours = hours % 12 || 12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
