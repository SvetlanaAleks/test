import layout from "./global/layout";
import noScroll from "./global/noScroll";
import Menu from "./modules/Menu";
import Sliders from "./modules/Sliders";
import Controls from "./modules/Controls";
import Progress from "./modules/Progress";

//timer
function initializeTimer() {
  if (!localStorage.getItem("ever-timer")) {
    var time = {
      hours: 5,
      minutes: 40,
      seconds: 0,
    };

    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

    localStorage.setItem("time", time);
    localStorage.setItem("ever-timer", true);
  }

  timerSettings();
}

function timerSettings() {
  var time = localStorage.getItem("time"),
    different = document.querySelector(".timer-different"),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  hours = hours < 10 ? "0" + hours : "" + hours;

  var hoursHTML = document.getElementsByClassName("hours");
  var minutesHTML = document.getElementsByClassName("minutes");
  var secondsHTML = document.getElementsByClassName("seconds");

  if (--time < 0) {
    localStorage.removeItem("ever-timer");
    return;
  }
  if (different) {
    seconds = seconds.split("");
    minutes = minutes.split("");
    hours = hours.split("");

    diFilling(hoursHTML, hours);
    diFilling(minutesHTML, minutes);
    diFilling(secondsHTML, seconds);
  } else {
    filling(hoursHTML, hours);
    filling(minutesHTML, minutes);
    filling(secondsHTML, seconds);
  }

  localStorage.setItem("time", time);
  setTimeout(timerSettings, 1000);
}

function filling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value;
  }
}

function diFilling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value[i % 2];
  }
}

$(document).ready(function () {
  initializeTimer();

  Menu.init();
  Controls.init();
  Progress.init();
  var year = new Date().getFullYear();
  var placeY = document.getElementsByClassName("year");
  for (let i = 0; i < placeY.length; i++) {
    var elemY = placeY[i];
    elemY.innerHTML = year;
  }

  layout.layoutHandler({
    afterResize: (layout) => {
      if (layout.WIN_WIDTH >= 768) {
        noScroll.off();
      }
    },
  });
});

function main() {
  Sliders.init();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    "scroll",
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
      passive: true,
    }
  );
} else {
  main();
}
