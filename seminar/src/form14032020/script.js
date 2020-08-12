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
                var remain_bv = 300;
                function parseTime_bv(timestamp) {
                    if (timestamp < 0)
                        timestamp = 0;
                    var hour = Math.floor(timestamp / 60 / 60);
                    var mins = Math.floor((timestamp - hour * 60 * 60) / 60);
                    var secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
                    if (String(mins).length > 1)
                        $('.timer__mins').text(mins);
                    else
                        $('.timer__mins').text("0" + mins);
                    if (String(secs).length > 1)
                        $('.timer__secs').text(secs);
                    else
                        $('.timer__secs').text("0" + secs);
                }
                $(document).ready(function () {
                    setInterval(function () {
                        remain_bv = remain_bv - 1;
                        parseTime_bv(remain_bv);
                    }, 1000);
                });
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
                    location.href = '/form14032020_thanks';
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
