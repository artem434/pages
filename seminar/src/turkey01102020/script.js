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
                var burger = $('#menu-toggler');
                var body = $('body');
                burger.on('click', function () {
                    $(this).toggleClass('is-active');
                    body.toggleClass('no-scroll');
                });
                $('.menu').find('a').on('click', function () {
                    if (burger.hasClass('is-active')) {
                        burger.removeClass('is-active');
                        body.removeClass('no-scroll');
                    }
                });
            });
        }
    };
});
