// Purpose: To ensure all quotes can be saved to avoid a quote being overwrote
// When the page is loaded, check how many bookmarks are saved and if a new localStorage key has to be created
let count = "";

// Using the oneload event
window.addEventListener("load", (event) => {
  // Setting the value of count if the value dosen't equal null (has to be a positive integer)
  if (localStorage.getItem("bookmarkedQuoteCount") !== null) {
    count = localStorage.getItem("bookmarkedQuoteCount");
  }
  // If the above else statement falls throw a new localStorage key is created with the count amount at 0
  // This would be due to either the user deleted the data from localStorage or the page is loaded on a new device
  else if (
    !localStorage.getItem("bookmarkedQuoteCount") ||
    localStorage.getItem("bookmarkedQuoteCount") == null
  ) {
    localStorage.setItem("bookmarkedQuoteCount", 0);
    count = 0;
  }
});

//const canvas = document.getElementById('pictureBorder');
//const ctx = canvas.getContext('2d');

//const e = 2 * Math.PI / 6;
//const r = 200;

//function init() {
// drawHexagon(r, r);
//}

//init();

//function drawHexagon(x, y) {
// ctx.beginPath();
//for (var i = 0; i < 6; i++) {
//  ctx.strokeStyle = "white";
//  ctx.lineWidth = 5
//   ctx.lineTo(x + r * Math.cos(e * i), y + r * Math.sin(e * i));
//}
// ctx.closePath();
// ctx.stroke();
// ctx.save()
//}

// Select Mood Code:
// Created with the assistance of https://www.w3schools.com/howto/howto_custom_select.asp
let x, i, j, l, ll, selElmnt, a, b, c; // Creating the variables

// Getting the item from the HTML
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

// Quote Generator Code
// Setting the quotes

// Happy Quotes
const quotesHappy = [
  "Be kind, for everyone you meet is fighting a hard battle.",
  "Nothing in the affairs of men is worthy of great anxiety.",
  "There is no harm in repeating a good thing.",
  "Love is composed of a single soul inhabiting two bodies.",
  "Whosoever is delighted in solitude is either a wild beast or a god.",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
  "Be content with what you have; rejoice in the way things are. When you realise there is nothing lacking, the whole world belongs to you.",
  "Happiness lies in the joy of achievement and the thrill of creative effort.",
  "I am easily satisfied with the very best.",
  "When I look back on all these worries, I remember the story of the old man who said on his deathbed that he had had a lot of trouble in his life, most of which had never happened.",
  "Happiness lies not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
  "The only thing we have to fear is fear itself.",
  "A table, a chair, a bowl of fruit, and a violin; what else does a man need to be happy?",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.",
  "A little bit of mercy makes the world less cold and more just.",
  "We all have the duty to do good.",
  "The root of this possibility of doing good - that we all have - is in creation.",
  "I am among those who think that science has great beauty. A scientist in his laboratory is not only a technician: he is also a child placed before natural phenomena which impress him like a fairy tale.",
  "The feeling of being alone and taking care of yourself without any aid does not depress but brings calm and great moral satisfaction.",
  "We must accept finite disappointment but never lose infinite hope.",
  "The time is always right to do what is right.",
  "I have decided to stick with love. Hate is too great a burden to bear.",
  "Think of all the beauty still left around you and be happy.",
  "The best remedy for those who are afraid, lonely, or unhappy is to go outside, somewhere where they can be quite alone with the heavens, nature, and God.",
  "I feel the suffering of millions. And yet, when I look up at the sky, I somehow feel that everything will change for the better.",
  "Despite everything, I believe that people are really good at heart.",
  "As long as this exists, this sunshine and this cloudless sky, and as long as I can enjoy it, how can I be sad?",
  "I want to go on living even after my death! And therefore, I am grateful to God for giving me this gift.",
];

// Angry Quotes
const quotesAngry = [
  { quote: "angryQuote1", image: "./assets/Napoleon PNG.png" },
];

