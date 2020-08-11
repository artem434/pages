System.register(["jquery", "bootstrap", "cdnjs/slick-carousel/1.8.1/slick.min.js"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, loader, loaderPage, form, sputnik, article;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            loader = jquery_1.default('.loader-backdrop');
            loaderPage = jquery_1.default('#loader-page');
            form = jquery_1.default('body .free-demo');
            loaderPage.delay(850).fadeOut('slow');
            jquery_1.default('.project').on('click', 'a', function (event) {
                sputnik = jquery_1.default(this).attr('data-esputnik');
                article = jquery_1.default(this).attr('data-article');
                jquery_1.default(".article").val(article);
                localStorage.setItem('project', jquery_1.default(this).attr('id'));
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
                                var url = ["/subscribe/19052020demo10", "/invoice2"];
                                var dataSend = [{
                                        "firstName": $('.free-demo .name').val(),
                                        'email': $('.free-demo .mail').val(),
                                        'phone': $('.free-demo .phone').val()
                                    }, {
                                        "customer[name]": $('.free-demo .name').val(),
                                        'customer[email]': $('.free-demo .mail').val(),
                                        'customer[phone]': $('.free-demo .phone').val(),
                                        'article': $('.free-demo .article').val(),
                                        'options[utm]': $('.free-demo .utm').val(),
                                        'dealer': $('.free-demo .dealer').val()
                                    }];
                                $.each(url, function (i) {
                                    $.ajax({
                                        url: url[i],
                                        async: false,
                                        type: "POST",
                                        dataType: "json",
                                        data: dataSend[i],
                                        success: function (data, event, payload) {
                                            var email = $('.mail').val();
                                            loader.addClass('is-active');
                                            clients.Auth.getClient().then(function (client) {
                                                if (payload.responseJSON.result === true) {
                                                    if (client && client.email === email) {
                                                        location.href = '/platform_successful';
                                                        return;
                                                    }
                                                    (client ? clients.Auth.logout() : Promise.resolve())
                                                        .then(function () {
                                                        location.href = payload.responseJSON.newClient ? '/platform_new' : '/platform_auth';
                                                    });
                                                    sessionStorage.setItem('userEmail', email);
                                                }
                                                else if (payload.responseJSON.result === false) {
                                                    (client && client.email !== email ? clients.Auth.logout() : Promise.resolve())
                                                        .then(function () {
                                                        sessionStorage.setItem('userEmail', email);
                                                        location.href = '/platform_singup_replay';
                                                    });
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
            });
        }
    };
});
