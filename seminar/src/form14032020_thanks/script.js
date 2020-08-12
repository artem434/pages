System.register(["jquery"], function (exports_1, context_1) {
    "use strict";
    var jquery_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }
        ],
        execute: function () {
            jquery_1.default(function ($) {
                var viewport = $("meta[name=viewport]");
                viewport.attr('content', 'width=device-width,initial-scale=1');
                var loaderPage = $('#loader-page');
                loaderPage.delay(350).fadeOut('slow');
                var loader = $('.loader-backdrop');
                var form = $('#reforma');
                form.on('submit', function () {
                    loader.addClass('is-active');
                    setTimeout(function () {
                        if ($('.form-group').hasClass('has-error')) {
                            loader.removeClass('is-active');
                        }
                    }, 500);
                });
                form.on('success', function () {
                    loader.removeClass('is-active');
                    location.href = '/16072019_registration#register';
                });
                form.on('error', function () {
                    loader.removeClass('is-active');
                    alert('Помилка реєстрації!\n' +
                        'Поле ПІБ не може містити цифри та символи ^[\\p{L} &;\'-]+$ \n' +
                        'і має бути не більше 3-х слів');
                });
            });
        }
    };
});
