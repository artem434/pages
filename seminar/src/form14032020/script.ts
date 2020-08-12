import jQuery from 'jquery';




jQuery(($) => {

    var remain_bv   = 300;
    function parseTime_bv(timestamp){
        if (timestamp < 0) timestamp = 0;


        var hour = Math.floor(timestamp/60/60);
        var mins = Math.floor((timestamp - hour*60*60)/60);
        var secs = Math.floor(timestamp - hour*60*60 - mins*60);



        if(String(mins).length > 1)
            $('.timer__mins').text(mins);
        else
            $('.timer__mins').text("0" + mins);
        if(String(secs).length > 1)
            $('.timer__secs').text(secs);
        else
            $('.timer__secs').text("0" + secs);

    }

    $(document).ready(function(){
        setInterval(function(){
            remain_bv = remain_bv - 1;
            parseTime_bv(remain_bv);

        }, 1000);
    });
    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');

    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

    const loader = $('.loader-backdrop');
    const form = $('#reforma');

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
        location.href ='/form14032020_thanks';
    });

    form.on('error', function () {
        loader.removeClass('is-active');
        alert('Помилка реєстрації!\n' +
            'Поле ПІБ не може містити цифри та символи ^[\\p{L} &;\'-]+$ \n' +
            'і має бути не більше 3-х слів')
    });


});

