System.register(["jquery", "youtube", "bootstrap", "cdnjs/waypoints/4.0.1/jquery.waypoints.min.js"], function (exports_1, context_1) {
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
            }
        ],
        execute: function () {
            /*
            $(document).ready(function () {
                $(".fold_p1").click(function () {
                    this.fadeOut(function () {
                       this.text((this.text() == 'Про лектора') ? 'Теми для запитань' : 'Про лектора').fadeIn();
                    })
                })
            
            });
            $(document).ready(function () {
                $("#fold_p").click(function () {
                    $("#fold_p").fadeOut(function () {
                        $("#fold_p").text(($("#fold_p").text() == 'Про лектора') ? 'Теми для запитань' : 'Про лектора').fadeIn();
                    })
                })
                $("#fold_p").click(function () {
            
            
                })
            });
            */
            jquery_1.default(function ($) {
                /*$(".fold_p1").click(function () {
                    this.fadeOut(function () {
                        this.text().trim() === 'Про лектора' ? this.text('Теми для запитань'): this.text('Про лектора');
                    })
                })*/
                $('.fold_p1').on('click', function () {
                    $(this).text().trim() === 'Про лектора' ? $(this).text('Теми для запитань') : $(this).text('Про лектора');
                });
                if (document.location.host == "7eminar.com") {
                    $('.dk-present').show();
                }
                ;
                $('.got__item').show();
                if (document.location.host == "seminars.dtkt.ua") {
                    $('.js-banner-link').attr('href', 'https://promo.dtkt.ua/7eminar');
                }
                if (document.location.host != "7eminar.com") {
                    $('.link-js-dealer').attr('href', '/platform');
                }
                ;
            });
            youtube_1.default.ready(function () {
                var myModal = $('#myModal');
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
            //-$("#text").text("задати питання*");
            //-$("a.circle").prop("href", "https://7eminar.ua/events/611?utm_source=answers7eminar_circle_putannya&utm_medium=button&utm_campaign=peredplata_7eminar.ua").attr('target','_blank');
        }
    };
});
