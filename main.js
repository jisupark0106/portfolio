`use strict`;
const navbar = document.getElementById(`navbar`);
const navbarHeight = navbar.offsetHeight;

//button active
function btnActive(prevSelector, target) {
  prevSelector.classList.remove(`active`);
  target.classList.add(`active`);
}
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
  if (matchMedia("screen and (max-width: 768px)")) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: `smooth`,
    });
  } else {
    window.scrollTo({
      top: section.offsetTop - navbarHeight + 10,
      behavior: `smooth`,
    });
  }
}
//use data-set
const navbarMenu = document.querySelector(`.navbar__menu`);
const contactMe = document.getElementById(`home__contact`);
navbarMenu.addEventListener(`click`, (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) return;
  scrollToSection(link);
  navbarMenu.classList.add(`hide`);
});

// Mobile Navbar toggle Button
const navbarToggleBtn = document.querySelector(`.navbar__toggle-btn`);
navbarToggleBtn.addEventListener(`click`, () => {
  navbarMenu.classList.toggle(`hide`);
});

//Handle Contact me button
contactMe.addEventListener(`click`, () => {
  scrollToSection(`#contact`);
});

// home scroll할때 transparent 설정
const home = document.querySelector(`.home__contents`);
const homeHeight = home.offsetHeight;
document.addEventListener(`scroll`, () => {
  //mobile version
  if (matchMedia("screen and (max-width: 768px)")) {
    home.style.opacity = 1;
  } else {
    if (homeHeight - window.scrollY > 0) {
      home.style.opacity = (homeHeight - window.scrollY) / 604;
    }
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

//Projects
const workBtnContainer = document.querySelector(`.work__categories`);
const projectContainer = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.project`);
workBtnContainer.addEventListener(`click`, (event) => {
  const target = event.target;
  const filter = target.dataset.filter;

  const prevCategoryBtn = document.querySelector(`.category__btn.active`);
  btnActive(prevCategoryBtn, target);

  if (filter == null) return;
  projectContainer.classList.add(`ani-out`);

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter == "*" || project.dataset.filter == filter) {
        project.classList.remove(`invisible`);
      } else {
        project.classList.add(`invisible`);
      }
    });
    projectContainer.classList.remove(`ani-out`);
  }, 300);
});
