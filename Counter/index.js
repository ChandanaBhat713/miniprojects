const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const CountLable = document.getElementById("countlable");

let count = 0;

IncreaseBtn.onclick = function () {
  count++;
  CountLable.textContent = count;
};

DecreaseBtn.onclick = function () {
  count--;
  CountLable.textContent = count;
};

ResetBtn.onclick = function () {
  count = 0;
  CountLable.textContent = count;
};
