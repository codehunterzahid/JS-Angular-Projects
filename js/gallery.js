const scrollContainer = document.querySelector(".gallery");
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})


nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})