$(document).ready(function() {
	var utm_source = getUrlParameter('utm_source');
	var utm_medium = getUrlParameter('utm_medium');
	var utm_term = getUrlParameter('utm_term');
	var utm_campaign = getUrlParameter('utm_campaign');
	var utm_content = getUrlParameter('utm_content');
	$('input[name=utm_source]').val(utm_source);
	$('input[name=utm_medium]').val(utm_medium);
	$('input[name=utm_term]').val(utm_term);
	$('input[name=utm_campaign]').val(utm_campaign);
	$('input[name=utm_content]').val(utm_content);

	// AOS.init();
});


$(window).load(function() {
	$("input[name=name]").val(getCookie("name"));
	$("input[name=email]").val(getCookie("email"));
	$("input[name=phone]").val(getCookie("phone"));
});



var lazyLoadInstance = new LazyLoad({
	// Your custom settings go here
});



$.get("https://ipapi.co/json/", function(obj) {
	if(getCookie("phone")){
		$('input[name=phone]').val(getCookie("phone"));
	}
	else {
		$('input[name=phone]').val(obj.country_calling_code);
	}
	$("input[name=phone]").intlTelInput({
		// utilsScript       : '/js/utils.js',
		defaultCountry    : 'auto',
		separateDialCode  : false,
		nationalMode      : false,
		initialCountry    : obj.country_code,
		preferredCountries: ['ua', 'kz']
	});
});



$('form [type=sumbit]').on('click', function(e){
	e.preventDefault();
	var form = $(this).closest('form');
	form.addClass('loading');
	setTimeout(function(){
		form.submit();
	}, 1000)
});

function sendForm(formid) {
	var output = false;
	form = $(formid);
	form.addClass('loading');
	form.find('input[name=name]').focus();
	form.find('input[name=email]').focus();
	form.find('input[name=phone]').focus();
	form.find('button[type="submit"]').focus();
	const formdata = {
		name: form.find('input[name=name]').val(),
		email: form.find('input[name=email]').val(),
		phone: form.find('input[name=phone]').val().replace(/\s/g, ''),
		utm_source: form.find('input[name=utm_source]').val(),
		utm_medium: form.find('input[name=utm_medium]').val(),
		utm_term: form.find('input[name=utm_term]').val(),
		utm_campaign: form.find('input[name=utm_campaign]').val(),
		utm_content: form.find('input[name=utm_content]').val(),
	}
	if($('.error').length > 0) {
		form.find('input.error').first().focus();
		form.removeClass('loading');
	}
	else {
		$.ajax({
			type: "POST",
			url: 'mailer/export.php',
			async: false,
			data: formdata,
			success: function(res){
				setCookie('name', formdata.name, 365);
				setCookie('email', formdata.email, 365);
				setCookie('phone', formdata.phone, 365);
				window.location.href = form.find('input[name=success_url]').val();
			}
		});
	}
	return output;
};


// SMOOTH SCROLL //

$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.not('[href*="modal"]')
	.click(function(event) {
		// On-page links
		$('.header').removeClass('active');
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				// var headerHeight = $('.header').height();
				var headerHeight =0;
				if($(window).width() < 760){
					headerHeight = 0;
				}
				$('html, body').animate({
					scrollTop: target.offset().top - headerHeight
				},
				{
					// Set the duration long enough to allow time
					// to lazy load the elements.
					duration: 1500,
					// At each animation step, check whether the target has moved.
					step: function( now, fx ) {
					// Where is the target now located on the page?
					// i.e. its location will change as images etc. are lazy loaded
					var newOffset = target.offset().top - headerHeight;
					// If where we were originally planning to scroll to is not
					// the same as the new offset (newOffset) then change where
					// the animation is scrolling to (fx.end).
					if(fx.end !== newOffset)
						fx.end = newOffset;
					}
				})
			}
		}
});


$('.header__burger').on('click', function() {
	$('.header').toggleClass('active');
})

$('.faq__items .item__question').on('click', function() {
	if($(this).parent().hasClass('active')) {
		$(this).parent().removeClass('active');
		$(this).siblings().slideUp();
	} else {
		$('.faq__items .item').removeClass('active');
		$('.faq__items .item__answer').slideUp();

		$(this).parent().addClass('active');
		$(this).siblings().slideDown();
	}
})

$('.faq__items .item__question').first().click();

const clientsSlider = new Swiper('.clients__slider', {
	loop: true,
	spaceBetween: 24,
	slidesPerView: 2,
	freeModeMomentum: false,
	disableOnInteraction: false,
	breakpoints: {
		760: {
			slidesPerView: 4,
		},
		1260: {
			slidesPerView: 8,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {
		init: function () {
			lazyLoadInstance.update();
		},
	},
});

if($(window).width() < 760){
	var waypoints = $(
		'#main, #register'
	).waypoint({
		handler: function (direction) {
			$('.hero__btn').addClass('hidden');
		},
	});

	var waypoints = $(
		'#hero, #description, #about, #stage, #for, #team, #clients, #faq, #footer'
	).waypoint({
		handler: function (direction) {
			$('.hero__btn').removeClass('hidden');
		},
	});
}

// const slider = new Swiper('.slider', {


// 	speed: 8000,
// 	spaceBetween: 20,
// 	loop: true,
// 	freeMode: true,
// 	centeredSlides: true,
// 	slidesPerView: 2,
// 	freeModeMomentum: false,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		dynamicBullets: true,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	autoplay: {
// 		delay: 0,
// 		disableOnInteraction: false
// 	},
// 	on: {
// 		init: function () {
// 			lazyLoadInstance.update();
// 		},
// 	},
// 	breakpoints: {
// 		760: {
// 			slidesPerView: 4,
// 		},
// 		1260: {
// 			slidesPerView: 5,
// 		},
// 	},
// });