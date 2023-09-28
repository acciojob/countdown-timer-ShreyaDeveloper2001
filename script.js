// Your script here.

document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const startButton = document.querySelector(".timer button");
  const countDownDisplay = document.getElementById("countDown");
  const endTimeDisplay = document.getElementById("endTime");
  let countdownInterval;

  function startCountdown() {
    const duration = parseInt(userInput.value);
    if (!isNaN(duration) && duration > 0) {
      const startTime = new Date().getTime();
      const endTime = startTime + duration * 60000; // Convert minutes to milliseconds

      countdownInterval = setInterval(function () {
        const currentTime = new Date().getTime();
        const timeRemaining = endTime - currentTime;

        if (timeRemaining <= 0) {
          clearInterval(countdownInterval);
          countDownDisplay.textContent = "Countdown Ended!";
          endTimeDisplay.textContent = "";
        } else {
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          countDownDisplay.textContent = `Time Remaining: ${minutes}m ${seconds}s`;
          endTimeDisplay.textContent = `End Time: ${new Date(endTime).toLocaleTimeString()}`;
        }
      }, 1000);
    }
  }

  startButton.addEventListener("click", startCountdown);
});

