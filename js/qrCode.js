const input = document.querySelector(".qr-text");
const qrCode = document.querySelector("#qr-code");
const generateBtn = document.querySelector(".generate-btn");
const imgBox = document.querySelector(".imgBox");
const downloadBtn = document.querySelector(".download-btn");

generateBtn.addEventListener("click", () => {
    if (input.value == "") {
        input.classList.add("error");
        alert("Enter Valid Input");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    } else {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                qrCode.src = URL.createObjectURL(blob);
                input.value = "";
                imgBox.classList.add("show");
                input.classList.add("hideText");

                generateBtn.style.display = "none";
                downloadBtn.style.display = "block";

                downloadBtn.href = qrCode.src;
            })
            .catch(error => {
                console.error('Error fetching QR code:', error);
            });
    }
});

downloadBtn.addEventListener("click", (event) => {
    if (downloadBtn.href === "#") {
        event.preventDefault();
    }
});
