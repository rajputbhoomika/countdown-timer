let countdownInterval;
let isDark = false;

function startCountdown() {
    clearInterval(countdownInterval);
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const countdownTitle = document.getElementById('countdown-title');
    const message = document.getElementById('message');
    const alarmSound = document.getElementById('alarm-sound');

    if (!date || !time) {
        alert('Please enter both date and time.');
        return;
    }

    countdownTitle.textContent = title || 'Countdown';
    message.textContent = '';

    const target = new Date(date + 'T' + time);
    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = target - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            message.textContent = 'Countdown Complete!';
            alarmSound.play();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    isDark = !isDark;
}
