const toggle   = document.querySelector('.menu-toggle');
const menu     = document.querySelector('#menu');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !open);
  menu.classList.toggle('menu--aberto');
});