const pages = document.querySelectorAll('[data-page]');
const navItems = document.querySelectorAll('[data-nav]');

function showRoute() {
  const route = location.hash === '#/blog' ? 'blog' : 'home';
  pages.forEach((page) => { page.hidden = page.dataset.page !== route; });
  navItems.forEach((item) => item.classList.toggle('current-menu-item', item.dataset.nav === route));
  document.body.classList.toggle('blog', route === 'blog');
  document.body.classList.toggle('home', route === 'home');
  window.scrollTo(0, 0);
}

document.querySelectorAll('.static-filter').forEach((filter) => {
  const items = filter.parentElement.querySelectorAll('[data-filter-item]');
  filter.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filter.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    items.forEach((item) => {
      item.hidden = button.dataset.filter !== '*' && !item.classList.contains(button.dataset.filter);
    });
  });
});

window.addEventListener('hashchange', showRoute);
showRoute();
