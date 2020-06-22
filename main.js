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

//use data-set
const navbarMenu = document.querySelector(`.navbar__menu`);
const contactMe = document.getElementById(`home__contact`);
navbarMenu.addEventListener(`click`, (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) return;
  const section = document.querySelector(link);
  window.scrollTo({
    top: section.offsetTop - navbarHeight + 10,
    behavior: `smooth`,
  });
});

//Handle Contact me button
contactMe.addEventListener(`click`, () => {
  const contact = document.querySelector(`#contact`);
  window.scrollTo({
    top: contact.offsetTop - navbarHeight + 10,
    behavior: `smooth`,
  });
});
