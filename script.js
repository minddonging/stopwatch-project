// STOPWATCH

let seconds = 0;
let timer = null;

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  display.textContent = seconds;
}

function countSeconds() {
  seconds++;

  updateDisplay();
}

startBtn.addEventListener("click", function () {

  if (timer === null) {

    timer = setInterval(countSeconds, 1000);

  }

});

stopBtn.addEventListener("click", function () {

  clearInterval(timer);

  timer = null;

});

resetBtn.addEventListener("click", function () {

  clearInterval(timer);

  timer = null;

  seconds = 0;

  updateDisplay();

});


// CALENDAR

function updateCalendar() {

  const now = new Date();

  document.getElementById("time").textContent =
    "Time: " + now.toLocaleTimeString("en-US");

  document.getElementById("date").textContent =
    "Date: " + now.toLocaleDateString("en-US", {

      weekday: "long",

      year: "numeric",

      month: "long",

      day: "numeric"

    });

}

setInterval(updateCalendar, 1000);

updateCalendar();
