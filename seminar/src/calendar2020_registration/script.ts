import jQuery from 'jquery';
import 'bootstrap';

jQuery(($) => {
    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');


    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');


    const loader = $('.loader-backdrop');
    const form = $('#webinar-form');

    form.on('submit', function() {
        loader.addClass('is-active');

        setTimeout(function () {
            if ( $('.form-group').hasClass('has-error') ) {
                loader.removeClass('is-active')
            }
        }, 500)
    });

    form.on('success', function () {
        loader.removeClass('is-active');
        location.href ='/calendar2020_successful';

    });
    $('#webinar-form').attr("action",(sessionStorage.getItem('tour')));
    $('.tour-name').text(sessionStorage.getItem('name'));
    $('.tour-sub-name').text(sessionStorage.getItem('sub-name'));
    sessionStorage.clear();
    form.on('error', function () {
        loader.removeClass('is-active');
        alert('Помилка реєстрації!\n' +
            'Поле ПІБ не може містити цифри та символи ^[\\p{L} &;\'-]+$ \n' +
            'і має бути не більше 3-х слів')
    });

});