// Content Quotes
const quotesContent = [
  "The only true wisdom is in knowing you know nothing.",
  "contentQuote2",
  "contentQuote3",
  "contentQuote4",
  "contentQuote5",
  "contentQuote6",
];

// Sad Quotes
const quoteSad = [
  "sadQuote1",
  "sadQuote2",
  "sadQuote3",
  "sadQuote4",
  "sadQuote5",
  "sadQuote6",
];

// Inspiring Quotes
const quoteInspiring = [
  "inspiringQuote1",
  "inspiringQuote2",
  "inspiringQuote3",
  "inspiringQuote4",
  "inspiringQuote5",
  "inspiringQuote6",
];

const random = [];
random.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");

const image = document.getElementById("generatorImage");
const button = document.getElementById("generateQuote");
const msg = document.getElementById("message");
let generatedQuote = "";

// Happy
if (sessionStorage.getItem("selectedQuote") == 1) {
  generatedQuote =
    quotesHappy[
      Math.floor(Math.random() * Math.random(random) * quotesHappy.length)
    ];
}

// Angry
if (sessionStorage.getItem("selectedQuote") == 2) {
  generatedQuote =
    quotesAngry[
      Math.floor(Math.random() * Math.random(random) * quotesAngry.length)
    ];
}
// Sad
if (sessionStorage.getItem("selectedQuote") == 3) {
  generatedQuote =
    quoteSad[Math.floor(Math.random() * Math.random(random) * quoteSad.length)];
}

// Content
if (sessionStorage.getItem("selectedQuote") == 4) {
  generatedQuote =
    quotesContent[
      Math.floor(Math.random() * Math.random(random) * quotesContent.length)
    ];
}

// Inspiring
if (sessionStorage.getItem("selectedQuote") == 5) {
  generatedQuote =
    quoteInspiring[
      Math.floor(Math.random() * Math.random(random) * quoteInspiring.length)
    ];
}

if (
  sessionStorage.getItem("selectedQuote") !== 1 ||
  sessionStorage.getItem("selectedQuote") !== 2 ||
  sessionStorage.getItem("selectedQuote") !== 3 ||
  sessionStorage.getItem("selectedQuote") !== 4 ||
  sessionStorage.getItem("selectedQuote") !== 5
) {
  generatedQuote = "An error has occured. Please retry or the page!";
}

function generateQuote() {
  if (msg.textContent == generatedQuote) {
    // Generate a new Quote if it matches the one generated before
    // Happy
    if (sessionStorage.getItem("selectedQuote") == 1) {
      generatedQuote =
        quotesHappy[
          Math.floor(Math.random() * Math.random(random) * quotesHappy.length)
        ];
    }

    // Angry
    if (sessionStorage.getItem("selectedQuote") == 2) {
      generatedQuote =
        quotesAngry[
          Math.floor(Math.random() * Math.random(random) * quotesAngry.length)
        ];
    }
    // Sad
    if (sessionStorage.getItem("selectedQuote") == 3) {
      generatedQuote =
        quoteSad[
          Math.floor(Math.random() * Math.random(random) * quoteSad.length)
        ];
    }

    // Content
    if (sessionStorage.getItem("selectedQuote") == 4) {
      generatedQuote =
        quotesContent[
          Math.floor(Math.random() * Math.random(random) * quotesContent.length)
        ];
    }

    // Inspiring
    if (sessionStorage.getItem("selectedQuote") == 5) {
      generatedQuote =
        quoteInspiring[
          Math.floor(
            Math.random() * Math.random(random) * quoteInspiring.length
          )
        ];
    }
    msg.textContent = image.src = "https://images.immediate.co.uk/production/volatile/sites/7/2019/08/GETTY-464442413-170e212.jpg?quality=90&webp=true&resize=1270,847"
  } else {
    msg.textContent = image.src = "https://images.immediate.co.uk/production/volatile/sites/7/2019/08/GETTY-464442413-170e212.jpg?quality=90&webp=true&resize=1270,847";
  }
}

