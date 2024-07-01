// Меню бургер
const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.nav');
const links = document.querySelectorAll('.menu_link');

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