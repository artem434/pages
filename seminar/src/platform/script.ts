
import $ from 'jquery'
import jQuery from "jquery";
import YT from "youtube";
import 'bootstrap';


jQuery(($) => {
    if ($(window).width() > 820) {
        setTimeout(function () {
            $('#video-background').addClass('is-active');

        }, 3000);
        setTimeout(function () {
            $('#video-background').removeClass('is-active');
        }, 13000);
    };
    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');
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

if (document.location.host != "seminars.proseminar.com.ua") {
    $('.block-order__card').css("display", "none");
}