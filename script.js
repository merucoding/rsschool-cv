// Меню бургер
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__menu-link');

if (burger) {
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

if (links.length > 0) {
  links.forEach(link => {
    link.addEventListener('click', function () {
      if (burger.classList.contains('active')) {
        document.body.classList.remove('lock');
        burger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  })
}