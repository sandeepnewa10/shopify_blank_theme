$(document).ready(function () {
    (function ($) {
        $('.banner').owlCarousel({
            items: 1,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'slideInRight',
            //stagePadding:30,
            smartSpeed:450
        });
        $('.blog-post').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    })(jQuery);
});

