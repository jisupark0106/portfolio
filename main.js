`use strict`;
const navbar = document.getElementById(`navbar`);
const navbarHeight = navbar.offsetHeight;

// navbar top일 때 bgcolor = transparent
document.addEventListener(`scroll`, () => {
  if (window.scrollY < navbarHeight) {
    navbar.classList.remove(`scroll--white`);
  } else {
    navbar.classList.add(`scroll--white`);
  }
});

// navbar menu -- section 이동

//scroll section function
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  window.scrollTo({
    top: section.offsetTop - navbarHeight + 10,
    behavior: `smooth`,
  });
}
//use data-set
const navbarMenu = document.querySelector(`.navbar__menu`);
const contactMe = document.getElementById(`home__contact`);
navbarMenu.addEventListener(`click`, (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) return;
  scrollToSection(link);
});

//Handle Contact me button
contactMe.addEventListener(`click`, () => {
  scrollToSection(`#contact`);
});

// home scroll할때 transparent 설정
const home = document.querySelector(`.home__contents`);
const homeHeight = home.offsetHeight;
document.addEventListener(`scroll`, () => {
  if (homeHeight - window.scrollY > 0) {
    home.style.opacity = (homeHeight - window.scrollY) / 604;
  }
});

// arrow button
const arrowBtn = document.querySelector(`.arrow__up`);
document.addEventListener(`scroll`, () => {
  if (window.scrollY > 600) {
    arrowBtn.classList.add(`show`);
  } else {
    arrowBtn.classList.remove(`show`);
  }
});
arrowBtn.addEventListener(`click`, () => {
  scrollToSection(`#home`);
});
