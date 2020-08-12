import jQuery from 'jquery';
import YT from "youtube";
import 'bootstrap';
import 'cdnjs/waypoints/4.0.1/jquery.waypoints.min.js';
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



jQuery(function ($) {
    /*$(".fold_p1").click(function () {
        this.fadeOut(function () {
            this.text().trim() === 'Про лектора' ? this.text('Теми для запитань'): this.text('Про лектора');
        })
    })*/
    $('.fold_p1').on('click', function () {
        $(this).text().trim() === 'Про лектора' ?  $(this).text('Теми для запитань'):  $(this).text('Про лектора');

    });
    if (document.location.host == "7eminar.com") {
        $('.dk-present').show();
    };

    $('.got__item').show();
    if (document.location.host == "seminars.dtkt.ua") {
        $('.js-banner-link').attr('href', 'https://promo.dtkt.ua/7eminar');

    }
    if (document.location.host != "7eminar.com") {
        $('.link-js-dealer').attr('href', '/platform');
    };

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

//-$("#text").text("задати питання*");
//-$("a.circle").prop("href", "https://7eminar.ua/events/611?utm_source=answers7eminar_circle_putannya&utm_medium=button&utm_campaign=peredplata_7eminar.ua").attr('target','_blank');
