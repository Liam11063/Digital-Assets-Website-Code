const random = [];
const moods = [];
const quotesHappy = [];
const quotesAngry = [];
const quotesContent = [];
const quoteSad = [];
const quoteInspiring = [];

const quotes = [];

quotes.push(
  "quote 1",
  "quote 2",
  "quote 3",
  "quote 4",
  "quote 5",
  "quote 6",
  "quote 7",
  "quote 8",
  "quote 9",
  "quote 10"
);

random.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");

const button = document.getElementById("generateQuote");
const msg = document.getElementById("message");
const generatedQuote =
  quotes[Math.floor(Math.random() * Math.random(random) * quotes.length)];

function inputAction() {
  msg.textContent = "generating quote...";
}

function onclick() {
  if (msg.textContent == generatedQuote) {
    msg.textContent =
      quotes[Math.floor(Math.random() * Math.random(random) * quotes.length)];
  } else {
    msg.textContent = generatedQuote;
  }
}

button.onclick = onclick;
