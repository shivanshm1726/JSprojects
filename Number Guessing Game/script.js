const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

// ✅ This should appear on the page when opened in browser
document.body.insertAdjacentHTML("beforeend", `<p>Answer: ${answer}</p>`);

let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess the number between ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess > max || guess < min) {
    window.alert("Please enter a valid number");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    } else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts.`);
      running = false;
    }
  }
}
const myLabel = document.getElementById("myLabel");
myLabel.textContent = `Attempts: ${attempt}`;
