function show_promotion__content__text__triangle() {
    var window_width = document.documentElement.clientWidth;
    var promotion__content__text__height = document.querySelector('.promotion__content__text').clientHeight;
    var promotion__content__text__width = document.querySelector('.promotion__content__text').clientWidth;
    var promotion__content__text__triangle = document.querySelector('.promotion__content__text__triangle');
    if(window_width > 800 ) {
        promotion__content__text__triangle.style.borderTop = promotion__content__text__height+'px solid white';
        promotion__content__text__triangle.style.borderLeft = '';
    }else {
        promotion__content__text__triangle.style.borderLeft = promotion__content__text__width+'px solid white';
        promotion__content__text__triangle.style.borderBottom = promotion__content__text__height+'px solid white';
        promotion__content__text__triangle.style.borderTop = '';
    }
    
}

setTimeout(function(){
    show_promotion__content__text__triangle();
}, 100);


window.addEventListener('resize', function(){
    show_promotion__content__text__triangle();
});