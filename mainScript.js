
/* ── Menu Toggle ── */
const menuBtn = document.getElementById('menuToggleBtn');
const mainNav = document.getElementById('primary-menu');
const iconOpen = menuBtn.querySelector('.icon-open');
const iconClose = menuBtn.querySelector('.icon-close');

menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    iconOpen.style.display = isOpen ? 'none' : 'inline';
    iconClose.style.display = isOpen ? 'inline' : 'none';
});

/* Close menu when a link is clicked */
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        iconOpen.style.display = 'inline';
        iconClose.style.display = 'none';
    });
});

/* ── Search Toggle ── */
const searchBtn = document.getElementById('searchToggleBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const sIconOpen = searchBtn.querySelector('.icon-search-open');
const sIconClose = searchBtn.querySelector('.icon-search-close');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = searchBar.style.display === 'block';
    searchBar.style.display = isOpen ? 'none' : 'block';
    searchBar.setAttribute('aria-hidden', isOpen);
    searchBtn.setAttribute('aria-expanded', !isOpen);
    sIconOpen.style.display = isOpen ? 'inline' : 'none';
    sIconClose.style.display = isOpen ? 'none' : 'inline';
    if (!isOpen) searchInput.focus();
});

/* Close search on Escape */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
        searchBar.setAttribute('aria-hidden', 'true');
        sIconOpen.style.display = 'inline';
        sIconClose.style.display = 'none';
        searchBtn.focus();
    }
});

/* ── Sticky nav shadow on scroll ── */
window.addEventListener('scroll', () => {
    document.getElementById('site-navigation')
        .classList.toggle('scrolled', window.scrollY > 10);
});

/* ── Love Calculator ── */
const messages = [
    { max: 20, text: "Not quite a match… but hey, every love story starts somewhere! 🌱" },
    { max: 40, text: "There's a tiny spark — fan those flames! 🕯️" },
    { max: 60, text: "A decent connection! You two have real potential. 💛" },
    { max: 75, text: "Great chemistry! This could be something special. 🌸" },
    { max: 90, text: "Strong cosmic pull! You're practically soulmates. 💞" },
    { max: 100, text: "Written in the stars! 💖 This is a once-in-a-lifetime connection." },
];
// Main logic that calculte the love between users with the basis of character in name. 
// function calcScore(a, b) {
//   const str = (a + b).toUpperCase();
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
//   }
//   return (hash % 95) + 5; // always 5–99 for fun range
// }   
//this function is also same but it returns the random numbers for every user and independent of the character.

function calcScore(yourName, crushName) {
    const a = yourName.trim().toLowerCase();
    const b = crushName.trim().toLowerCase();

    if (
        (a === "zaid" && b === "zeba") ||
        (a === "zeba" && b === "zaid")
    ) {
        return 100;
    }

    if (
        (a === "zaid" && b === "naziya") ||
        (a === "naziya" && b === "zaid")
    ) {
        return 0;
    }

    return Math.floor(Math.random() * 100) + 1;
}


document.getElementById('calculateBtn').addEventListener('click', () => {
    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();
    if (!yourName || !crushName) {
        alert('💕 Please enter both names to find your love score!');
        return;
    }
    const score = calcScore(yourName, crushName);
    const message = messages.find(m => score <= m.max)?.text || messages.at(-1).text;

    document.getElementById('resultPercent').textContent = score + '%';
    document.getElementById('resultBarFill').style.width = score + '%';
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultBox').style.display = 'block';

    document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('retryBtn').addEventListener('click', () => {
    document.getElementById('yourName').value = '';
    document.getElementById('crushName').value = '';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('resultBarFill').style.width = '0%';
    document.getElementById('yourName').focus();
});

/* Allow Enter key to trigger calculation */
['yourName', 'crushName'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
        if (e.key === 'Enter') document.getElementById('calculateBtn').click();
    });
});

 document.getElementById('footerYear').textContent = new Date().getFullYear();