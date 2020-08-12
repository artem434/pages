
import jQuery from 'jquery';
import YT from "youtube";
import 'bootstrap';
import 'cdnjs/waypoints/4.0.1/jquery.waypoints.min.js';
import $ from "jquery";


jQuery(function ($) {

    (function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                let ths = $(this);
                ths.waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                    } else {
                        ths.removeClass(inEffect);
                    }
                }, {
                    offset: "10%"
                });

            });
        };
    })(jQuery);

    $('.b-title').animated('line');
    $("#road").animated('road_line');
    $("#pulse-road").animated('pulse');

});

YT.ready(()=>{
    let myModal = $('#myModal');
    myModal.on('show.bs.modal', (e: JQuery.Event) => {
        myModal.css('display', 'flex');
        let
            target = $(e.target),
            player = target.data('youtube-player'),
            id = $(e.relatedTarget).attr('data-vidId');
        if (!player) {
            //@ts-ignore
            player = new YT.Player(target.find('.player')[0], {
                height: '100%',
                width: '100%',
                videoId: id,
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    }
                }
            });
            target.data('youtube-player', player);
            target.data('youtube-player-id', id);
        } else if(target.data('youtube-player-id') !== id) {
            target.data('youtube-player-id', id);
            player.loadVideoById(id);
        } else {
            player.playVideo();
        }
        $('#main').css('position', 'static');
    });
    myModal.on('hide.bs.modal', (e: JQuery.Event) => {
        let player = $(e.target).data('youtube-player');
        player && player.stopVideo();
        $('#main').css('position', 'relative');
        setTimeout(function () {
            $('body').css('padding-right', '0');
        }, 500);
    });

});