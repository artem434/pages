$(".block-order__active").hover(function (e) {
    e.preventDefault();
    $(".block-order__active ").removeClass('active3');
    $(this).addClass('active3');

});