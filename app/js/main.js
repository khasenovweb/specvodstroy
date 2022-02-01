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
// ==============================//
// ===== END Partials ===========//
// ==============================//
 
$(document).ready(function(){
    $('[data-parallax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });
});