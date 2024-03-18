$(document).ready(function () {
    
    // $('#button').click(function(){
    //     $('body').css('padding-top','3rem');
    // })


    var h = window.location.hash;
	if (h) {
		h = h.replace('#','.');
		console.log(h);
		$('html, body').animate({scrollTop: $(h).offset().top - 80}, 800);
	}
	$('[data-href]').click(function(event) {
		var hv = $(this).data('href');
		$('html, body').animate({scrollTop: $(hv).offset().top - 80}, 800);
		hv = hv.replace('.','#');
		window.location.hash = hv;
	});
   

    $('.close-review').click(function(){
        $iframe = $(this).parents('.review-data').find('iframe');
        $iframe.attr('src','');
         $(this).parents('.review-data').removeClass('is-opened'); 
    });
 
    $('.timer_content').syotimer({
        year: 2017,
        month: 2,
        day: 22,
        hour: 24,
        lang: 'rus'
    });


    // $('.popup-show').click(function(){
    //     var el = $(this).data('popup');
    //     $(el).addClass('active');

    // });

    $('[data-popup]').click(function(){
        var el = $(this).data('popup');

        if ( el == '#modal_form' && $(window).width() > 992 ) {
            $(el).addClass('active');
        } else if ( el == '#callback' ) {
            $(el).addClass('active');
        } else {
            $('html, body').animate({scrollTop: $('.form').offset().top - 80}, 800);
        }  
    });


    $('.close-modal, .overlay').click(function(){ 
        $(this).parents('.modal').removeClass('active');
        $('[data-form="callback"]').find('input').val('').removeClass('phone-success valid');
        $('[data-form="callback"]').find('button').text('Заказать звонок').removeClass('send-success');
    });

    // $('#content').css('padding-top', $('header').height());
    // $('header').width( $('#content').width() );

    $(window).resize(function(){ 
        
    });
 

    $('.show-menu').click(function(){
        autoHeightAnimate($(this).next('.header-menu'),200);
    })


    function autoHeightAnimate(element, time){
        var curHeight = element.height();
        if ( curHeight == 0) {
            autoHeight = element.css('height', 'auto').height();
            element.height(curHeight);
            element.stop().animate({ height: autoHeight }, time);
        } else {
            element.stop().animate({ height: 0 }, time);
        }
    }
 

    $("button").click(function (e) { 
        $(".ripple").remove(); 
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();
        $(this).prepend("<span class='ripple'></span>");
        if(buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight; 
        }
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2; 
        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });
 
    setInterval(function(){ 
            $('.sticky-menu').width( $('#content').width() );   
    },100);

    $(window).scroll(function(){
        var st = $(window).scrollTop();

        if ( st > 780) {
            $('.sticky-menu').addClass('active');
        } else {
            $('.sticky-menu').removeClass('active');
        }
    });
});

$(document).ready(function(){
    $(document).ajaxSuccess(function(event, request, settings) {
        var o = JSON.parse(request.responseText);
        dataLayer.push({
            'event': 'ajaxSuccess',
            'ajaxSuccessData': {
                'url': settings.url || '',
                'data': settings.data || '',
                'responseText': o.status || ''
            }
        });
    });

    $('[data-price-change]').click(TogglePrice);
    
    function TogglePrice(el) {
        var data = $(this).data('price-change');
        $('.tabs--header__buttons, .form-content-left .content').removeClass('premium default business').addClass(data.type);
        $('input[name="type"]').val(data.type);
        $('input[name="landing_id"]').val(data.landing_id);
        $('[data-price]').text(data.price);
        $('[data-total-price]').text(data.total_price); 
        $('[data-siblings]').toggleClass('active');
        $('.animation-price').addClass('scale');
        $('.animation-price').attr('data-anim', data.type);
        $('html, body').animate({scrollTop: $('.form-section').offset().top - 80}, 800);
        autoPriceChange('[data-price]','[data-total-price]', '[data-deadline]');
    }
});
