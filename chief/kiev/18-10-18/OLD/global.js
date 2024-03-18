$(document).ready(function () {

    $('#phone, #q212, [name="phone"]').inputmask("+38 (099) 999-99-99", {showMaskOnHover: false,
        "oncomplete": function() {
            var maskedString = $(this).val();
            var isValid =Inputmask.isValid(maskedString, { alias: "+38 (099) 999-99-99"});

            if (isValid == true) {
                $(this).removeClass('error').addClass('valid'); 
            } else {
                $(this).removeClass('valid').addClass('error'); 
            }

        },
        "onKeyDown": function () {
            var maskedString = $(this).val();
            var isValid =Inputmask.isValid(maskedString, { alias: "+38 (099) 999-99-99"});

            if (isValid == true) {
                $(this).removeClass('error-field').addClass('valid-field'); 
            } else {
                $(this).removeClass('valid-field').addClass('error-field'); 
            }
        } 
    });
    $('#form, #form3').each(function(index, el) {
        $(this).validate({
            rules: {
                name: 'required',
                email: 'required'
            },
            submitHandler: function(form, event) {
                event.preventDefault();

                var phone = $(form).find('input[name="phone"]');

                if (phone.hasClass('valid-field')) {
                    $(form).find('button').prop('disabled', true).text('Обработка ...');
                    $.post('http://proceed.bizconstructor.com', $(form).serialize(), function(data, textStatus, xhr) { 
                        var o = $.parseJSON(data);
                        if (o.status == 'ok') {
                            window.location.href = o.link;
                        } else {
                            
                        }
                    }); 
                } else {
                    phone.addClass('error-field');
                }
            }
        });
    });
    $('#form2').each(function(index, el) {
        $(this).validate({
            rules: {
                name: 'required'
            },
            submitHandler: function(form, event) {
                event.preventDefault();

                var phone = $(form).find('input[name="phone"]');

                if (phone.hasClass('valid-field')) {
                    $(form).find('button').prop('disabled', true).text('Обработка ...');
                    $.post('http://proceed.bizconstructor.com', $(form).serialize(), function(data, textStatus, xhr) { 
                        var o = $.parseJSON(data);
                        if (o.status == 'ok') {
                            $(form).prev().remove();
                            $(form).html(`<div class="form_done">
                                <p>Спасибо!</p>
                                <span>Наш менеджер свяжется с Вами<br>в ближайшее время!</span> 
                            </div>`);
                        } 
                    }); 
                } else {
                    phone.addClass('error-field');
                }
            }
        });
    }); 
    $('.timer').syotimer({
        year: 2017,
        month: 9,
        day: 4,
        hour: 23,
        minute: 59,

        headTitle: 'До поднятия цены осталось:',
        lang: 'rus', 
    });

    widthScreen = $(window).width();
    heightScreen = $(window).height();

    var blockInCenter = function (container, element) {
        var elementWidth = $(element).outerWidth(),
            elementHeight = $(element).outerHeight(),
            containerWidth = $(container).outerWidth(),
            containerHeight = $(container).outerHeight(),
            positionLeft = (containerWidth - elementWidth) / 2,
            positionTop = (containerHeight - elementHeight) / 2;

        //if (positionTop < 20) {
        //  positionTop = 20;
        //}
        $(element).css("left", positionLeft);

        $(element).css("top", positionTop);

    };


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

    // Number fix 


    var androidAnimate = function () {
        var button = document.querySelectorAll('.anim');
        for (var i = 0; i < button.length; i++) {
            button[i].onmousedown = function (e) {

                var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
                var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
                var effect = document.createElement('div');
                effect.className = 'effect';
                effect.style.top = y + 'px';
                effect.style.left = x + 'px';
                e.srcElement.appendChild(effect);
                setTimeout(function () {
                    e.srcElement.removeChild(effect);
                }, 1100);
            }
        }
    };

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


    var whyBlock = function () {
        var item = $(".e-why-item");
        item.hover(
            function () {
                $(this).find(".b-why").addClass("active");
                $(".b-why").addClass("m-why-hide");
            }, function () {
                $(".b-why").removeClass("active m-why-hide");
            }
        );
    };


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


    var Slider = new Swiper('.e-slider-swiper', {
        nextButton: '.js-slider-right',
        prevButton: '.js-slider-left',
        speed: 600,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 20
    });



    androidAnimate();
    whyBlock();
    detailItem();


    $('.b-time').timeTo({
        timeTo: new Date('Jan 16 2017 02:00:00'),
        displayDays: 2,
        displayCaptions: true,
        fontSize: 38,
        captionSize: 13,
        lang: "ru"
    });

    $("input").each(function () {
        var valNow = $(this).val(),
            par = $(this).closest(".b-input-container");
        if (valNow == "") {
            par.removeClass("m-full");
        } else {
            par.addClass("m-full");
        }
    });

    $("input").blur(function () {
        var valNow = $(this).val(),
            par = $(this).closest(".b-input-container");
        if (valNow == "") {
            par.removeClass("m-full");
        } else {
            par.addClass("m-full");
        }

    });

    // menu button
    $(".js-button-menu").click(function () {
        var menu = $(this).closest(".b-header").find(".b-nav-list");
        $(this).toggleClass("active");
        menu.toggleClass("active");
        $(".e-header-scr").toggleClass("active");
    });
    // menu button end

    var header = function () {
        var scr = $(window).scrollTop(),
            h = $(".b-header"),
            pop = $(".wrap").hasClass("m-wrap-popup");

        if(scr>=35){
            h.addClass("m-header-top");
            $(".b-first").css("margin-top",62);

        }else{
            if(pop == false){
                h.removeClass("m-header-top");
                $(".b-first").css("margin-top",0);
            }
        }

    };


    popup();

    $(window).resize(function () {
        header();

    });

    $(window).load(function () {
        header();
    });


    $(window).scroll(function () {
        var scr = $(window).scrollTop(),
            screenHeight = $(window).height(),
            screenWidth = $(window).width();
        // scroll();
        header();
    });


});

$(document).ready(function() {
    
});