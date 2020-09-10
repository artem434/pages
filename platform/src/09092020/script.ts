import $ from 'jquery';
import 'bootstrap';
import 'cdnjs/slick-carousel/1.8.1/slick.min.js';

var loader = $('.loader-backdrop')
var loaderPage = $('#loader-page');
var form = $('body .free-demo');
var form_bottom = $('body .free-demo-bottom');
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


loaderPage.delay(850).fadeOut('slow');
const url = document.location.href;
const utm =  $('.utm');
$(document).ready(function(){
    utm.val(url);
});
$('.slider').slick({
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div id="pause_video" class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    nextArrow: '<div id="pause_video" class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    lazyLoad:'ondemand',
    fade: true



});

$(".slider").on("beforeChange", function(event, slick) {
    var currentSlide, slideType, player, command;
    currentSlide = $(slick.$slider).find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);

    if (slideType ) {
        command = {
            "event": "command",
            "func": "pauseVideo"
        };
    }

    if (player != undefined) {
        player.contentWindow.postMessage(JSON.stringify(command), "*");
    }
});


SystemJS.import('jquery').then(function ($) {
    SystemJS.import('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js').then(function ($) {
        SystemJS.import('@clients').then(function (clients) {

            form.validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    phone:{
                        required: true,
                        minlength: 18
                    }
                },
                messages: {
                    name: "Введіть не менше 2 символів",
                    email: {
                        required: "Це поле необхідно заповнити",
                        email: "Будь ласка, введіть коректну адресу електронної пошти"
                    },
                    phone:"Введіть правильний номер телефону"
                },
                submitHandler: function(form) {
                    const url = ['/subscribe/09092020conference'];
                    const dataSend = [{
                        "firstName": $('.free-demo .name').val(),
                        'email': $('.free-demo .mail').val(),
                        'phone': $('.free-demo .phone').val(),
                        'source': $('.free-demo .utm').val()
                    }];

                    $.each(url, function(i) {
                        loader.addClass('is-active');
                        $.ajax({
                            url: url[i],
                            async: false,
                            type: "POST",
                            dataType: "json",
                            data: dataSend[i],
                            success: function( data, event, payload) {
                                location.href = '/gifts'
                                /*if(i == 1){

                                    clients.Auth.getClient().then(function (client) {

                                        if (payload.responseJSON.result === true ) {
                                            location.href = '/youtube_new'
                                        } else if (payload.responseJSON.result === false ) {
                                            location.href = '/youtube_singup_replay'
                                        }
                                    })
                                }*/
                            },
                            error: function(error) {
                                console.log("no");
                                loader.removeClass('is-active')
                                if (error.status == 422 && i == 0){
                                    alert("Введіть правильний номер телефону")
                                }
                            }
                        });
                    });
                },
            });


            $('.burger__link').on('click', function(){
                $('#menu-checkbox').prop('checked',false);
            });
            $('.burger__element').on('click', function(){
                $('#menu-checkbox').prop('checked',false);
            });
        })
    })
});
