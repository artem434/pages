System.register(["jquery", "bootstrap"], function (exports_1, context_1) {
    "use strict";
    var jquery_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            jquery_1.default(function ($) {
                var loaderPage = $('#loader-page');
                loaderPage.delay(350).fadeOut('slow');
                var viewport = $("meta[name=viewport]");
                viewport.attr('content', 'width=device-width,initial-scale=1');
                var europe = $('.tour-europe__btn');
                var emirates = $('.tour-emirates__btn');
                var instanbul = $('.tour_instanbul__btn');
                var amsterdam = $('.tour_amsterdam__btn');
                var skidnytsia = $('.tour_skidnytsia__btn');
                var beligium = $('.tour_beligium__btn');
                var scandinavia = $('.tour_scandinavia__btn');
                europe.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/WinterEuro24012020');
                    sessionStorage.setItem('name', 'ЗИМОВИЙ РЕЛАКС');
                    sessionStorage.setItem('sub-name', 'Термал-тур до Європи');
                });
                emirates.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/UAE19032020');
                    sessionStorage.setItem('name', 'Платинум-тур в ОАЕ');
                    sessionStorage.setItem('sub-name', 'Чарівність Перської затоки');
                });
                instanbul.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/Turkey23042020');
                    sessionStorage.setItem('name', 'СТАМБУЛ – ЗІРКА СХОДУ');
                    sessionStorage.setItem('sub-name', 'Екскурсії та шопінг');
                });
                amsterdam.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/Amster05052020');
                    sessionStorage.setItem('name', 'КРАЇНА ТЮЛЬПАНІВ');
                    sessionStorage.setItem('sub-name', 'Амстердам – квітка Європи');
                });
                skidnytsia.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/Khmelnytsky22052020');
                    sessionStorage.setItem('name', '7 задоволень для бухгалтера');
                    sessionStorage.setItem('sub-name', 'Відпочинок та оздоровлення');
                });
                beligium.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/Khmelnytsky22052020');
                    sessionStorage.setItem('name', ' Бельгія – країна гурманів');
                    sessionStorage.setItem('sub-name', 'Тур для душі');
                });
                scandinavia.click(function () {
                    sessionStorage.setItem('tour', '/subscribe/Khmelnytsky22052020');
                    sessionStorage.setItem('name', 'Фіорди – чаруюча казка півночі');
                    sessionStorage.setItem('sub-name', 'Смарагдове серце Скандинавії');
                });
                $(window).scroll(function () {
                    var the_top = jquery_1.default(document).scrollTop();
                    if (the_top > 55) {
                        jquery_1.default('.burger__bg').addClass('burger__bg-js');
                    }
                    else {
                        jquery_1.default('.burger__bg').removeClass('burger__bg-js');
                    }
                });
                $('.burger__link').on('click', function () {
                    $('#menu-checkbox').prop('checked', false);
                });
                if (document.location.host == "7eminar.com") {
                    $('.js-platform-banner').show();
                    $('.header').hide();
                    $('.heading').show();
                }
            });
            /*
            window.onload = function() {
            
                function getParameterByName(name) {
                    var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                    var results = regex.exec(location.search);
                    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                }
            
                var source = getParameterByName('utm_source');
                var medium = getParameterByName('utm_medium');
                var campaign = getParameterByName('utm_campaign');
                var content = getParameterByName('utm_content');
                var term = getParameterByName('utm_term');
                console.log(source);
                console.log(medium);
                console.log(campaign);
                console.log(content);
                console.log(term);
            
                // Put the variable names into the hidden fields in the form.
                document.getElementsByName("utm_source").value = source;
                document.getElementsByName("utm_medium").value = medium;
                document.getElementsByName("utm_campaign").value = campaign;
                document.getElementsByName("utm_content").value = content;
                document.getElementById("utm_term").value = content;
                //U Can use it with Expertsender Forms
            };
            */
        }
    };
});
