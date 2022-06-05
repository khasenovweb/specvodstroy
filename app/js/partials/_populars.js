$('.populars__slider').owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    navText: ["<img src='/img/slider-arrow-blue-left.svg'>","<img src='/img/slider-arrow-blue-right.svg' >"],
    dotsContainer: '.populars__slider__dots',
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        700: {
            items: 3,
        }
    }
});