const countBtn = document.querySelector("#count");
const resetBtn = document.querySelector("#reset");
const result = document.querySelector("#result");
const days = document.querySelector("#day");
let day = JSON.parse(localStorage.getItem("day"));
let count = 0;
days.innerHTML = day;

// *count function 
const counter = () => {
        count++;
        checkCount();
        updateDay();
        result.innerHTML = count;
        days.innerHTML = day;
    }
    // *checkCount function
const checkCount = () => {
    if (count >= 27) {
        day += 1;
        count = 0;
    }
}

countBtn.addEventListener("click", () => {
    counter();
})

resetBtn.addEventListener("click", () => {
    count = 0;
    day = 0;
    updateDay();
    result.innerHTML = count;
    days.innerHTML = day;
})

// *local storage
function updateDay() {
    localStorage.setItem("day", JSON.stringify(day))
}