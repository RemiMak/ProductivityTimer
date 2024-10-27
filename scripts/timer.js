let start_time = Date.now();
let seconds = 0;
let isStudying = false;
let timerInterval;

const button = document.querySelector("button");
const timer_display = document.querySelector("h1");

button.onclick = () => {
    isStudying = !isStudying
    if (isStudying) {
        start_timer()
    }
    else {
        reset_timer()
    }
}

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60);
    const secs_padded = secs.padStart(2, '0');

    if (hours === '00' && minutes == '00'){
        return `${secs}`;
    }

    else if (hours === '00'){
        return `${minutes}:${secs_padded}`;
    }
    else {
        return `${hours}:${minutes}:${secs}`;
    }
    
}

function start_timer(){
    button.textContent = "STOP"
    timer_display.textContent = "LETS GO!"

    timerInterval = setInterval(() => {
        seconds++;
        timer_display.textContent = formatTime(seconds);
    }, 1000);
}


function reset_timer(){
    button.textContent = "START"
    seconds = 0
    timer_display.textContent = "Take a good break!"
    clearInterval(timerInterval)
}