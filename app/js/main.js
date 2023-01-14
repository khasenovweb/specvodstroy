// ===============================//
// ============= Libs ===========//
// ==============================//
@@include('libs/jquery.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/headhesive.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')
@@include('libs/scroll.js')
@@include('libs/datepicker.min.js')
@@include('libs/datepicker.ru-RU.js')
// ==============================//
// ======= END Libs =============//
// ==============================//

// ==============================//
// ========= Partials ===========//
// ==============================//
@@include('partials/_lazy.js')
@@include('partials/_forms.js')
@@include('partials/_sertificates.js')
@@include('partials/_promotion.js')
@@include('partials/_command.js')
@@include('partials/_clients.js')
@@include('partials/_reviews.js')
@@include('partials/_faq.js')
@@include('partials/_mobile_nav.js')
@@include('partials/_modals.js')
@@include('partials/_canvas.js')
@@include('partials/_populars.js')
// ==============================//
// ===== END Partials ===========//
// ==============================//
 
$(document).ready(function(){
    $('[data-parallax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });
    var header = new Headhesive(".navbar", {
	    offset: 1000,
	});

    $("[data-scroll]").mPageScroll2id({
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
        offset: 104,
        onStart:function(){
            $('body').removeClass('overflowhidden');
            $('.mobilenav').removeClass('active');
            $('.header__hamburger').removeClass('active');
        },
    });

    if ( $('.anchors') ) {
        var header = new Headhesive(".anchors", {
            offset: 1000,
        });
    }


    $.fn.datepicker.languages['ru-RU'] = {
        format: 'dd.mm.YYYY',
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        weekStart: 1,
        startView: 0,
        yearFirst: false,
        yearSuffix: ''
    };
    
    
    $('[data-datepicker]').datepicker({
        language: 'ru-RU',
        format: 'dd.mm.yyyy'
    });
    
});