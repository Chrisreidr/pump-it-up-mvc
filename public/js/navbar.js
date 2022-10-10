const menu = document.querySelector('.toggle');
const navListItems = document.querySelectorAll('.nav-list');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navListItems.forEach((x) => {
        x.classList.toggle('hidden');
        // x.classList.toggle('nav-transform');
    })
})