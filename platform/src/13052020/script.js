System.register(["jquery", "bootstrap"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, loader, loaderPage, form, form_bottom, remain_bv, url, utm;
    var __moduleName = context_1 && context_1.id;
    function parseTime_bv(timestamp) {
        if (timestamp < 0)
            timestamp = 0;
        var hour = Math.floor(timestamp / 60 / 60);
        var mins = Math.floor((timestamp - hour * 60 * 60) / 60);
        var secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
        if (String(mins).length > 1)
            jquery_1.default('.timer__mins').text(mins);
        else
            jquery_1.default('.timer__mins').text("0" + mins);
        if (String(secs).length > 1)
            jquery_1.default('.timer__secs').text(secs);
        else
            jquery_1.default('.timer__secs').text("0" + secs);
    }
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            loader = jquery_1.default('.loader-backdrop');
            loaderPage = jquery_1.default('#loader-page');
            form = jquery_1.default('body .free-demo');
            form_bottom = jquery_1.default('body .free-demo-bottom');
            remain_bv = 300;
            jquery_1.default(document).ready(function () {
                setInterval(function () {
                    remain_bv = remain_bv - 1;
                    parseTime_bv(remain_bv);
                }, 1000);
            });
            loaderPage.delay(850).fadeOut('slow');
            url = document.location.href;
            utm = jquery_1.default('.utm');
            jquery_1.default(document).ready(function () {
                utm.val(url);
            });
            SystemJS.import('jquery').then(function ($) {
                SystemJS.import('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js').then(function ($) {
                    SystemJS.import('@clients').then(function (clients) {
                        form.validate({
                            rules: {
                                name: "required",
                                email: {
                                    required: true,
                                    email: true
                                },
                                phone: {
                                    required: true,
                                    minlength: 18
                                }
                            },
                            messages: {
                                name: "Введіть не менше 2 символів",
                                email: {
                                    required: "Це поле необхідно заповнити",
                                    email: "Будь ласка, введіть коректну адресу електронної пошти"
                                },
                                phone: "Введіть правильний номер телефону"
                            },
                            submitHandler: function (form) {
                                var url = ['/subscribe/13052020conference'];
                                var dataSend = [{
                                        "firstName": $('.free-demo .name').val(),
                                        'email': $('.free-demo .mail').val(),
                                        'phone': $('.free-demo .phone').val()
                                    }];
                                $.each(url, function (i) {
                                    $.ajax({
                                        url: url[i],
                                        async: false,
                                        type: "POST",
                                        dataType: "json",
                                        data: dataSend[i],
                                        success: function (data, event, payload) {
                                            loader.addClass('is-active');
                                            var email = $('.mail').val();
                                            clients.Auth.getClient().then(function (client) {
                                                location.href = '/gifts';
                                            });
                                        },
                                        error: function () {
                                            console.log("no");
                                            loader.removeClass('is-active');
                                        }
                                    });
                                });
                            },
                        });
                        form_bottom.validate({
                            rules: {
                                name: "required",
                                email: {
                                    required: true,
                                    email: true
                                },
                                phone: {
                                    required: true,
                                    minlength: 18
                                }
                            },
                            messages: {
                                name: "Введіть не менше 2 символів",
                                email: {
                                    required: "Це поле необхідно заповнити",
                                    email: "Будь ласка, введіть коректну адресу електронної пошти"
                                },
                                phone: "Введіть правильний номер телефону"
                            },
                            submitHandler: function () {
                                var url_bottom = ['/subscribe/13052020conference'];
                                var dataSend_bottom = [{
                                        "firstName": $('.free-demo-bottom .name').val(),
                                        'email': $('.free-demo-bottom .mail').val(),
                                        'phone': $('.free-demo-bottom .phone').val()
                                    }];
                                $.each(url_bottom, function (i) {
                                    $.ajax({
                                        url: url_bottom[i],
                                        async: false,
                                        type: "POST",
                                        dataType: "json",
                                        data: dataSend_bottom[i],
                                        success: function (data, event, payload) {
                                            loader.addClass('is-active');
                                            var email = $('.free-demo-bottom .mail').val();
                                            clients.Auth.getClient().then(function (client) {
                                                location.href = '/gifts';
                                            });
                                        },
                                        error: function () {
                                            console.log("no");
                                        }
                                    });
                                });
                            },
                        });
                    });
                });
            });
        }
    };
});
