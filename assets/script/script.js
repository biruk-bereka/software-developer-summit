const menuBar = document.querySelector('.mobile-header');
const closeBar = document.getElementById('close-menu');
const header = document.querySelector('.header');
const topNav = document.querySelector('.top-nav');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

function openMenu() {
  menuBar.classList.toggle('invisible');
  header.classList.toggle('visible');
  topNav.classList.toggle('invisible');
  mainNav.classList.toggle('align-items');
  navLinks.classList.toggle('align-items');
  links.classList.toggle('align-items');
}

function closeMenu() {
  header.classList.toggle('visible');
  menuBar.classList.toggle('invisible');
  closeBar.classList.toggle('invisible');
  topNav.classList.toggle('invisible');
  mainNav.classList.toggle('align-items');
  navLinks.classList.toggle('align-items');
  links.classList.toggle('align-items');
}

menuBar.addEventListener('click', openMenu);
closeBar.addEventListener('click', closeMenu);