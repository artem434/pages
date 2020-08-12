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
                var form = $('body .free-demo');
                var url = document.location.href;
                var utm = $('.utm');
                $(document).ready(function () {
                    utm.val(url);
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
                    submitHandler: function () {
                        var url = ['/invoice2', '/subscribe/09072020gift'];
                        var dataSend = [{ "customer[name]": $('.free-demo .name').val(), 'customer[email]': $('.free-demo .mail').val(), 'customer[phone]': $('.free-demo .phone').val(), 'article': $('.free-demo .article').val(), 'options[utm]': $('.free-demo .utm').val(), 'dealer': $('.free-demo .dealer').val() }, { "firstName": $('.free-demo .name').val(), 'email': $('.free-demo .mail').val(), 'phone': $('.free-demo .phone').val() }];
                        $.each(url, function (i) {
                            $.ajax({
                                url: url[i],
                                async: false,
                                type: "POST",
                                dataType: "json",
                                data: dataSend[i],
                                success: function (data, event, payload) {
                                    loader.addClass('is-active');
                                    location.href = '/gift_09072020_registration';
                                },
                                error: function () {
                                    loader.removeClass('is-active');
                                }
                            });
                        });
                    },
                });
            });
        }
    };
});
