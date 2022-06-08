var navMain = document.querySelector('.main-nav');
var header = document.querySelector('.main-header');
var navToggle = document.querySelector('.main-header__toggle');

header.classList.remove('main-header--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const mainHeader = document.querySelector('.main-header__top');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('main-header__toggle--active');
  mainHeader.classList.toggle('main-header__top--active');
})
