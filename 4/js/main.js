var mainNav = document.querySelector('.main-nav');
var navToggle = mainNav.querySelector('.main-nav__toggle');
var menuList = mainNav.querySelector('.main-nav__list');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function (event) {
  event.preventDefault();

  if (mainNav.classList.contains('main-nav--open')) {
    mainNav.classList.remove('main-nav--open');
    console.log('fff');

  } else {
    mainNav.classList.add('main-nav--open');
    console.log('2222fff')
  }
});
