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
		$('input.phone').val(getCookie("phone"));
	}
	else {
		$('input.phone').val(obj.country_calling_code);
	}
	$("input.phone").intlTelInput({
		utilsScript       : '/js/utils.js',
		defaultCountry    : 'auto',
		separateDialCode  : false,
		nationalMode      : false,
		initialCountry    : obj.country_code,
		preferredCountries: ['ua', 'ru', 'by', 'kz']
	});

	// SNG OR NOT //
	var sng_country = ['RU', 'BY', 'TJ', 'TM', 'UZ', 'KZ', 'KG', 'AM', 'AZ', 'MD'],
	curent_country = obj.country_code,
	sng_or_not = false;

	$.each(sng_country, function() {
	  if (this == curent_country) {
	    sng_or_not = true;
	  }
	});

	if (sng_or_not) {
	  $('.notsng_text').hide();
	} else {
	  $('.sng_text').hide();
	}
	  // SNG OR NOT END//
});



$('form .subm').on('click', function(e){
  e.preventDefault();
  var form = $(this).closest('form');
  form.addClass('loading');
  setTimeout(function(){
    form.submit();
  }, 1000)
});

function validate(formid) {
	var output = false;
	var name, email, phone;
	form = $(formid);
	form.addClass('loading');
	form.find('input[name="name"]').focus();
	form.find('input[name="email"]').focus();
	form.find('input[name="phone"]').focus();
	form.find('button[type="submit"]').focus();
	name = form.find('input[name="name"]').val();
	email = form.find('input[name="email"]').val();
	phone = form.find('input[name="phone"]').val();
	phone = phone.replace(/\s/g, '');
	if ($('.not_error').length >= 3)
		{
			$.ajax(
			{
			type: "POST",
			url: 'mailer/export.php',
			async: false,
			data:
			{
				name: name,
				email: email,
				phone: phone
			},
			success: function(res){
				setCookie('name', name, 365);
				setCookie('email', email, 365);
				setCookie('phone', phone, 365);
				window.location.href = '/success.html';
			}
		});
	}
	else{
		form.find('input.error').first().focus();
		form.removeClass('loading');
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

// swiper example

// const partnersSlider = new Swiper('.partners__items', {
// 	speed: 8000,
// 	spaceBetween: 20,
// 	loop: true,
// 	freeMode: true,
// 	centeredSlides: true,
// 	slidesPerView: 2,
// 	freeModeMomentum: false,
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

const bcTicker = new Swiper('.bc-ticker__swiper', {
    speed: 2000,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    freeModeMomentum: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    on: {
        init: function () {
            lazyLoadInstance.update();
        },
    },
});

///

function Accordion(param) {
    let accordions;

    let settings = {
        parrentSelector: '.accordion',          // Родительский элемент / Оболочка
        titleSelector: '.accordion__title',     // Заголовок аккордиона при нажатии на который происходит откытие
        contentSelector: '.accordion__content', // Блок с содержимым, который открывается и закрывается
        multiOpenMode: true,                    // Позволяет оставаться открытым другим аккордионам
        outClick: true,                         // Если клик снаружи блока то скрыть контент
        openSpeed: 0.3, 	                    // Скорость открытия аккордеона в мс.
        animationType: 'ease',                  // тип анимации открытия аккордеона
        start: start
    };


    if (param) {
        Object.assign(settings, param);
    }


    settings.start();


    function start() {
        accordions = document.querySelectorAll(settings.parrentSelector);

        for (let i = 0; i < accordions.length; i++) {
            initAccordion(accordions[i]);
        };
    }


    function initAccordion(elem) {
        let titleBtn = elem.querySelector(settings.titleSelector);
        titleBtn.style.cssText = `
                -moz-user-select: none;
                -khtml-user-select: none;
                user-select: none;
                cursor: pointer;
            `;

        let content = elem.querySelector(settings.contentSelector);
        content.style.cssText = `
                max-height: 0px;
                overflow: hidden;
                transition: max-height ${settings.openSpeed}s ${settings.animationType} 0s;
            `;

        titleBtn.addEventListener('click', function () {
            if (!elem.classList.contains('_open')) {
                if (!settings.multiOpenMode) closeAllAccordions();
                openAccordion(elem);
            } else {
                closeAccordion(elem);
            }
        })
    };


    function openAccordion(elem) {
        elem.classList.add('_open');
        elem.querySelector(settings.titleSelector).classList.add('_open');
        elem.querySelector(settings.contentSelector).classList.add('_open');
        elem.querySelector(settings.contentSelector).style.maxHeight = elem.querySelector(settings.contentSelector).scrollHeight + 'px';

        if (settings.outClick) {
            document.addEventListener('click', outClick);
        };
    }


    function closeAccordion(elem) {
        elem.classList.remove('_open');
        elem.querySelector(settings.titleSelector).classList.remove('_open');
        elem.querySelector(settings.contentSelector).classList.remove('_open');
        elem.querySelector(settings.contentSelector).style.maxHeight = 0 + 'px';

        if (settings.outClick) {
            document.removeEventListener('click', outClick);
        };
    }


    function closeAllAccordions() {
        for (let i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('_open');
            accordions[i].querySelector(settings.titleSelector).classList.remove('_open');
            accordions[i].querySelector(settings.contentSelector).classList.remove('_open');
            accordions[i].querySelector(settings.contentSelector).style.maxHeight = 0 + 'px';
        };
    }


    function outClick(e) {
        let target = e.target;
        if (!target.closest(settings.parrentSelector)) {
            closeAllAccordions();
        }
    }
}

new Accordion({
    parrentSelector: '.module',
    titleSelector: '.module__head',
    contentSelector: '.module__content',
    multiOpenMode: false
});

const reviewsSlider = new Swiper('.reviews-slider__container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        prevEl: '.reviews__slider-btn_prev',
        nextEl: '.reviews__slider-btn_next'
    },
    on: {
        init: function () {
            lazyLoadInstance.update();
        },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        760: {
            slidesPerView: 3,
        },
    }
})

// const hamburger = document.querySelector('.hamburger')
// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toogle('.hamburger_active')
// })

document.querySelector('.hamburger').addEventListener('click', function() {
	document.querySelector('.hamburger').classList.toggle('hamburger_active');
	document.querySelector('.header__menu').classList.toggle('header__menu_active');
	document.querySelector('body').classList.toggle('_scroll');
})

// document.querySelectorAll('.header__menu li a').addEventListener('click', function(e,item) {
// 	e.preventDefault()
// 	console.log(item)
// 	document.querySelector('.hamburger').classList.remove('hamburger_active');
// 	document.querySelector('.header__menu').classList.remove('header__menu_active');
// 	document.querySelector('body').classList.remove('_scroll');
// })

let headerLinks = document.querySelectorAll('.header__menu li a');
for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', function () {
        document.querySelector('.hamburger').classList.remove('hamburger_active')
        document.querySelector('.header__menu').classList.remove('header__menu_active')
        document.querySelector('body').classList.remove('_scroll')
    })
};


