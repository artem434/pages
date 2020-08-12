import jQuery from 'jquery';
import 'bootstrap';
import YT from "youtube";
import 'cdnjs/slick-carousel/1.8.1/slick.min.js';

jQuery(($) => {
    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');

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






jQuery(($) => {

    $('.slider').slick({
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<div id="pause_video" class="prev"></div>',
        nextArrow: '<div id="pause_video" class="next"></div>',
        fade: true


    });
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
        $(window).scroll(function() {
            var the_top = jQuery(document).scrollTop();
            if (the_top > 55) {
                jQuery('.burger__bg').addClass('burger__bg-js');
            }
            else {
                jQuery('.burger__bg').removeClass('burger__bg-js');
            }
        });

    });
function findVideos() {
    let videos = document.querySelectorAll('.video__player');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}


function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?enablejsapi=1&html5=1?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();