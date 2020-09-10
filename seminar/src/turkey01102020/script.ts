import jQuery from 'jquery';
import 'bootstrap';

jQuery(($) => {
    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');

    const burger = $('#burger-page');
    const body = $('body');

    burger.on('click', function () {
        $(this).toggleClass('is-active');
        body.toggleClass('no-scroll');
    });

    $('.menu').find('a').on('click', function () {
        if (burger.hasClass('is-active')) {
            burger.removeClass('is-active');
            body.removeClass('no-scroll');
        }
    });

});

