document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const launchDate = new Date("February 14, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const difference = launchDate - now;

        if (difference <= 0) {
            document.getElementById("timer").innerHTML = "<p>We're Live!</p>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
