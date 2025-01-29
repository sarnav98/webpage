function updateCountdown() {
   const targetDate = new Date('February 14, 2025 00:00:00').getTime();
   const now = new Date().getTime();
   const timeLeft = targetDate - now;

   if (timeLeft > 0) {
       const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

       document.getElementById('days').textContent = String(days).padStart(2, '0');
       document.getElementById('hours').textContent = String(hours).padStart(2, '0');
       document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
       document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
   } else {
       document.getElementById('countdown').innerHTML = "We're Live!";
   }
}

setInterval(updateCountdown, 1000);
updateCountdown();

function sendEmail(event) {
   event.preventDefault();
   const emailInput = event.target.querySelector('input[type="email"]');
   const email = emailInput.value;

   window.location.href = `mailto:jewelaa.official@gmail.com?subject=Subscription&body=Email%3A ${encodeURIComponent(email)}`;
}
