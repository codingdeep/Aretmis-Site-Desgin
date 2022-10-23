window.initBanner = function () {
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: [ '<span class="flaticon-arrowhead-thin-outline-to-the-left"></span>', '<span class="flaticon-right-arrow-2"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });
}
window.clients = function () {
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        smartSpeed: 3000,
        autoplay: true,
        navText: [ '<span class="flaticon-arrowhead-thin-outline-to-the-left"></span>', '<span class="flaticon-right-arrow-2"></span>' ],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1200:{
                items:6
            }

        }
    });
}

window.serviceInit = function () {
    $('.three-item-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 1000,
        autoplay: 500,
        navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
}
window.initWow = function () {
    var wow = new WOW({
        mobile:       false
    });
    wow.init();
}
window.initTab = function () {
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).is(':visible')){
            return false;
        }else{
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        }
    });
}

window.initToggle=function () {
    $('.mobile-nav-toggler').on('click', function() {
        $('body').addClass('mobile-menu-visible');
    });
}
window.closeToggle=function () {
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
        $('body').removeClass('mobile-menu-visible');
    });
}
