import $ from 'jquery';
import 'bootstrap';
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
                    const url = ['/subscribe/26052020conferencedk'];
                    const dataSend = [{
                        "firstName": $('.free-demo .name').val(),
                        'email': $('.free-demo .mail').val(),
                        'phone': $('.free-demo .phone').val()
                    }];

                    $.each(url, function(i) {


                        $.ajax({
                            url: url[i],
                            async: false,
                            type: "POST",
                            dataType: "json",
                            data: dataSend[i],
                            success: function( data, event, payload) {

                                loader.addClass('is-active')
                                var email = $('.mail').val();

                                clients.Auth.getClient().then(function (client) {
                                    location.href = '/gifts'
                                   /* if (payload.responseJSON.result === true ) {
                                        if (client && client.email === email) {
                                            location.href = '/2020_successful'
                                            return
                                        }
                                        (client ? clients.Auth.logout() : Promise.resolve())
                                            .then(function () {
                                                location.href = payload.responseJSON.newClient ? '/2020_new' : '/2020_auth'
                                            })

                                        sessionStorage.setItem('userEmail', email)
                                    } else if (payload.responseJSON.result === false ) {
                                        (client && client.email !== email ? clients.Auth.logout() : Promise.resolve())
                                            .then(function () {
                                                sessionStorage.setItem('userEmail', email)
                                                location.href = '/2020_singup_replay'
                                            })
                                    }*/
                                })

                            },
                            error: function() {
                                console.log("no");
                                loader.removeClass('is-active')
                            }
                        });
                    });
                },
            });


            form_bottom.validate({
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
                submitHandler: function() {
                    const url_bottom = ['/subscribe/26052020conferencedk'];
                    const dataSend_bottom = [{
                        "firstName": $('.free-demo-bottom .name').val(),
                        'email': $('.free-demo-bottom .mail').val(),
                        'phone': $('.free-demo-bottom .phone').val()
                    }];


                    $.each(url_bottom, function(i) {
                        $.ajax({
                            url: url_bottom[i],
                            async: false,
                            type: "POST",
                            dataType: "json",
                            data: dataSend_bottom[i],
                            success: function( data, event, payload) {

                                loader.addClass('is-active')
                                var email = $('.free-demo-bottom .mail').val();

                                clients.Auth.getClient().then(function (client) {

                                    location.href = '/gifts'
                                    /*if (payload.responseJSON.result === true ) {
                                        if (client && client.email === email) {
                                            location.href = '/2020_successful'
                                            return
                                        }
                                        (client ? clients.Auth.logout() : Promise.resolve())
                                            .then(function () {
                                                location.href = payload.responseJSON.newClient ? '/2020_new' : '/2020_auth'
                                            })

                                        sessionStorage.setItem('userEmail', email)
                                    } else if (payload.responseJSON.result === false ) {
                                        (client && client.email !== email ? clients.Auth.logout() : Promise.resolve())
                                            .then(function () {
                                                sessionStorage.setItem('userEmail', email)
                                                location.href = '/2020_singup_replay'
                                            })
                                    }*/
                                })
                            },
                            error: function() {
                                console.log("no");
                            }
                        });
                    });
                },
            });



        })
    })
});
