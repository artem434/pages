System.register(["jquery", "youtube", "bootstrap"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, jquery_2, youtube_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
                jquery_2 = jquery_1_1;
            },
            function (youtube_1_1) {
                youtube_1 = youtube_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            jquery_2.default(function ($) {
                if ($(window).width() > 820) {
                    setTimeout(function () {
                        $('#video-background').addClass('is-active');
                    }, 3000);
                    setTimeout(function () {
                        $('#video-background').removeClass('is-active');
                    }, 13000);
                }
                ;
            });
            youtube_1.default.ready(function () {
                var myModal = jquery_1.default('#myModal');
                myModal.on('show.bs.modal', function (e) {
                    myModal.css('display', 'flex');
                    var target = jquery_1.default(e.target), player = target.data('youtube-player'), id = jquery_1.default(e.relatedTarget).attr('data-vidId');
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
                    jquery_1.default('#main').css('position', 'static');
                });
                myModal.on('hide.bs.modal', function (e) {
                    var player = jquery_1.default(e.target).data('youtube-player');
                    player && player.stopVideo();
                    jquery_1.default('#main').css('position', 'relative');
                    setTimeout(function () {
                        jquery_1.default('body').css('padding-right', '0');
                    }, 500);
                });
            });
            if (document.location.host != "seminars.proseminar.com.ua") {
                jquery_1.default('.block-order__card').css("display", "none");
            }
        }
    };
});
