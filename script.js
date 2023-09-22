
let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
        document.getElementById("reset").disabled = false;
        document.getElementById("lap").disabled = false;
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("reset").disabled = true;
    document.getElementById("lap").disabled = true;
    lapCounter = 1;
    document.getElementById("lapTimes").innerHTML = "";
    isRunning = false;
}

function updateTime() {
    const display = document.getElementById("display");
    const time = display.textContent.split(":");
    let minutes = parseInt(time[0]);
    let seconds = parseInt(time[1]);
    let milliseconds = parseInt(time[2]);

    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
}

function lap() {
    const lapTime = document.getElementById("display").textContent;
    const lapList = document.getElementById("lapTimes");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

reset();
