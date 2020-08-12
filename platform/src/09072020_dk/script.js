System.register(["jquery", "bootstrap", "cdnjs/slick-carousel/1.8.1/slick.min.js"], function (exports_1, context_1) {
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
            },
            function (_2) {
            }
        ],
        execute: function () {
            jquery_1.default('.slider').slick({
                speed: 500,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                prevArrow: '<div id="pause_video" class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
                nextArrow: '<div id="pause_video" class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
                lazyLoad: 'ondemand',
                fade: true
            });
            jquery_1.default(".slider").on("beforeChange", function (event, slick) {
                var currentSlide, slideType, player, command;
                currentSlide = jquery_1.default(slick.$slider).find(".slick-current");
                slideType = currentSlide.attr("class").split(" ")[1];
                player = currentSlide.find("iframe").get(0);
                if (slideType) {
                    command = {
                        "event": "command",
                        "func": "pauseVideo"
                    };
                }
                if (player != undefined) {
                    player.contentWindow.postMessage(JSON.stringify(command), "*");
                }
            });
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
                                var url = ['/subscribe/09072020bbsdk'/*, '/invoice2'*/];
                                var dataSend = [{
                                        "firstName": $('.free-demo .name').val(),
                                        'email': $('.free-demo .mail').val(),
                                        'phone': $('.free-demo .phone').val()
                                    }/*, {
                                        "customer[name]": $('.free-demo .name').val(),
                                        'customer[email]': $('.free-demo .mail').val(),
                                        'customer[phone]': $('.free-demo .phone').val(),
                                        'article': $('.free-demo .article').val(),
                                        'options[utm]': $('.free-demo .utm').val(),
                                        'dealer': $('.free-demo .dealer').val()
                                    }*/];
                                $.each(url, function (i) {
                                    $.ajax({
                                        url: url[i],
                                        async: false,
                                        type: "POST",
                                        dataType: "json",
                                        data: dataSend[i],
                                        success: function (data, event, payload) {
                                            loader.addClass('is-active');
                                            location.href = '/gifts'
                                            /*if (i == 1) {
                                                var email = $('.mail').val();
                                                clients.Auth.getClient().then(function (client) {
                                                    if (payload.responseJSON.result === true) {
                                                        if (client && client.email === email) {
                                                            location.href = '/free_successful';
                                                            return;
                                                        }
                                                        (client ? clients.Auth.logout() : Promise.resolve())
                                                            .then(function () {
                                                            location.href = payload.responseJSON.newClient ? '/free_new' : '/free_auth';
                                                        });
                                                        sessionStorage.setItem('userEmail', email);
                                                    }
                                                    else if (payload.responseJSON.result === false) {
                                                        (client && client.email !== email ? clients.Auth.logout() : Promise.resolve())
                                                            .then(function () {
                                                            sessionStorage.setItem('userEmail', email);
                                                            location.href = '/free_singup_replay';
                                                        });
                                                    }
                                                });
                                            }*/
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
            $('[data-timer-2]').each(function (index, elem) {
                var units = [86400, 3600, 60, 1];
                var a = $(elem).data('timer-2').split(/[^0-9]/);
                var due = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
                function pad(a) {
                    a = Math.floor(a);
                    if (a <= 0)
                        return '00';
                    return a < 10 ? '0' + a : a;
                }
                function update() {
                    var timeLeft = Math.floor((due.getTime() - new Date().getTime()) / 1000);
                    var u = units.map(function (s) {
                        var unit = (timeLeft < 0) ? 0 : Math.floor(timeLeft / s);
                        timeLeft -= unit * s;
                        return pad(unit);
                    });
                    $('.seconds', elem).text(pad(u[3]));
                    $('.minuts', elem).text(pad(u[2]));
                    $('.hours', elem).text(pad(u[1]));
                    $('.days', elem).text(pad(u[0]));

                    if (pad(u[3]) == 0 && pad(u[2]) == 0 && pad(u[1]) == 0 && pad(u[0]) == 0)  {
                        $('[data-timer-2]').hide();
                        $('.order__title').hide();
                    }
                }
                setInterval(update, 1000);
            });
        }
    };
});
