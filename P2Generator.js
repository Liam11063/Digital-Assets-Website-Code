const quotes = [];
const random = [];

quotes.push("quote 1", "quote 2", "quote 3", "quote 4", "quote 5");
random.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");

const button = document.getElementById("generate");
const msg = document.getElementById("message");
const generatedQuote =
  quotes[Math.floor(Math.random() * Math.random(random) * quotes.length)];

function inputAction() {
  msg.textContent = "generating quote...";
}

function onclick() {
    msg.textContent = generatedQuote
}

button.onclick = onclick
