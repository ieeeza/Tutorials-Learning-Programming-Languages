let pauseButton = document.getElementById("pauseButton");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let stopwatch = document.getElementById("timerNumber");

sec = 0;
min = 0;
hour = 0;

stopButton.addEventListener("click", stopTimer);

pauseButton.addEventListener("click", pause);

startButton.addEventListener("click", start);

function start() {
 interval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;

    document.getElementById("timerNumber").innerHTML = "00:00:00"
}

function pause() {
    clearInterval(interval);
}

function timer() {
    sec++;
    if(sec == 60) {
        min++;
        sec = 0;
    } else if (min == 60) {
        hour++;
        min = 0;
        sec = 0;
    }

    document.getElementById("timerNumber").innerHTML = hour+":"+min+":"+sec
}