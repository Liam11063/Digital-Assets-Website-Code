// Javascript code for index.html file (Home Page)

const button = document.getElementById("pageLinkTwo");
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
    location.reload() // Using navigationMenuDiv.style.visibility = "hidden" would cause a error when you attempt to open the navigation menu again
  }
}

navigationButton.onclick = navBar;

function generateQuote() {
  window.location.href = "./P2Generator.html";
}

button.onclick = generateQuote;

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
