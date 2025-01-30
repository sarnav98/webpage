document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function updateCountdown() {
        const launchDate = new Date("February 14, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const timeRemaining = launchDate - now;

        if (timeRemaining <= 0) {
            document.getElementById("timer").innerHTML = "We're Live!";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Email Subscription Form
    document.getElementById("subscription-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for subscribing! We'll notify you when we launch.");
    });
});
