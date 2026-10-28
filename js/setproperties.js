// let count = 0;
// setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// wap using setTimeout , setInterval and getElementById to create a timer for 15 min.

let a = 15;
let totalSeconds = a * 60;

const countdownInterval = setInterval(() => {
  totalSeconds--;

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  console.log(`${minutes}:${seconds}`);

  if (totalSeconds <= 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

setTimeout(
  () => {
    console.log("00:00 - Time's up!");
  },
  a * 60 * 1000,
);
