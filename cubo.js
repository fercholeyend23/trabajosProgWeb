function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourFace = document.querySelector('.front');
  const minuteFace = document.querySelector('.right');
  const secondFace = document.querySelector('.back');

  hourFace.textContent = padZero(hours);
  minuteFace.textContent = padZero(minutes);
  secondFace.textContent = padZero(seconds);
}

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

updateClock();
setInterval(updateClock, 1000);
