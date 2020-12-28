import jQuery from 'jquery';
import 'bootstrap';


jQuery(($) => {
    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');

    const one = $('.tour_one__btn');

    one.click(function() {
        sessionStorage.setItem('tour', '/subscribe/Termy26012021');
        sessionStorage.setItem('name', 'Термальне перезавантаження в Закарпатті');
        sessionStorage.setItem('sub-name', 'Блаженство серед засніжених гір');
    });

    const two = $('.tour_two__btn');

    two.click(function() {
        sessionStorage.setItem('tour', '/subscribe/Belle06032021');
        sessionStorage.setItem('name', 'ЖІНОЧЕ СВЯТО В БЕЛЬ РОЯЛЬ');
        sessionStorage.setItem('sub-name', 'Зробіть своє 8 березня незабутнім');
    });

    const three = $('.tour_three__btn');

    three.click(function() {
        sessionStorage.setItem('tour', '/subscribe/Hurghada21042021');
        sessionStorage.setItem('name', 'ХУРГАДА – ПЕРЛИНА ЧЕРВОНОГО МОРЯ');
        sessionStorage.setItem('sub-name', 'Запрошуємо в східну казку');
    });

    const four = $('.tour_four__btn');

    four.click(function() {
        sessionStorage.setItem('tour', '/subscribe/Turkey20052021');
        sessionStorage.setItem('name', 'Непізнана Туреччина');
        sessionStorage.setItem('sub-name', 'Знайомство з Каппадокією');
    });



    $(window).scroll(function() {
        var the_top = jQuery(document).scrollTop();
        if (the_top > 55) {
            jQuery('.burger__bg').addClass('burger__bg-js');
        }
        else {
            jQuery('.burger__bg').removeClass('burger__bg-js');
        }
    });

    $('.burger__link').on('click', function(){
        $('#menu-checkbox').prop('checked',false);
    });

    if (document.location.host == "7eminar.com") {
        $('.js-platform-banner').show();
        $('.header').hide();
        $('.heading').show();
    }
});

/*
window.onload = function() {

    function getParameterByName(name) {
        var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var source = getParameterByName('utm_source');
    var medium = getParameterByName('utm_medium');
    var campaign = getParameterByName('utm_campaign');
    var content = getParameterByName('utm_content');
    var term = getParameterByName('utm_term');
    console.log(source);
    console.log(medium);
    console.log(campaign);
    console.log(content);
    console.log(term);

    // Put the variable names into the hidden fields in the form.
    document.getElementsByName("utm_source").value = source;
    document.getElementsByName("utm_medium").value = medium;
    document.getElementsByName("utm_campaign").value = campaign;
    document.getElementsByName("utm_content").value = content;
    document.getElementById("utm_term").value = content;
    //U Can use it with Expertsender Forms
};
*/
