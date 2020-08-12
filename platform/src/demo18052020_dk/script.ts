import $ from 'jquery'
import jQuery from "jquery";
import YT from "youtube";
import 'bootstrap';
import 'cdnjs/slick-carousel/1.8.1/slick.min.js';
import Cookie from 'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js';
var loader = $('.loader-backdrop')
var loaderPage = $('#loader-page');
var form = $('body .free-demo');
loaderPage.delay(850).fadeOut('slow');
let sputnik;
let article;



SystemJS.import('jquery').then(function ($) {
    SystemJS.import('https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js').then(function ($) {
        SystemJS.import('@clients').then(function (clients) {

            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            $('.project').on('click', 'button', function (event) {
                sputnik = $(this).attr('data-esputnik');

                article = $(this).attr('data-article');

                $(".article").val(article);

                localStorage.setItem('project', $(this).attr('id'));
                if(getCookie('popupCookie') == 'closed' ){
                    alert("Будь ласка, спробуйте ще раз за декілька хвилин, обробляється попередній запит.")

                }else{
                    $("#exampleModalCenter").modal('show');

                }
            });

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
                    const url = ["/subscribe/19052020demo10dk", "/invoice2"];
                    const dataSend = [{
                        "firstName": $('.free-demo .name').val(),
                        'email': $('.free-demo .mail').val(),
                        'phone': $('.free-demo .phone').val()
                    }, {
                        "customer[name]": $('.free-demo .name').val(),
                        'customer[email]': $('.free-demo .mail').val(),
                        'customer[phone]': $('.free-demo .phone').val(),
                        'article': $('.free-demo .article').val(),
                        'options[utm]': $('.free-demo .utm').val(),
                        'dealer': $('.free-demo .dealer').val()
                    }];

                    $.each(url, function(i) {
                        $.ajax({
                            url: url[i],
                            async: false,
                            type: "POST",
                            dataType: "json",
                            data: dataSend[i],
                            success: function( data, event, payload) {
                                loader.addClass('is-active');
                                if(i == 1){
                                    setCookie( 'popupCookie', 'closed', .0034722222 );

                                    var email = $('.mail').val();



                                    clients.Auth.getClient().then(function (client) {

                                        if (payload.responseJSON.result === true ) {
                                            if (client && client.email === email) {
                                                location.href = '/platform_successful';
                                                return
                                            }
                                            (client ? clients.Auth.logout() : Promise.resolve())
                                                .then(function () {
                                                    location.href = payload.responseJSON.newClient ? '/platform_new' : '/platform_auth'
                                                })

                                            sessionStorage.setItem('userEmail', email);
                                        } else if (payload.responseJSON.result === false ) {
                                            (client && client.email !== email ? clients.Auth.logout() : Promise.resolve())
                                                .then(function () {
                                                    sessionStorage.setItem('userEmail', email);
                                                    location.href = '/platform_singup_replay'
                                                })
                                        }
                                    })

                                }

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






        })
    })
});