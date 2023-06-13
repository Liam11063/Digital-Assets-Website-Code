const text = document.getElementById('text');

window.addEventListener('load', (event) => {
  let keys = Object.keys(localStorage);
  let quotes = [];

  for (let i = 0; i < keys.length; i++) {
    let value = localStorage.getItem(keys[i]);
    if (typeof value === 'string' && value.startsWith('Quote')) {
      let newKey = keys[i].replace(/"/g, '').replace(/:/g, '');
      quotes.push(newKey);
    }
  }

  if (quotes.length === 0) {
    let quoteDiv = document.createElement('div');
    quoteDiv.setAttribute('class', 'no-quotes-found');
    quoteDiv.innerHTML = 'No quotes were found.';
    text.appendChild(quoteDiv);
  } else {
    for (let i = 0; i < quotes.length; i++) {
      let quoteText = localStorage.getItem(`"${quotes[i]}"`);
      if (quoteText === null) {
        quoteText = '';
      }
      let quoteDiv = document.createElement('div');
      quoteDiv.setAttribute('data-quote-key', quotes[i]);
      quoteDiv.style.lineHeight = "200%"
      quoteDiv.innerHTML = quotes[i] + quoteText;

      let bookmarkButton = document.createElement('button');
      bookmarkButton.setAttribute('class', 'bookmark-button');
      bookmarkButton.style.width = '100px';
      bookmarkButton.style.height = '20px';
      bookmarkButton.style.border = 'none';
      bookmarkButton.style.background = '#c1005a';
      bookmarkButton.style.fontFamily = "Josefin Sans"
      bookmarkButton.style.color = 'white';
      bookmarkButton.style.padding = "3px"
      bookmarkButton.style.marginLeft = "5px"
      bookmarkButton.innerHTML = 'Remove Quote...';
      bookmarkButton.addEventListener('click', function () {
        let keyToRemove = this.parentNode.getAttribute('data-quote-key');
        localStorage.removeItem(keyToRemove);
        this.parentNode.remove();
        alert(`You have successfully removed the quote:\n\n"${keyToRemove}"\n\nTo generate another quote, visit our "Generator" page!`)
      });
      quoteDiv.appendChild(bookmarkButton);
      text.appendChild(quoteDiv);
    }
  }
});

// Search Function Code
let data = [
  { name: "Apple", keywords: ["fruit", "red", "sweet"] },
  { name: "Banana", keywords: ["fruit", "yellow", "sweet"] },
  { name: "Carrot", keywords: ["vegetable", "orange", "crunchy"] },
  { name: "Dragonfruit", keywords: ["fruit", "pink", "exotic"] },
  { name: "Eggplant", keywords: ["vegetable", "purple", "spongy"] },
  { name: "Fig", keywords: ["fruit", "purple", "seedy"] },
  { name: "Grape", keywords: ["fruit", "purple", "juicy"] },
  { name: "Hazelnut", keywords: ["nut", "brown", "crunchy"] },
  {
    name: "Iceberg Lettuce",
    keywords: ["vegetable", "green", "crunchy"],
  },
  { name: "Jalapeno", keywords: ["vegetable", "green", "spicy"] },
  { name: "Sam :)", keywords: ["sam"] },
];

let input = document.getElementById("bookmarkSearch");
let list = document.getElementById("bookmarkSearchList");
let message = document.getElementById("bookmarkSearchMessage");

input.addEventListener("input", function () {
  let value = input.value.toLowerCase().trim();
  if (value === "") {
    list.innerHTML = "";
    message.innerText = "";
    return;
  }
  let filteredData = data.filter((item) => {
    return item.keywords.some((keyword) => {
      return keyword.toLowerCase().includes(value);
    });
  });
  renderList(filteredData);
});

function renderList(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.name}`;
    list.appendChild(li);
  });

  if (data.length === 0) {
    message.innerText = "No results found.";
  } else {
    message.innerText = "";
  }
}

// Navigation Bar Code
const navigationMenuDiv = document.getElementById("navigationMenuOptions");
const navigationButton = document.getElementById("navigationMenu");

if (!navigationMenuDiv || !navigationButton)
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
