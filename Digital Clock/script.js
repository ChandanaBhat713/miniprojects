function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let min = now.getMinutes().toString().padStart(2, 0);
  let sec = now.getSeconds().toString().padStart(2, 0);
  let times = `${hours}:${min}:${sec} ${meridiem}`;
  document.getElementById("clock").textContent = times;
}

updateclock();
setInterval(updateclock, 1000);
