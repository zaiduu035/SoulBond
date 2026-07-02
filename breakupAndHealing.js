document.getElementById('footerYear').textContent = new Date().getFullYear();

const menuToggleBtn = document.getElementById('menuToggleBtn');
const primaryMenu = document.getElementById('primary-menu');
if (menuToggleBtn && primaryMenu) {
    menuToggleBtn.addEventListener('click', () => {
        const isOpen = primaryMenu.classList.toggle('open');
        menuToggleBtn.setAttribute('aria-expanded', isOpen);
        menuToggleBtn.querySelector('.icon-open').style.display = isOpen ? 'none' : '';
        menuToggleBtn.querySelector('.icon-close').style.display = isOpen ? '' : 'none';
    });
}

const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
if (searchToggleBtn && searchBar) {
    searchToggleBtn.addEventListener('click', e => {
        e.preventDefault();
        const isVisible = searchBar.style.display !== 'none';
        searchBar.style.display = isVisible ? 'none' : 'block';
        searchBar.setAttribute('aria-hidden', isVisible);
        searchToggleBtn.setAttribute('aria-expanded', !isVisible);
        const openSvg = searchToggleBtn.querySelector('.icon-search-open');
        const closeSvg = searchToggleBtn.querySelector('.icon-search-close');
        if (openSvg) openSvg.style.display = isVisible ? '' : 'none';
        if (closeSvg) closeSvg.style.display = isVisible ? 'none' : '';
        if (!isVisible && searchInput) searchInput.focus();
    });
}

const nav = document.getElementById('site-navigation');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });