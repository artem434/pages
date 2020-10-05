import jQuery from 'jquery';
import 'bootstrap';
import YT from "youtube";
const loaderPage = $('#loader-page');
loaderPage.delay(350).fadeOut('slow');
jQuery(($) => {

    var utm = window.location.search
    var link

    $.each($('a.js-btn-utm'),function(data,value){
        link = $(value).attr('href' ) + utm;
        $(this).attr('href', link)
    });

    YT.ready(() => {
        let myModal = $('#modal-video');
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
            } else if (target.data('youtube-player-id') !== id) {
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

    if (document.location.host == "7eminar.com") {
        $('.js-platform-banner').show();
    }

    if (document.location.host != "7eminar.com") {
        $('.js-btn-platform').find('a').attr('href', '/platform');
    }

    if (document.location.host == "seminars.dtkt.ua") {
        $('.js-banner-link').attr('href', 'https://promo.dtkt.ua/7eminar');
        $('.js-platform-banner').show();
        $('.js-btn-hidden').show();
    } else {
        $('.js-btn-platform').show();
    }
});




