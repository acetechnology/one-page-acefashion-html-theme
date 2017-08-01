$(document).ready(function () {

    "use strict";


    $('.slider-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            anchorBuilder: false
        }

    })


    $('.portfolio-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        circular: true,
        prev: '#prev',
        next: '#next',
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: false,
        items: {
            visible: {
                min: 1,
                max: 4
            },
            height: "variable"
        }


    })


    $('.team-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        circular: true,
        prev: '#team-prev',
        next: '#team-next',
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 4
            },
            height: "variable"
        }


    })

    $('.testimonial-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: false,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".testipager",
            anchorBuilder: false
        }


    })


    $(function () {
        //$('a[href*=#]')
        $('.scrollto').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 50}, 500, 'linear');
        });
    });

    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
    ;


    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top >= 50) {
            $("header").addClass('secondary-dark-bg');
        } else if ($("header").hasClass('secondary-dark-bg')) {
            $("header").removeClass('secondary-dark-bg');
        }
    })


    $('#menu').slicknav({
        label: '',
        closeOnClick: true,
    });

    $('#main').stellar();

    $('.animation').each(function () {

        var waypoint = new Waypoint({
            element: this,
            handler: function (direction) {

                var animation = $(this.element).attr('data-animation');
                $(this.element).css('opacity', '1');
                $(this.element).addClass("animated " + animation);

            },
            offset: '75%'
        })

    })


});

