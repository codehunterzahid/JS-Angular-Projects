const input = document.querySelector("#password");
const copy = document.querySelector(".copy-img");
const title = document.title;
const length = document.querySelector(".length");
const lengthValue = document.querySelector(".length-value");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generate-btn");

let uppercase = false;
let lowercase = false;
let numbers = false;
let symbols = false;

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbersLetters = "0123456789";
let symbolsLetters = "!@#$-_";

const allChar =
  uppercaseLetters + lowercaseLetters + numbersLetters + symbolsLetters;

let password = "";

const updateSlider = (value) => {
  lengthValue.innerHTML = value;
};

const copyPassword = () => {
    input.select();
    document.execCommand("copy");
    copy.setAttribute("title", "Copied");
    setTimeout(() => {
      copy.setAttribute("title", "copy");
    }, 3000);
  };
  


uppercaseCheckbox.addEventListener("change", () => {
  if (uppercaseCheckbox.checked) {
    uppercase = true;
    password +=
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  } else {
    uppercase = false;
  }
});

lowercaseCheckbox.addEventListener("change", () => {
  if (lowercaseCheckbox.checked) {
    lowercase = true;
    password +=
      lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  } else {
    lowercase = false;
  }
});

numbersCheckbox.addEventListener("change", () => {
  if (numbersCheckbox.checked) {
    numbers = true;
    password +=
      numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
  } else {
    numbers = false;
  }
});

symbolsCheckbox.addEventListener("change", () => {
  if (symbolsCheckbox.checked) {
    symbols = true;
    password +=
      symbolsLetters[Math.floor(Math.random() * symbolsLetters.length)];
  } else {
    symbols = false;
  }
});


generateBtn.addEventListener("click", () => {
    if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && !numbersCheckbox.checked && !symbolsCheckbox.checked) {
        input.value = "Click Check"; 
        return;
    }

    password = "";
    const maxLength = parseInt(lengthValue.innerHTML);

    while (password.length < maxLength) {
        if (uppercase && uppercaseCheckbox.checked) {
            password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        }
        if (lowercase && lowercaseCheckbox.checked) {
            password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
        }
        if (numbers && numbersCheckbox.checked) {
            password += numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
        }
        if (symbols && symbolsCheckbox.checked) {
            password += symbolsLetters[Math.floor(Math.random() * symbolsLetters.length)];
        }
    }


    password = password.slice(0, maxLength);

    input.value = password;
    copy.setAttribute("data-clipboard-text", password);
});
  
