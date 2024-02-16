const input = document.querySelector(".date");
const btn = document.querySelector(".cal-btn");
const ageBox = document.querySelector(".age-box");
const age = document.querySelectorAll(".age");
const days = document.querySelector(".Days");
const months = document.querySelector(".Months");
const years = document.querySelector(".Years");

input.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", () => {
    let birthDate = new Date(input.value);

    let y1 = birthDate.getFullYear();
    let m1 = birthDate.getMonth() + 1;
    let d1 = birthDate.getDate();

    let currDate = new Date();

    let y2 = currDate.getFullYear();
    let m2 = currDate.getMonth() + 1;
    let d2 = currDate.getDate();

    let y3, d3, m3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        let remainingDays = daysInMonth(y1, m1);
        d3 = remainingDays - d1 + d2;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    if (d3 < 0) {
        d3 = daysInMonth(y3, m3);
    }

    age.forEach((age) => {
        age.style.display = "flex";
    });

    days.innerText = d3;
    months.innerText = m3;
    years.innerText = y3;
});

const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};
