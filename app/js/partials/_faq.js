$('.faq__item__content').slideUp();

$('.faq__item__header').click(function(){
    $(this).toggleClass('active');
    $(this).closest('.faq__item').find('.faq__item__content').slideToggle(300);
});