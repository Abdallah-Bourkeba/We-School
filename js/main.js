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
// Start Contact Us
// document.forms[1].onsubmit = function (e) {
//   e.preventDefault();
// };
// function sendEmail() {
// let fromEmail = document.querySelector(".content [type='email']").value;
// let fromName = document.querySelector(".content [type='text']").value;
// let bodyMail = document.querySelector(".content textarea").value;
// let formSbmit = document.querySelector(".content [type='submit']");

//   console.log(fromName);
//   console.log(fromEmail);
//   console.log(bodyMail);

//   Email.send({
//     // Host: "smtp.yourisp.com",
//     // Username: "abdallah.mohamed.text@gmail.com",
//     // Password: "011aa28aa30aa5666aa",
//     SecureToken: "5db3e776-2273-4409-8325-dc10b5ba357d",
//     To: "abdallah.mohamed.text@gmail.com",
//     From: "01128305666v@gmail.com",
//     Subject: "This is the subject",
//     Body: bodyMail,
//   }).then(function () {
//     alert("E-mail Sennt Succesfally");
//   });
// }
// formSbmit.addEventListener("click", () => {
//   Email.send({
//     SecureToken : "0ce12054-6da3-4715-a152-021d5c481518",
//     To: "abdallah.mohamed.text@gmail.com",
//     From: "01128305666v@gmail.com",
//   }).then((msg) => console.log("Done"));
// });
// End Contact Us
// Start Scroll To Top
let float = document.querySelector("body > .float");
window.onscroll = function () {
  if (window.scrollY >= 500) {
    float.style.cssText = "transform: scale(1);";
  } else {
    float.style.cssText = "transform: scale(0);";
  }
};
float.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End Scroll To Top
