System.register(["jquery", "bootstrap", "youtube", "cdnjs/slick-carousel/1.8.1/slick.min.js"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, youtube_1;
    var __moduleName = context_1 && context_1.id;
    function findVideos() {
        var videos = document.querySelectorAll('.video__player');
        for (var i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }
    function setupVideo(video) {
        var link = video.querySelector('.video__link');
        var media = video.querySelector('.video__media');
        var button = video.querySelector('.video__button');
        var id = parseMediaURL(media);
        video.addEventListener('click', function () {
            var iframe = createIframe(id);
            link.remove();
            button.remove();
            video.appendChild(iframe);
        });
        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }
    function parseMediaURL(media) {
        var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        var url = media.src;
        var match = url.match(regexp);
        return match[1];
    }
    function createIframe(id) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');
        return iframe;
    }
    function generateURL(id) {
        var query = '?enablejsapi=1&html5=1?rel=0&showinfo=0&autoplay=1';
        return 'https://www.youtube.com/embed/' + id + query;
    }
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {
            },
            function (youtube_1_1) {
                youtube_1 = youtube_1_1;
            },
            function (_2) {
            }
        ],
        execute: function () {
            jquery_1.default(function ($) {
                var loaderPage = $('#loader-page');
                loaderPage.delay(350).fadeOut('slow');
                var viewport = $("meta[name=viewport]");
                viewport.attr('content', 'width=device-width,initial-scale=1');

                var utm = window.location.search
                var link

                $.each($('a.js-btn-utm'),function(data,value){
                    link = $(value).attr('href' ) + utm;
                    $(this).attr('href', link)
                });

                youtube_1.default.ready(function () {
                    var myModal = $('#modal-video');
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
                }
                else {
                    $('.js-btn-platform').show();
                }
            });
            jquery_1.default(function ($) {
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
                $('.burger__link').on('click', function () {
                    $('#menu-checkbox').prop('checked', false);
                });
                $('.burger__element').on('click', function () {
                    $('#menu-checkbox').prop('checked', false);
                });
                if (document.location.host == "seminars.dtkt.ua") {
                    $(window).scroll(function () {
                        var the_top = jquery_1.default(document).scrollTop();
                        if (the_top > 0) {
                            jquery_1.default('.burger__bg').addClass('burger__bg-js-dk');
                        }
                        else {
                            jquery_1.default('.burger__bg').removeClass('burger__bg-js-dk');
                        }
                    });
                    $(window).scroll(function () {
                        var the_top = jquery_1.default(document).scrollTop();
                        if (the_top > 55) {
                            jquery_1.default('.burger__bg').addClass('burger__bg-js');
                        }
                        else {
                            jquery_1.default('.burger__bg').removeClass('burger__bg-js');
                        }
                    });
                }
            });
            findVideos();
        }
    };
});
