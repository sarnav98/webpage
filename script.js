// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const launchDate = new Date('Feb 14, 2024 00:00:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const diff = launchDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // Form Submission
    document.getElementById('subscription-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! You\'ll be the first to know when we launch.');
        this.reset();
    });
});
