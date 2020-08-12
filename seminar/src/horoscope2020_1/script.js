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
                var viewport = $("meta[name=viewport]");
                viewport.attr('content', 'width=device-width,initial-scale=1');
                var loaderPage = $('#loader-page');
                loaderPage.delay(350).fadeOut('slow');
            });
            [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
                img.setAttribute('src', img.getAttribute('data-src'));
                img.onload = function () {
                    img.removeAttribute('data-src');
                };
            });
        }
    };
});
