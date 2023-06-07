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

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 0; j < ll; j++) {
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
 
    // Add event listener to each option
    c.addEventListener('click', function(e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          alert(s.options[i].value); // get the value of the selected option // options go from 1-5
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
 
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}
 
// Close all select boxes except the current one
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}
