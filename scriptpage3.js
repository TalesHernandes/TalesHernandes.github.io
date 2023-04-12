const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number-btn");
const deleteBtn = document.querySelector(".delete-btn");

let currentValue = 0;

buttons.forEach(function (button) {
button.addEventListener("click", function () {
    currentValue = currentValue * 10 + parseInt(button.dataset.value);
    display.textContent = "$" + (currentValue / 100).toFixed(2);
});
});

deleteBtn.addEventListener("click", function () {
currentValue = Math.floor(currentValue / 10);
display.textContent = "$" + (currentValue / 100).toFixed(2);
});