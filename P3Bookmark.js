const text = document.getElementById("text");

// Using onload event, to automatically load the users saved quotes
window.addEventListener("load", (event) => {
  let keys = Object.keys(localStorage);
  let quotes = []; // Set a empty array

  // Loop through all localStorage keys, searching for ones that fuffil the requirements of, string and starting with "Quote"
  for (let i = 0; i < keys.length; i++) {
    let value = localStorage.getItem(keys[i]);
    if (typeof value === "string" && value.startsWith("Quote")) {
      let newKey = keys[i].replace(/"/g, "").replace(/:/g, "");
      quotes.push(newKey); // Push results to the array
    }
  }

  // Notify the user that they haven't saved any quotes, therefore resulting in a length of 0
  if (quotes.length === 0) {
    let quoteDiv = document.createElement("div");
    quoteDiv.setAttribute("class", "no-quotes-found");
    quoteDiv.innerHTML = "No quotes were found.";
    text.appendChild(quoteDiv);
  } else {
    for (let i = 0; i < quotes.length; i++) {
      let quoteText = localStorage.getItem(`"${quotes[i]}"`);
      if (quoteText === null) {
        quoteText = "";
      }

      // Present the quotes to the user
      let quoteDiv = document.createElement("div");
      quoteDiv.setAttribute("data-quote-key", quotes[i]);
      quoteDiv.style.lineHeight = "200%";
      quoteDiv.innerHTML = quotes[i] + quoteText;

      // Button to remove quotes from there localStorage
      let bookmarkButton = document.createElement("button");
      bookmarkButton.setAttribute("class", "bookmark-button");
      bookmarkButton.style.width = "100px";
      bookmarkButton.style.height = "20px";
      bookmarkButton.style.border = "none";
      bookmarkButton.style.background = "#c1005a";
      bookmarkButton.style.fontFamily = "Josefin Sans";
      bookmarkButton.style.color = "white";
      bookmarkButton.style.padding = "3px";
      bookmarkButton.style.marginLeft = "5px";
      bookmarkButton.innerHTML = "Remove Quote...";

      // Onclick Event for the above button
      bookmarkButton.addEventListener("click", function () {
        let keyToRemove = this.parentNode.getAttribute("data-quote-key");
        localStorage.removeItem(keyToRemove);
        this.parentNode.remove();

        // Notify the user the operation was successful
        alert(
          `You have successfully removed the quote:\n\n"${keyToRemove}"\n\nTo generate another quote, visit our "Generator" page!`
        );
      });

      // Update the site
      quoteDiv.appendChild(bookmarkButton);
      text.appendChild(quoteDiv);
    }
  }
});

// Search Function Code
// Only providing a selection of quotes, to provide context and a example
let data = [
  {
    name: "The only true wisdom is in knowing you know nothing.",
    keywords: ["wisdom", "knowing", "true"],
  },
  {
    name: "Be kind, for everyone you meet is fighting a hard battle.",
    keywords: ["fighting", "battle", "everyone"],
  },
  {
    name: "To find yourself, think for yourself.",
    keywords: ["yourself", "think", "find"],
  },
  {
    name: "Education is the kindling of a flame, not the filling of a vessel.",
    keywords: ["education", "kindling", "not"],
  },
  {
    name: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.",
    keywords: ["break", "walls", "people"],
  },
  {
    name: "Death may be the greatest of all human blessings.",
    keywords: ["human", "blessings", "death"],
  },
  {
    name: "I am not an Athenian or a Greek, but a citizen of the world.",
    keywords: ["citizen"],
  },
  {
    name: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    keywords: ["forgive", "tragedy"],
  },
  {
    name: "The hottest love has the coldest end.",
    keywords: ["coldest", "love"],
  },
  { name: "Envy is the ulcer of the soul.", keywords: ["envy", "sould"] },
  {
    name: "Love is a serious mental disease.",
    keywords: ["love", "mental", "disease"],
  },
];

// Get the items from HTML
let input = document.getElementById("bookmarkSearch");
let list = document.getElementById("bookmarkSearchList");
let message = document.getElementById("bookmarkSearchMessage");

input.addEventListener("input", function () {
  let value = input.value.toLowerCase().trim();
  // Check if the value has a length
  if (value === "") {
    list.innerHTML = "";
    message.innerText = "";
    return;
  }

  // Filter the Input Value
  let filteredData = data.filter((item) => {
    return item.keywords.some((keyword) => {
      return keyword.toLowerCase().includes(value);
    });
  });
  renderList(filteredData);
});

// Update the search results based on the keyword inputted
function renderList(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.name}`;
    list.appendChild(li);
  });

  // Statement to notify the user of wether or not data was found
  if (data.length === 0) {
    message.innerText = "No results found.";
  } else {
    message.innerText = "";
  }
}

// Navigation Bar Code
const navigationMenuDiv = document.getElementById("navigationMenuOptions");
const navigationButton = document.getElementById("navigationMenu");

// Check for missing elements in the code
if (!navigationMenuDiv || !navigationButton)
  alert(
    "An error has occured while trying to operate this page. Please reload this site!"
  );

  // Making the bar visible
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

// Button Elements in the Nav Bar
const homeMenu = document.getElementById("navigationButtons_Home");
const generatorMenu = document.getElementById("navigationButtons_Generator");
const bookmarkMenu = document.getElementById("navigationButtons_Bookmarks");
const discoverMenu = document.getElementById("navigationButtons_Discover");

// Relocating the user based on the page selection
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
// To view the public link of this site, go to: https://liam11063.github.io/Digital-Assets-Website-Code/P2Generator.html, or https://liam11063.github.io/Digital-Assets-Website-Code/P3Bookmark.html