button.onclick = generateQuote;

// Bookmark Function Code:
const bookmark = document.getElementById("bookmarkQuote");
const canvas = document.createElement("canvas");
canvas.width = bookmark.clientWidth;
canvas.height = bookmark.clientHeight;
bookmark.appendChild(canvas);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(60, 35);
ctx.lineTo(98, 35);
ctx.lineTo(65, 57);
ctx.lineTo(80, 92);
ctx.lineTo(50, 72);
ctx.lineTo(20, 92);
ctx.lineTo(35, 57);
ctx.lineTo(2, 35);
ctx.lineTo(40, 35);
ctx.closePath();

bookmark.addEventListener("click", function () {
  if (!count) {
    alert(
      "It seems the data for this function has been deleted... Please reload the page!"
    );
  } else if (msg.textContent !== generatedQuote) {
    // Checks if a quote has been generated
    alert(
      'You have to generate a quote in order to save it... To generate a quote, select a mood and click the "GENERATE!" button\n\nPlease try again!'
    );
  } else if (
    // Checks if a quote has been generated but a error occured, and the error message was attempted to be saved
    msg.textContent == "An error has occured. Please retry or the page!"
  ) {
    alert(
      "Why would you want to save a error message to your quotes... You can't save this!\n\nPlease try again!"
    );
  } else {
    count++;
    localStorage.setItem("bookmarkedQuoteCount", count); // Adding "1" to the bookmarkedQuoteCount value to ensure quotes don't get overwrote
    localStorage.setItem(generatedQuote, "Quote" + count); // Save Quote if the function is fired, and increase the count by +1
    alert(
      'You have successfully saved this quote!\n\nTo view your saved quotes, visit the "Bookmarks" page!'
    ); // Notify the user that the quote has been saved
  }
});

// Navigation Bar Code
const navigationMenuDiv = document.getElementById("navigationMenuOptions");
const navigationButton = document.getElementById("navigationMenu");

if (!button || !navigationMenuDiv || !navigationButton)
  alert(
    "An error has occured while trying to operate this page. Please reload this site!"
  );

function navBar() {
  if (
    window.getComputedStyle(navigationMenuDiv).backgroundColor ==
    "rgb(1, 37, 122)"
  ) {
    navigationMenuDiv.style.visibility = "visible";
    document.body.style.backgroundColor = "#d9d9d9";
    navigationMenuDiv.style.backgroundColor = "#C2C1C1";
    navigationMenuDiv.style.marginLeft = "5px";
    navigationMenuDiv.style.marginTop = "0px";
    navigationMenuDiv.style.height = "max-content";
  } else {
    location.reload(); // Using navigationMenuDiv.style.visibility = "hidden" would cause a error when you attempt to open the navigation menu again
  }
}

navigationButton.onclick = navBar;

const homeMenu = document.getElementById("navigationButtons_Home");
const generatorMenu = document.getElementById("navigationButtons_Generator");
const bookmarkMenu = document.getElementById("navigationButtons_Bookmarks");
const discoverMenu = document.getElementById("navigationButtons_Discover");

function homePage() {
  window.location.href = "./index.html";
}

homeMenu.onclick = homePage;

function generatorPage() {
  window.location.href = "./P2Generator.html";
}

generatorMenu.onclick = generatorPage;

function bookmarkPage() {
  window.location.href = "./P3Bookmark.html";
}

bookmarkMenu.onclick = bookmarkPage;

function discoverPage() {
  window.location.href = "./P4Discover.html";
}

discoverMenu.onclick = discoverPage;

// This code was created with the assistance of W3Schools, MDN and the softwares: Github and Visual Studio Code
// To view the public link of this site, go to: https://liam11063.github.io/Digital-Assets-Website-Code/index.html
