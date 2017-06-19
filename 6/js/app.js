var mainNav = document.querySelector('.main-nav');
var navToggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--open');

navToggle.addEventListener('click', function (event) {
  event.preventDefault();

  if (mainNav.classList.contains('main-nav--open')) {
    mainNav.classList.remove('main-nav--open');

  } else {
    mainNav.classList.add('main-nav--open');
  }
});

var promoOrderBtn = document.querySelector('.promo__order, .catalog-item__cart');
var popup = document.querySelector('.popup');

if(promoOrderBtn) {
  promoOrderBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (popup.classList.contains('hidden')) {
      popup.classList.remove('hidden');

    } else {
      popup.classList.add('hidden');
    }
  });
}
