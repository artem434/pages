System.register(["jquery", "youtube", "bootstrap", "cdnjs/waypoints/4.0.1/jquery.waypoints.min.js"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, youtube_1, jquery_2;
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
            },
            function (_2) {
            }
        ],
        execute: function () {
            jquery_1.default(function ($) {
                var utm = window.location.search
                var link

                $.each($('a.js-btn-utm'),function(data,value){
                    link = $(value).attr('href' ) + utm;
                    $(this).attr('href', link)
                });
                (function ($) {
                    $.fn.animated = function (inEffect) {
                        $(this).each(function () {
                            var ths = $(this);
                            ths.waypoint(function (dir) {
                                if (dir === "down") {
                                    ths.addClass(inEffect).css("opacity", "1");
                                }
                                else {
                                    ths.removeClass(inEffect);
                                }
                            }, {
                                offset: "10%"
                            });
                        });
                    };
                })(jquery_1.default);
                $('.b-title').animated('line');
                $("#road").animated('road_line');
                $("#pulse-road").animated('pulse');
            });
            youtube_1.default.ready(function () {
                var myModal = jquery_2.default('#myModal');
                myModal.on('show.bs.modal', function (e) {
                    myModal.css('display', 'flex');
                    var target = jquery_2.default(e.target), player = target.data('youtube-player'), id = jquery_2.default(e.relatedTarget).attr('data-vidId');
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
                    jquery_2.default('#main').css('position', 'static');
                });
                if (document.location.host == "seminars.dtkt.ua") {
                    var viewport = $("meta[name=viewport]");
                    viewport.attr('content', 'width=1024, max-scale=1.0');
                };
                myModal.on('hide.bs.modal', function (e) {
                    var player = jquery_2.default(e.target).data('youtube-player');
                    player && player.stopVideo();
                    jquery_2.default('#main').css('position', 'relative');
                    setTimeout(function () {
                        jquery_2.default('body').css('padding-right', '0');
                    }, 500);
                });
            });
        }
    };
});
