const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-nav');


btnMenu.addEventListener('click', () => {
    const isMenuVisible = body.classList.toggle('show'); 
    body.classList.add('animating'); 
    nav.classList.toggle('activated', isMenuVisible); 
});


const mql = window.matchMedia('(min-width: 50em)');
mql.addEventListener('change', (e) => {
    if (e.matches) {
        body.classList.remove('show', 'animating'); 
        nav.classList.remove('activated'); 
    }
});


nav.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform' && !body.classList.contains('show')) {
        body.classList.remove('animating');
    }
});
