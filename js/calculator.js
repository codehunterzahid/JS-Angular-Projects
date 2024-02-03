const input = document.querySelector("input");
const btn = document.querySelectorAll("button");

let string = "";

let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }else if(e.target.innerHTML == 'CE') {
            string = '';
            input.value = 0;
            return true;
        } else if (e.target.innerHTML === "π") {
            string *= Math.PI;
            input.value = string;
        } else if (e.target.innerHTML === "e") {
            string += Math.E;
            input.value = string;
        } else if (e.target.innerHTML === "√") {
            string += "Math.sqrt(";
            input.value = string;
        }else if (e.target.innerHTML === "Sin") {
            string += "Math.sin(";
            input.value = string;
        } else if (e.target.innerHTML === "Cos") {
            string += "Math.cos(";
            input.value = string;
        } else if (e.target.innerHTML === "Tan") {
            string += "Math.tan(";
            input.value = string;
        } else if (e.target.innerHTML === "Log") {
            string += "Math.log10(";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
