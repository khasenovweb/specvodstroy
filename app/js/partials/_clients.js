$('.clients__slider').owlCarousel({
    items: 3,
    margin: 90,
    nav: true,
    navText: ["<img src='img/slider-arrow-orange-left.svg'>","<img src='/img/slider-arrow-orange-right.svg' >"],
    dotsContainer: '.clients__slider__dots',
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 6,
        }
    }
});