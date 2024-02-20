const submitBtn = document.querySelector(".submit-btn");
const closeBtn = document.querySelector(".close-btn");
const popUp = document.querySelector(".popup");

submitBtn.addEventListener("click", ()=>{
    popUp.classList.add("open-popup");
})

closeBtn.addEventListener("click", ()=>{
    popUp.classList.remove("open-popup");
})