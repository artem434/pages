$(document).ready(function(){
        // Popup
    var popup = function () {
        var popup = $(".b-popup-overlay");

        $("[data-button]").click(function () {
            var popupNum = $(this).data("button");
            $("[data-modal='" + popupNum + "']").addClass("active").animate({
                "opacity": 1
            }, 300);
            header();
            overlayOpen();
        });


        $("[data-button]").click(function (e) {
            e.preventDefault();
        });

        $(".b-close").click(function () {
            $('#sales_modal').removeClass('active');
            $(".b-popup-overlay").animate({
                "opacity": 0
            }, 300);
            setTimeout(function () {
                $(".b-popup-overlay.active").removeClass("active");
            }, 310);
            overlayClose();
        });

        $(".b-overlay").click(function () {
            $(".b-popup-overlay").animate({
                "opacity": 0
            }, 300);
            setTimeout(function () {
                $(".b-popup-overlay.active").removeClass("active");
            }, 310);
            overlayClose();
        })
    };
    // Popup end
    var scrollTopPopup = function () {
        scr = $(window).scrollTop();
        scrWrap = $(".wrap").scrollTop();
    };

    // Overlay
    var overlayOpen = function () {
        scrollTopPopup();
        $(".b-overlay").addClass("active");
        $(".wrap").addClass("m-wrap-popup");
        $(".wrap").scrollTop(scr);
        $(".m-close-glob").addClass("m-close-visible");
        $(".b-overlay").animate({
            "opacity": "1"
        }, 300);
    };

    var overlayClose = function () {
        scrollTopPopup();
        $(".b-overlay").animate({
            "opacity": "0"
        }, 300);
        setTimeout(function () {
            $(".b-overlay").removeClass("active");
            $(".wrap").removeClass("m-wrap-popup");
            $(window).scrollTop(scrWrap);
            $(".m-close-glob").removeClass("m-close-visible");
        }, 310);
    };
    // Overlay end

    // Popup end
    // Link anchor
    $(function () {
        $('a[href^="#"]').bind('click', function (event) {
            var $anchor = $(this),
                scr = $($anchor.attr('href')).offset().top,
                header = $(".b-header").outerHeight();

            $('html, body').stop().animate({
                scrollTop: scr - header
            }, 1500, 'swing');
            $(".js-button-menu").removeClass("active");
            $(".b-header").find(".b-nav-list").removeClass("active");
            event.preventDefault();
        });
    });

    $('[data-href]').on('click',function(){
        var hv = $(this).data('href');
        $('html, body').animate({scrollTop: $(hv).offset().top - 80}, 800);
        hv = hv.replace('.','#');
        window.location.hash = hv;
    });

    $('[data-price-change]').click(TogglePrice);

    function TogglePrice(el) {
        var data = $(this).data('price-change');
        $('.tabs--header__buttons, .form-content-left .content').removeClass('premium default business').addClass(data.type);
        $('input[name="type"]').val(data.type);
        $('input[name="landing_id"]').val(data.landing_id);
        $('[data-price]').text(data.price);
        $('[data-total-price]').text(data.total_price); 
        $('[data-siblings]').toggleClass('active');
        $('.animation-price').addClass('scale');
        $('.animation-price').attr('data-anim', data.type);
        autoPriceChange('[data-price]','[data-total-price]', '[data-deadline]');
        if (data.type == 'business') {
            $('.price-time .package-item-wrap').css('display','flex');
            // $('.buttons .button').attr('disabled','disabled');
        } else {
            $('.price-time .package-item-wrap').css('display','none');
            $('.buttons .button').attr('disabled',false);
        }
    };

    var Slider = new Swiper('.e-slider-swiper', {
        nextButton: '.js-slider-right',
        prevButton: '.js-slider-left',
        speed: 600,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 20
    });

    var detailItem = function () {

        var elem = $('.js-list .b-res'),
            det = $(".js-detail .e-res-detail-item");

        elem.click(function () {

            var ind = $(this).closest(".e-res-item").index();
            elem.removeClass("active");
            $(this).addClass("active");

            if (det.eq(ind).hasClass("active") == false) {
                det.removeClass("active").slideUp();
            }
            det.eq(ind).addClass("active").slideDown(300).animate({
                opacity: 1
            }, 300);


        });

        det.find(".b-close-detail").click(function () {
            elem.removeClass("active");
            det.removeClass("active").slideUp();
        });


    };

    detailItem();


});