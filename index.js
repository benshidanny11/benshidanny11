// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

var options = {
  strings: [
    "",
    "A full-stack developer with 4+ years of experience",
    "Want to build amasing projects?",
    "Don't hesitate to contact me",
    "I am available at anytime and looking for remote opportunities",
  ],
  typeSpeed: 100,
};

new Typed(".text-primary", options);

function checkPosition() {


  const windowHeight = window.innerHeight;
  const elementsLeft = document.getElementsByClassName("direction-l");
  for (let i = 0; i < elementsLeft.length; i++) {
    var positionFromTop = elementsLeft[i].getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0) {
      elementsLeft[i].classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (positionFromTop - windowHeight > 0) {
      elementsLeft[i].classList.remove(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  }

  const elementsRight = document.getElementsByClassName("direction-r");
  for (let i = 0; i < elementsRight.length; i++) {
    var positionFromTop = elementsRight[i].getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0) {
      elementsRight[i].classList.add(
        "animate__animated",
        "animate__fadeInRight"
      );
    }
    if (positionFromTop - windowHeight > 0) {
      elementsRight[i].classList.remove(
        "animate__animated",
        "animate__fadeInRight"
      );
    }
  }

  const sectionsElements = document.getElementsByClassName("anim-section");
  for (let i = 0; i < sectionsElements.length; i++) {
    var positionFromTop = sectionsElements[i].getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0) {
      sectionsElements[i].classList.add("animate__animated", "animate__zoomIn");
    }
    if (positionFromTop - windowHeight > 0) {
      sectionsElements[i].classList.remove("animated", "animate__zoomIn");
    }
  }
}

[...document.getElementsByClassName("fa-brands")].forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    element.classList.add("animate__animated", "animate__rotateIn");
    setTimeout(() => {
      element.classList.remove("animate__animated", "animate__rotateIn");
    }, 200);
  });
});

[...document.getElementsByClassName('projects__card')].forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    element.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => {
      element.classList.remove("animate__animated", "animate__pulse");
    }, 200);
  });
});

window.addEventListener("scroll", checkPosition);

checkPosition();
