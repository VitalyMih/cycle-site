//Реализация бургер-меню
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
})

//Реализация класса ibg
function ibg() {
    const ibg = document.querySelectorAll('.ibg');
    ibg.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            item.style.backgroundImage = `url("${img.getAttribute('src')}")`
        }
    })
}
ibg();

