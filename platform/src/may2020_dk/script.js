System.register(["jquery", "bootstrap"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, loader, loaderPage, form, url, utm;
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
            loader = jquery_1.default('.loader-backdrop');
            loaderPage = jquery_1.default('#loader-page');
            form = jquery_1.default('body .free-demo');
            loaderPage.delay(850).fadeOut('slow');
            url = document.location.href;
            utm = jquery_1.default('.utm');
            jquery_1.default(document).ready(function () {
                utm.val(url);
            });
            SystemJS.import('@clients').then(function (clients) {
                SystemJS.import('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js').then(function ($) {
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
                            var url = ['/subscribe/12052020marathon', '/invoice2'];
                            var dataSend = [{ "firstName": $('.free-demo .name').val(), 'email': $('.free-demo .mail').val(), 'phone': $('.free-demo .phone').val() }, { "customer[name]": $('.free-demo .name').val(), 'customer[email]': $('.free-demo .mail').val(), 'customer[phone]': $('.free-demo .phone').val(), 'article': $('.free-demo .article').val(), 'options[utm]': $('.free-demo .utm').val(), 'dealer': $('.free-demo .dealer').val() }];
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
                                            if (payload.responseJSON.result === true) {
                                                location.href = '/may2020_thanks';
                                            }
                                            else if (payload.responseJSON.result === false) {
                                                location.href = '/may2020_again';
                                            }
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
                });
            });
        }
    };
});
