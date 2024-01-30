const input = document.querySelector("#input");
const btn = document.querySelector("#addTask");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
    if (input.value === '') {
        alert("Please Enter Your Task First");
    } else {
        let li = document.createElement("li");
        let currentDate = new Date();
        let formattedDate = `${currentDate.getDate()} ${getMonthAbbreviation(currentDate.getMonth())}`; // Format: "day month"
        li.innerHTML = `${input.value} - ${formattedDate}`;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    storeData();
});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
});

function storeData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}

function getMonthAbbreviation(monthIndex) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[monthIndex];
}

showData();
