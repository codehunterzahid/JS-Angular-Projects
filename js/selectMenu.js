const select = document.querySelector(".selectField");
const text = document.querySelector(".text");
const list = document.querySelector(".list");
const options = document.querySelectorAll(".option");
const btn = document.querySelector(".btn");
const arrow = document.querySelector(".arrow");

select.addEventListener("click",()=>{
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
})

for(let option of options){
    option.addEventListener("click", ()=>{
        text.innerHTML = option.querySelector("p").innerHTML;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
        btn.style.display = "block";

        btn.innerHTML = `Go To ${text.innerHTML}`;
    })
}

btn.addEventListener("click", ()=>{
    btn.href = `https://www.${text.innerHTML}.com`;
})
