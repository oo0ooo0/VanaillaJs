// import "./styles.css";
const timeClock = document.querySelector('h2');
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const nowTime = new Date();
  const xmasDay = new Date('2020-12-24:00:00:00+0900');
  const timeDifference = xmasDay - nowTime;

  if (timeDifference === 0) {
    timeClock.innerHTML = 'Christmas';
  } else {
    const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((timeDifference / (1000 * 60)) % 24);
    const s = Math.floor((timeDifference / 1000) % 60);

    timeClock.innerText = `Time Until Christmas
    ${d < 10 ? `0${d}` : d}d ${h < 10 ? `0${h}` : h}h ${m < 10 ? `0${m}` : m}m ${s < 10 ? `0${s}` : s}s`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
