const input = document.querySelector(".qr-text");
const qrCode = document.querySelector("#qr-code");
const generateBtn = document.querySelector(".generate-btn");
const imgBox = document.querySelector(".imgBox");
const downloadBtn = document.querySelector(".download-btn");

generateBtn.addEventListener("click", () =>{
    if(input.value == ""){
        input.classList.add("error");
        setTimeout(() =>{
            input.classList.remove("error");
        }, 1000); 
    } else{
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        input.value = "";
        imgBox.classList.add("show");

        generateBtn.style.display = "none";
        downloadBtn.style.display = "block";

        downloadBtn.href = qrCode.src;
    }
});

downloadBtn.addEventListener("click", (event) => {
    if (downloadBtn.href === "#") {
        event.preventDefault();
    }
});