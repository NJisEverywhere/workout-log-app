let timer = null;
let seconds = 10;

function update() {
  document.getElementById('time').textContent = seconds;
}

document.getElementById('start').onclick = () => {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds--;
    update();

    if (seconds === 0) {
      clearInterval(timer);
      timer = null;
      alert('終了');
    }
  }, 1000);
};

document.getElementById('reset').onclick = () => {
  if (timer === null) return;
  timer = null;
  seconds = 10;
  update();
};
