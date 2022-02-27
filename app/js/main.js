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

    if ( $('.anchors') ) {
        var header = new Headhesive(".anchors", {
            offset: 1000,
        });
    }
    
});