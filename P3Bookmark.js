const button = document.getElementById("button");
const text = document.getElementById("text");

let keys = Object.keys(localStorage);
let quotes = [];
for (let i = 0; i < keys.length; i++) {
  let value = localStorage.getItem(keys[i]);
  if (typeof value === "string" && value.startsWith("Quote")) {
    let newKey = keys[i].replace(/"/g, "").replace(/:/g, ""); // remove any double quotes or colons in the key
    quotes.push(newKey);
  }
}

button.addEventListener("click", function () {
  let quotesDisplay = "";
  for (let i = 0; i < quotes.length; i++) {
    quotesDisplay += quotes[i] + "<br>";
  }
  text.innerHTML = quotesDisplay;
})

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