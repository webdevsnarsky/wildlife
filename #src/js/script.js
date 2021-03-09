// @@include('alert.js');

let navContainer = document.querySelector('.navigation');
let arrayNavItems = Array.from(navContainer.querySelectorAll('.navigation__link'));
let slider = document.querySelector('.slider-wrap');
let slide = slider.querySelectorAll('.slide');
let count = 0;
let width;
let gap;

function clickHandlerNavigation(event) {
    let target = event.target;

    arrayNavItems.forEach(el => el.classList.remove('navigation__link-active'));
    target.classList.add('navigation__link-active');
}

function initFunc() {
    width = document.querySelector('.slider-wrapper').offsetWidth;
    let countSlides;
    let widthOfColumn;

    if (width >= 1020) {
        gap = 60;
    } else if (width <= 547.2) {
        gap = 0;
    } else {
        gap = 30;
    }

    if (width > 725) {
        countSlides = 3;
        widthOfColumn = 100 - ((100 * (gap * 2)) / width);  
    } else if (width <= 725 && width >= 560) {
        countSlides = 2;
        widthOfColumn = 100 - ((100 * gap) / width);  
    } else {
        countSlides = 1;
        widthOfColumn = 100 - ((100 * gap) / width);  
    }

    slider.style.gridColumnGap = gap +'px';
    slider.style.gridTemplateColumns = `repeat(6, ${widthOfColumn / countSlides}%)`;

    rollSlider();
}

function rollSlider() {
    slider.querySelectorAll('.slide')[0].offsetWidth;
    slider.style.transform = 'translate(-'+ count * (slider.querySelectorAll('.slide')[0].offsetWidth + gap)  + 'px)';
}


document.querySelector('.left').addEventListener('click', () => {
    count--;

    if (count < 0) {
        count = slide.length - 3;
    }
    rollSlider();
});


document.querySelector('.right').addEventListener('click', () => {
    count++;

    if (count >= slide.length - 2) {
        count = 0;
    }
    rollSlider();
});
navContainer.addEventListener('click', clickHandlerNavigation);

window.addEventListener('resize', initFunc);
initFunc();


