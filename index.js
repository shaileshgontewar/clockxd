function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var am = document.getElementById("am");

  if (hrs >= 12) {
    am.innerHTML = "PM";
  } else {
    am.innerHTML = "AM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("hour").innerText = hrs;
  document.getElementById("minutes").innerText = min;
  document.getElementById("seconds").innerText = sec;
}
setInterval(displayTime, 10);
//=========

function setTime() {
  var wakeup = document.querySelector("#wakeup-time");
  var lunch = document.querySelector("#lunch-time");
  var nap = document.querySelector("#nap-time");
  var night = document.querySelector("#night-time");

  let wakeupText = wakeup.options[wakeup.selectedIndex].text;
  let lunchText = lunch.options[lunch.selectedIndex].text;
  let napText = nap.options[nap.selectedIndex].text;
  let nightText = night.options[night.selectedIndex].text;

  document.querySelector(".wakeupMsg").innerText = wakeupText;
  document.querySelector(".lunchMsg").innerText = lunchText;
  document.querySelector(".napMsg").innerText = napText;
  document.querySelector(".nightMsg").innerText = nightText;
}

function watchTime() {
  var wakeup = document.querySelector("#wakeup-time");
  var lunch = document.querySelector("#lunch-time");
  var nap = document.querySelector("#nap-time");
  var night = document.querySelector("#night-time");

  let wakeupValue = wakeup.value;
  let lunchValue = lunch.value;
  let napValue = nap.value;
  let nightValue = night.value;
  let hours = new Date().getHours();

  if (wakeupValue == hours) {
    document.querySelector("#msg-text").innerText =
      "GRAB SOME HEALTY BREAKFAST !!!";
    document.querySelector("#msg-img").style.background =
      "url(./image/morning.png)";
    document.querySelector("#good-wish").innerText =
      "GOOD MORNING !! WAKE UP !!";
  }
  if (lunchValue == hours) {
    document.querySelector("#msg-text").innerText = "LET'S HAVE SOME LUNCH !!";
    document.querySelector("#msg-img").style.background =
      "url(./image/lunch.png)";
    document.querySelector("#good-wish").innerText =
      "GOOD AFTERNOON !! FOOD TIME !!";
  }
  if (napValue == hours) {
    document.querySelector("#msg-text").innerText =
      "STOP YAWNING, GET SOME TEA..ITS JUST EVENING!";
    document.querySelector("#msg-img").style.background =
      "url(./image/evening.png)";
    document.querySelector("#good-wish").innerText = "GOOD EVENING !! ";
  }
  if (nightValue == hours) {
    document.querySelector("#msg-text").innerText =
      "CLOSE YOUR EYES AND GO TO SLEEP";
    document.querySelector("#msg-img").style.background =
      "url(./image/night.png)";
    document.querySelector("#good-wish").innerText = "GOOD NIGHT !! ";
  }

  setTime();
}
