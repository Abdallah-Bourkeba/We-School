// Start Header
let menuBar = document.querySelector("header nav ul");
let menuBarLies = document.querySelectorAll("header nav ul a");
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.addEventListener("click", function (evt) {
      var flyoutElement = document.querySelector("header nav"),
        targetElement = evt.target; // clicked element
      do {
        if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          menuBar.className = "ul-showen";
          for (let i = 0; i < 5; i++) {
            menuBarLies[i].className = "li-showen";
          }
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
      // This is a click outside.
      menuBar.className = "";
      for (let i = 0; i < 5; i++) {
        menuBarLies[i].className = "";
      }
    });
  } else {
    menuBar.className = "";
    for (let i = 0; i < 5; i++) {
      menuBarLies[i].className = "";
    }
  }
}
var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
// End Header
// Start Services
let weSocial = document.querySelector(".landing .social");
function myFunction1(y) {
  if (y.matches) {
    // If media query matches
    document.addEventListener("click", function (evt1) {
      var flyoutElement = document.querySelector(".landing .social-popup"),
        targetElement = evt1.target; // clicked element
      do {
        if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          weSocial.className = "social social-showned";
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
      // This is a click outside.
      weSocial.className = "social";
    });
  }
}
var y = window.matchMedia("(max-width: 768px)");
myFunction1(y); // Call listener function at run time
y.addListener(myFunction1); // Attach listener function on state changes
// End Services
// Start Subscribe
let inputValue = document.querySelector("input[name='subscribe']");
document.forms[0].addEventListener("submit", mainFunc);

function mainFunc(e) {
  inputValue.textContent = e.target.value;
  console.log(inputValue.value.toString());
  if (inputValue != "") {
    window.open(
      "mailto:" +
        "abdallah.mohamed.text@gmail.com" +
        "?subject=Subscribe To Our Journey&body=You Will Subscribe With E-mail:  " +
        inputValue.value
    );
  }
}

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
};
// End Subscribe
// Start Scroll To Top
let float = document.querySelector("body > .float");
window.onscroll = function () {
  if (window.scrollY >= 500) {
    float.style.cssText = "display: block;";
  } else {
    float.style.cssText = "display: none;";
  }
};
float.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End Scroll To Top
