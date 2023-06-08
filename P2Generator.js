// Fetching the variables
// Created with the assistance of https://www.w3schools.com/howto/howto_custom_select.asp
let x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    // Event listener for the "click" event
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          sessionStorage.setItem("selectedQuote", s.options[i].value); // Store the Selected Quote Mood
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });

    b.appendChild(c);
  }
  // Toggle the Arrow when the "click" event is triggered by a selection
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

// Closing all the selected boxes except for the clicked one
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

const random = [];
const quotesHappy = [
  "happyQuote1",
  "happyQuote2",
  "happyQuote3",
  "happyQuote4",
  "happyQuote5",
  "happyQuote6",
];
const quotesAngry = [
  "angryQuote1",
  "angryQuote2",
  "angryQuote3",
  "angryQuote4",
  "angryQuote5",
  "angryQuote6",
];
const quotesContent = [
  "contentQuote1",
  "contentQuote2",
  "contentQuote3",
  "contentQuote4",
  "contentQuote5",
  "contentQuote6",
];
const quoteSad = [
  "sadQuote1",
  "sadQuote2",
  "sadQuote3",
  "sadQuote4",
  "sadQuote5",
  "sadQuote6",
];
const quoteInspiring = [
  "inspiringQuote1",
  "inspiringQuote2",
  "inspiringQuote3",
  "inspiringQuote4",
  "inspiringQuote5",
  "inspiringQuote6",
];

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
let generatedQuote = "";

// Happy
if (sessionStorage.getItem("selectedQuote") == 1) {
  generatedQuote =
    quotesHappy[
      Math.floor(Math.random() * Math.random(random) * quotes.length)
    ];
}

// Angry
if (sessionStorage.getItem("selectedQuote") == 2) {
  generatedQuote =
    quotesAngry[
      Math.floor(Math.random() * Math.random(random) * quotes.length)
    ];
}
// Sad
if (sessionStorage.getItem("selectedQuote") == 3) {
  generatedQuote =
    quoteSad[Math.floor(Math.random() * Math.random(random) * quotes.length)];
}

// Content
if (sessionStorage.getItem("selectedQuote") == 4) {
  generatedQuote =
    quotesContent[
      Math.floor(Math.random() * Math.random(random) * quotes.length)
    ];
}

// Inspiring
if (sessionStorage.getItem("selectedQuote") == 5) {
  generatedQuote =
    quoteInspiring[
      Math.floor(Math.random() * Math.random(random) * quotes.length)
    ];
}

if (
  sessionStorage.getItem("selectedQuote") !== 1 ||
  sessionStorage.getItem("selectedQuote") !== 2 ||
  sessionStorage.getItem("selectedQuote") !== 3 ||
  sessionStorage.getItem("selectedQuote") !== 4 ||
  sessionStorage.getItem("selectedQuote") !== 5
) {
  generatedQuote = "An error has occured. Please reload the page!";
}

function onclick() {
  if (msg.textContent == generatedQuote) {
    // Happy
    if (sessionStorage.getItem("selectedQuote") == 1) {
      generatedQuote =
        quotesHappy[
          Math.floor(Math.random() * Math.random(random) * quotes.length)
        ];
    }

    // Angry
    if (sessionStorage.getItem("selectedQuote") == 2) {
      generatedQuote =
        quotesAngry[
          Math.floor(Math.random() * Math.random(random) * quotes.length)
        ];
    }
    // Sad
    if (sessionStorage.getItem("selectedQuote") == 3) {
      generatedQuote =
        quoteSad[
          Math.floor(Math.random() * Math.random(random) * quotes.length)
        ];
    }

    // Content
    if (sessionStorage.getItem("selectedQuote") == 4) {
      generatedQuote =
        quotesContent[
          Math.floor(Math.random() * Math.random(random) * quotes.length)
        ];
    }

    // Inspiring
    if (sessionStorage.getItem("selectedQuote") == 5) {
      generatedQuote =
        quoteInspiring[
          Math.floor(Math.random() * Math.random(random) * quotes.length)
        ];
    }
    msg.textContent = generatedQuote;
  } else {
    msg.textContent = generatedQuote;
  }
}

button.onclick = onclick;
