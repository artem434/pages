import jQuery from 'jquery';
import YT from "youtube";
import 'bootstrap';
import 'cdnjs/waypoints/4.0.1/jquery.waypoints.min.js';


jQuery(function ($) {

    var utm = window.location.search
    var link

    $.each($('a.js-btn-utm'),function(data,value){
        link = $(value).attr('href' ) + utm;
        $(this).attr('href', link)
    });

    if (document.location.host == "7eminar.com") {
        $('.dk-present').show();
    };

    $('.got__item').show();

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