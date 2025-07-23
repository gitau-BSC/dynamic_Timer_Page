// DOM Elements
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let interval = null;
// Format time as HH:MM:SS
function formatTimer(totalSeconds){
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
}

// Update Timer Display
function updateTimer() {
    timerDisplay.textContent = formatTimer(seconds);
}

// Start/Pause Toggle
startBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startBtn.textContent = "Start";
    }
    else {
        interval = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        startBtn.textContent = "Pause"
        }
    });

    // Reset Timer
    resetBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        seconds = 0;
        updateTimer();
        startBtn.textContent = "Start";
    });

    // Initial Timer Display
updateTimer();
    
