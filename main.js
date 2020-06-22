`use strict`;
const navbar = document.getElementById(`navbar`);
const navbarHeight = navbar.offsetHeight;

// navbar top일 때 bgcolor = transparent
document.addEventListener(`scroll`, function () {
  if (window.scrollY < navbarHeight) {
    navbar.classList.remove(`scroll--white`);
  } else {
    navbar.classList.add(`scroll--white`);
  }
});
