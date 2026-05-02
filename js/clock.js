const clockDiv = document.getElementById("clock");

function getClock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");

  clockDiv.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
