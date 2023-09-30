const hamburgerBtn = document.querySelector('.hamburger-btn');
const sideMenu = document.querySelector('.side-menu');
const buttonTwo = document.querySelector('.btn-2');
const threeDots1 = document.querySelector('.dots1');
const report1 = document.querySelector('.report1');
const threeDots2 = document.querySelector('.dots2');
const report2 = document.querySelector('.report2');
const threeDots3 = document.querySelector('.dots3');
const report3 = document.querySelector('.report3');
const quoteButton = document.querySelector('.title-btn');
const form = document.querySelector('.quote-form');
const closeButton = document.querySelector('.close-btn');

/* Review Slider Elements */
const slideContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton =document.getElementById('slide-arrow-prev');
const nextButton =document.getElementById('slide-arrow-next');

nextButton.addEventListener('click', (event) => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
});


/* buttonTwo.addEventListener('click', function() {
    const isOpened = buttonTwo.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('aria-expanded', 'false');
    }
}); */
quoteButton.addEventListener('click', function() {
    form.style.display = 'block';
});
closeButton.addEventListener('click', function() {
    form.style.display = 'none'
})

threeDots1.addEventListener('click', function() {
    report1.classList.toggle('hidden');
});
threeDots2.addEventListener('click', function() {
    report2.classList.toggle('hidden');
});
threeDots3.addEventListener('click', function() {
    report3.classList.toggle('hidden');
});


hamburgerBtn.addEventListener('click', function() {
    sideMenu.classList.toggle('hidden');
    const isOpened = buttonTwo.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('aria-expanded', 'false');
    }
})