// select dom node
let buttons = document.querySelectorAll("button");
let react = document.getElementById("react");
let angular = document.getElementById("angular");
let django = document.getElementById("django");
let laravel = document.getElementById("laravel");

// functions

function showReact() {
  react.classList.add("show");
  angular.classList.remove("show");
  django.classList.remove("show");
  laravel.classList.remove("show");
}
function showAngular() {
  react.classList.remove("show");
  angular.classList.add("show");
  django.classList.remove("show");
  laravel.classList.remove("show");
}
function showDjango() {
  react.classList.remove("show");
  angular.classList.remove("show");
  django.classList.add("show");
  laravel.classList.remove("show");
}

function showLaravel() {
  react.classList.remove("show");
  angular.classList.remove("show");
  django.classList.remove("show");
  laravel.classList.add("show");
}

// event
for (const button of buttons) {
  if (button.textContent === "react") {
    button.addEventListener("click", showReact);
  }
  if (button.textContent === "angular") {
    button.addEventListener("click", showAngular);
  }

  if (button.textContent === "django") {
    button.addEventListener("click", showDjango);
  }

  if (button.textContent === "laravel") {
    button.addEventListener("click", showLaravel);
  }
}
