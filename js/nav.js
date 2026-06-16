const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('menu-open');
    }
  });
}
