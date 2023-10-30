
const Time = document.getElementById('display');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let sec = 0;
let min = 0;
let hour = 0;
let interval = null;
let status = 'stopped';

function stopWatch() {
    sec++;

    if (sec === 60) {
        sec = 0;
        min++;

        if (min === 60) {
            min = 0;
            hour++;
        }
    }

    Time.textContent = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

start.addEventListener('click', function () {
    if (status === 'stopped') {
        interval = setInterval(stopWatch, 1000);
        status = 'started';
    }
});

stop.addEventListener('click', function () {
    if (status === 'started') {
        clearInterval(interval);
        status = 'stopped';
    }
});

reset.addEventListener('click', function () {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    Time.textContent = '00:00:00';
    status = 'stopped';
});
