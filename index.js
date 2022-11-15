// "use strict";
window.onload = function () {
  let tens = 00;
  let seconds = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  buttonStart = document.getElementById("start");
  buttonStop = document.getElementById("stop");
  buttonReset = document.getElementById("reset");
  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds = seconds;
    }
  }
};
