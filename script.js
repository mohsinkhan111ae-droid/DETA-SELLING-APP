
let dataSold = 0;
let earnings = 0;
let interval;
const dataRate = 20; // MB per sec
const pricePerMB = 2; // ₹ per MB

const dataSoldEl = document.getElementById("dataSold");
const earningsEl = document.getElementById("earnings");
const progressBar = document.getElementById("progressBar");

document.getElementById("startBtn").addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
    dataSold += dataRate;
    earnings += dataRate * pricePerMB;
    dataSoldEl.textContent = dataSold + " MB";
    earningsEl.textContent = "₹" + earnings.toFixed(2);
    let progress = (dataSold % 1000) / 10;
    progressBar.style.width = progress + "%";
  }, 1000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  dataSold = 0;
  earnings = 0;
  dataSoldEl.textContent = "0 MB";
  earningsEl.textContent = "₹0.00";
  progressBar.style.width = "0%";
});
