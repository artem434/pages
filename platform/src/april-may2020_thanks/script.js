"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
require("bootstrap");
var loader = jquery_1.default('.loader-backdrop');
var loaderPage = jquery_1.default('#loader-page');
var form = jquery_1.default('body .free-demo');
loaderPage.delay(850).fadeOut('slow');
var url = document.location.href;
var utm = jquery_1.default('.utm');
jquery_1.default(document).ready(function () {
    utm.val(url);
});
SystemJS.import('@clients').then(function (clients) {
    SystemJS.import('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js').then(function ($) {
        clients.Auth.getClient().then(function (client) {
            console.log(client.email);
        });
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
                var url = ['/subscribe/28042020marathon', '/invoice2'];
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
                                    location.href = '/april-may2020_thanks';
                                }
                                else if (payload.responseJSON.result === false) {
                                    location.href = '/april-may2020_again';
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
//# sourceMappingURL=script.js.map