

$('.header__hamburger').click(function(){
	$('body').toggleClass('overflowhidden');
    $('.mobilenav').toggleClass('active');
    $(this).toggleClass('active');
});


$('.mobilenav__city__items').slideUp();
$('.mobilenav__city__head').click(function(){
    $(this).toggleClass('active');
    $('.mobilenav__city__items').slideToggle();
});

