$('img[data-lazy-src]').each(function(i, el){
    var src = $(el).attr('data-lazy-src');
    $(this).attr('src',src);
});


var lazy_bg_elements = document.querySelectorAll(' [data-lazy-bg] ');

for (var index = 0; index < lazy_bg_elements.length; index++) {
    var element = lazy_bg_elements[index];
    var url = element.getAttribute('data-lazy-bg');
    element.style.backgroundImage = 'url(' + url + ')';
}