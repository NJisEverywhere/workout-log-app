let timer = null;
let seconds = 10;

function update() {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  document.getElementById('time').textContent = `${min}:${sec}`;
}

document.getElementById('start').onclick = () => {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds--;
    update();

    if (seconds <= 0) {
      clearInterval(timer);
      timer = null;
      seconds = 10;
      update();
      alert('終了！');
    }
  }, 1000);
};

document.getElementById('reset').onclick = () => {
  clearInterval(timer);
  timer = null;
  seconds = 10;
  update();
};

document.getElementById('set').onclick = () => {
  const input = Number(document.getElementById('set-seconds').value);
  if (input > 0) {
    seconds = input;
    update();
  }
};

// メモ機能

document.getElementById('add').onclick = () => {
  const ex = document.getElementById('ex').value;
  const weight = document.getElementById('weight').value;
  const reps = document.getElementById('reps').value;
  const sets = document.getElementById('sets').value;

  if (!ex || !weight || !reps || !sets) {
    alert('すべての項目に入力してください');
    return;
  }

  const log = document.getElementById('log');
  const li = document.createElement('li');
  li.textContent = `${ex} | ${weight}kg × ${reps}回 × ${sets}セット `;

  // 編集ボタン
  const editBtn = document.createElement('button');
  editBtn.textContent = '編集';
  editBtn.onclick = () => {
    document.getElementById('ex').value = ex;
    document.getElementById('weight').value = weight;
    document.getElementById('reps').value = reps;
    document.getElementById('sets').value = sets;
    li.remove();
  };
  li.appendChild(editBtn);

  // 削除ボタン
  const delBtn = document.createElement('button');
  delBtn.textContent = '削除';
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);

  log.appendChild(li);

  document.getElementById('ex').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('reps').value = '';
  document.getElementById('sets').value = '';
};

update();
