import jQuery from 'jquery';
import YT from 'youtube';
import 'bootstrap';
import 'cdnjs/slick-carousel/1.8.1/slick.min.js';
import 'cdnjs/waypoints/4.0.1/jquery.waypoints.min.js';




jQuery(($) => {
    const viewport = $("meta[name=viewport]");

    viewport.attr('content', 'width=device-width,initial-scale=1');

    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

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
        $('.header').hide();
        $('.heading').show();
        const loaderPage = $('#loader-page');
        loaderPage.css("opacity", "1");
        loaderPage.delay(350).fadeOut('slow');
    }

    if (document.location.host != "7eminar.com") {
        $('.js-platform-link').attr('href', '/platform');

    }

    if (document.location.host == "seminars.dtkt.ua") {
        $('.js-platform-link').attr('href', 'https://promo.dtkt.ua/7eminar');
        $('.js-platform-banner').show();
        $('.js-btn-hidden').show();
    } else {
        $('.js-btn-platform').show();
    }


    if (document.location.host == "7eminar.com") {
        $('.js-platform-banner').show();
    }

    $('.burger__link').on('click', function(){
        $('#menu-checkbox').prop('checked',false);
    });
    $('.burger__element').on('click', function(){
        $('#menu-checkbox').prop('checked',false);
    });



    if (document.location.host == "seminars.dtkt.ua") {
        $(window).scroll(function() {
            var the_top = jQuery(document).scrollTop();
            if (the_top > 0) {
                jQuery('.burger__bg').addClass('burger__bg-js-dk');
            }
            else {
                jQuery('.burger__bg').removeClass('burger__bg-js-dk');
            }
        })
    }

});


$('[data-timer-2]').each((index: number, elem: Element) => {
    var units = [86400, 3600, 60, 1];
    var a = $(elem).data('timer-2').split(/[^0-9]/);
    var due = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);


    function pad(a) {
        a = Math.floor(a);
        if (a <= 0) return '00';
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