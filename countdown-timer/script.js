const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '29 Oct 2022';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  if (totalSeconds <= 0) {
    let text = document.getElementsByClassName("countdown-container");
    text[0].style.display = "none";
    let cmsn = document.getElementsByClassName("cmsn");
    cmsn[0].style.display = "block";
  }
  const seconds = Math.floor(totalSeconds) % 60;
  const mins = Math.floor((totalSeconds / 60)) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  daysEl.innerHTML = days;
  minsEl.innerHTML = formatTime(mins);
  hoursEl.innerHTML = formatTime(hours);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}