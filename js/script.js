const mobileNavOpenBtn = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('#body')

mobileNavOpenBtn.addEventListener('click', function () {
  mobileNavOpenBtn.classList.toggle('active');
  mobileNav.classList.toggle('mobile-nav--open');
  body.classList.toggle('lock');
});



// mobileNavOpenBtn.onclick = function () {
//   mobileNav.classList.add('mobile-nav__wrapper--open')
// };

// mobileNavCloseBtn.onclick = function () {
//   mobileNav.classList.remove('mobile-nav__wrapper--open')
// };