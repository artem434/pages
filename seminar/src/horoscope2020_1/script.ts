import jQuery from 'jquery';
import 'bootstrap';


jQuery(($) => {
    const viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=device-width,initial-scale=1');

    const loaderPage = $('#loader-page');
    loaderPage.delay(350).fadeOut('slow');

});


[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});