System.register(["jquery", "youtube", "bootstrap", "cdnjs/slick-carousel/1.8.1/slick.min.js", "cdnjs/waypoints/4.0.1/jquery.waypoints.min.js"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, youtube_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (youtube_1_1) {
                youtube_1 = youtube_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            jquery_1.default(function ($) {
                var viewport = $("meta[name=viewport]");
                viewport.attr('content', 'width=device-width,initial-scale=1');
                var loaderPage = $('#loader-page');
                loaderPage.delay(350).fadeOut('slow');
                var utm = window.location.search
                var link
                $.each($('a.js-btn-utm'),function(data,value){
                    link = $(value).attr('href' ) + utm;
                    $(this).attr('href', link)
                });
                youtube_1.default.ready(function () {
                    var myModal = $('#modal-video');
                    myModal.on('show.bs.modal', function (e) {
                        myModal.css('display', 'flex');
                        var target = $(e.target), player = target.data('youtube-player'), id = $(e.relatedTarget).attr('data-vidId');
                        if (!player) {
                            //@ts-ignore
                            player = new youtube_1.default.Player(target.find('.player')[0], {
                                height: '100%',
                                width: '100%',
                                videoId: id,
                                events: {
                                    onReady: function (event) {
                                        event.target.playVideo();
                                    }
                                }
                            });
                            target.data('youtube-player', player);
                            target.data('youtube-player-id', id);
                        }
                        else if (target.data('youtube-player-id') !== id) {
                            target.data('youtube-player-id', id);
                            player.loadVideoById(id);
                        }
                        else {
                            player.playVideo();
                        }
                        $('#main').css('position', 'static');
                    });
                    myModal.on('hide.bs.modal', function (e) {
                        var player = $(e.target).data('youtube-player');
                        player && player.stopVideo();
                        $('#main').css('position', 'relative');
                        setTimeout(function () {
                            $('body').css('padding-right', '0');
                        }, 500);
                    });
                });
                if (document.location.host == "7eminar.com") {
                    $('.js-platform-banner').show();
                    $('.header').hide();
                    $('.heading').show();
                }
                if (document.location.host != "7eminar.com") {
                    $('.js-platform-link').attr('href', '/platform');

                }

                if (document.location.host == "seminars.dtkt.ua") {
                    $('.js-platform-link').attr('href', 'https://promo.dtkt.ua/7eminar');
                    $('.js-platform-banner').show();
                    $('.js-btn-hidden').show();
                }
                else {
                    $('.js-btn-platform').show();
                }
                $(window).scroll(function () {
                    var the_top = jquery_1.default(document).scrollTop();
                    if (the_top > 55) {
                        jquery_1.default('.burger__bg').addClass('burger__bg-js');
                    }
                    else {
                        jquery_1.default('.burger__bg').removeClass('burger__bg-js');
                    }
                });
                if (document.location.host == "7eminar.com") {
                    $('.js-platform-banner').show();
                }
                $('.burger__link').on('click', function () {
                    $('#menu-checkbox').prop('checked', false);
                });
                $('.burger__element').on('click', function () {
                    $('#menu-checkbox').prop('checked', false);
                });
                if (document.location.host == "seminars.dtkt.ua") {
                    $(window).scroll(function () {
                        var the_top = jquery_1.default(document).scrollTop();
                        if (the_top > 0) {
                            jquery_1.default('.burger__bg').addClass('burger__bg-js-dk');
                        }
                        else {
                            jquery_1.default('.burger__bg').removeClass('burger__bg-js-dk');
                        }
                    });
                }
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
                }
                setInterval(update, 1000);
            });
        }
    };
});
