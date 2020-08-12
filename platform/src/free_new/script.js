SystemJS.import('jquery').then(function ($) {
    var loader = $('.loader-backdrop');
    var loaderPage = $('#loader-page');
    loaderPage.delay(850).fadeOut('slow');
    $('#authForm')
        .on('submit', function (e) {
        e.preventDefault();
        SystemJS.import('@clients').then(function (clients) {
            clients.Auth.login($('[name="email"]', e.currentTarget).val(), $('[name="password"]', e.currentTarget).val()).then(function (client) {
                location.href = '/events/1447';
            });
        });
    })
        .find('#reg-email').val(sessionStorage.getItem('userEmail'));
});
