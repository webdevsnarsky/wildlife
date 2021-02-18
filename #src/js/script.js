@@include('alert.js');

let navContainer = document.querySelector('.navigation');
let arrayNavItems = Array.from(navContainer.querySelectorAll('.navigation__link'));

function clickHandlerNavigation(event) {
    let target = event.target;

    arrayNavItems.forEach(el => el.classList.remove('navigation__link-active'));
    target.classList.add('navigation__link-active');

}

navContainer.addEventListener('click', clickHandlerNavigation);
