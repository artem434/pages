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
            jquery_1.default(function ($) {
                if (document.location.host == "7eminar.com") {
                    $('.dk-present').show();
                }
                ;
                $('.got__item').show();
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
        }
    };
});
