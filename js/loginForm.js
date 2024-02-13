const password = document.querySelector("#password");
const openEye = document.querySelector("#openEye");

openEye.addEventListener("click", () =>{

    if(password.type === "password"){
        password.type = "text";
        openEye.classList.remove("fa-eye-slash");
        openEye.classList.add("fa-eye");
    } else{
        password.type = "password";
        openEye.classList.remove("fa-eye");
        openEye.classList.add("fa-eye-slash");
    }
})