// @@include('alert.js');

let navContainer = document.querySelector('.navigation');
let arrayNavItems = Array.from(navContainer.querySelectorAll('.navigation__link'));
let slider = document.querySelector('.slider-wrap');
let slide = slider.querySelectorAll('.slide');
let browserWidth = document.documentElement.clientWidth;
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

    if (count < 0 && browserWidth >= 959) {
        count = slide.length - 3;
    } else if (count < 0 && (browserWidth <= 958 && browserWidth >= 769)) {
        count = slide.length - 2;
    } else if (count < 0 && browserWidth < 769) {
            count = slide.length - 1;
    }
    
    rollSlider();
});


document.querySelector('.right').addEventListener('click', () => {
    count++;
    console.log(count);
    console.log(browserWidth);
    console.log(slide.length);

    if (count >= slide.length - 2 && browserWidth >= 959) {
        count = 0;
    } else if (count >= slide.length - 1 && (browserWidth <= 958 && browserWidth >= 769)) {
        count = 0;
    } else if (count >= slide.length && browserWidth < 769) {
        count = 0;
    }

    rollSlider();
});
navContainer.addEventListener('click', clickHandlerNavigation);

window.addEventListener('resize', initFunc);
initFunc();


