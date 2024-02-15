const password = document.querySelector("#password");
const openEye = document.querySelector("#openEye");
const msg = document.querySelector(".msg");

password.addEventListener("input", ()=>{
    if(password.value.length >0){
        msg.style.display = "block";
    } else{
        msg.style.display = "none";
        password.style.borderBottom = "2px solid #2e2e2e";
    }

    if(password.value.length <4){
        msg.innerHTML = "Your Password is Weak";
        password.style.borderBottom = "2px solid red";
        msg.style.color = "red";
    } else if(password.value.length >4 && password.value.length <8){
        msg.innerHTML = "Your Password is Medium";
        password.style.borderBottom = "2px solid orange";
        msg.style.color = "orange";
    } else if(password.value.length >8){
        msg.innerHTML = "Your Password is Strong";
        password.style.borderBottom = "2px solid green";
        msg.style.color = "green";
    }
})

openEye.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        openEye.classList.remove("fa-eye-slash");
        openEye.classList.add("fa-eye");
    } else {
        password.type = "password";
        openEye.classList.remove("fa-eye");
        openEye.classList.add("fa-eye-slash");
    }
})