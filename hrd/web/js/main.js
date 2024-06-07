$(document).ready(function() {
	var utm_source = getUrlParameter('utm_source');
	var utm_medium = getUrlParameter('utm_medium');
	var utm_term = getUrlParameter('utm_term');
	var utm_campaign = getUrlParameter('utm_campaign');
	$('input[name=utm_source]').val(utm_source);
	$('input[name=utm_medium]').val(utm_medium);
	$('input[name=utm_term]').val(utm_term);
	$('input[name=utm_campaign]').val(utm_campaign);
});

// script to get utm
var getUrlParameter = function getUrlParameter(sParam)
{
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;
	for (i = 0; i < sURLVariables.length; i++)
	{
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam)
		{
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}


function clearF1Cookie() {
	setCookie("name","",-1);
	setCookie("email","",-1);
	setCookie("last1","",-1);
}
$(window).load(function() {
	$("input.name").val(getCookie("name"));
	$("input.email").val(getCookie("email"));
	$("input.phone").val(getCookie("phone"));
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


// UPDATE LAZY LOAD INSTANCE IN SLICK //

$('.slider__class').on('init', function (event, slick) {
	lazyLoadInstance.update();
});



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
				var headerHeight = document.querySelector('header').offsetHeight;
				/* if($(window).width() < 760){
					headerHeight = 0;
				} */
				$('html, body').animate({
					scrollTop: target.offset().top - headerHeight
				},
				{
					// Set the duration long enough to allow time
					// to lazy load the elements.
					duration: 1000,
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





/** SPARROW SCRIPTS */

// function Accordion(param) {
//     let accordions;

//     let settings = {
//         parrentSelector: '.accordion',          // Родительский элемент / Оболочка
//         titleSelector: '.accordion__title',     // Заголовок аккордиона при нажатии на который происходит откытие
//         contentSelector: '.accordion__content', // Блок с содержимым, который открывается и закрывается
//         multiOpenMode: true,                    // Позволяет оставаться открытым другим аккордионам
//         outClick: true,                         // Если клик снаружи блока то скрыть контент
// 		openSpeed: 0.3, 	                    // Скорость открытия аккордеона в мс.
// 		animationType: 'ease',                  // тип анимации открытия аккордеона
//         start: start
//     };


//     if (param) {
//         Object.assign(settings, param);
//     }


//     settings.start();


//     function start() {
//         accordions = document.querySelectorAll(settings.parrentSelector);

//         for (let i = 0; i < accordions.length; i++) {
//             initAccordion(accordions[i]);
//         };
//     }


//     function initAccordion(elem) {
//         let titleBtn = elem.querySelector(settings.titleSelector);
//             titleBtn.style.cssText = `
//                 -moz-user-select: none;
//                 -khtml-user-select: none;
//                 user-select: none;
//                 cursor: pointer;
//             `;

//         let content = elem.querySelector(settings.contentSelector);
//             content.style.cssText = `
//                 max-height: 0px;
//                 overflow: hidden;
//                 transition: max-height ${settings.openSpeed}s ${settings.animationType} 0s;
//             `;

//         titleBtn.addEventListener('click', function () {
//             if (!elem.classList.contains('_open')) {
//                 if (!settings.multiOpenMode) closeAllAccordions();
//                 openAccordion(elem);
//             } else {
//                 closeAccordion(elem);
//             }
//         })
//     };


//     function openAccordion(elem) {
//         elem.classList.add('_open');
//         elem.querySelector(settings.titleSelector).classList.add('_open');
//         elem.querySelector(settings.contentSelector).classList.add('_open');
//         elem.querySelector(settings.contentSelector).style.maxHeight = elem.querySelector(settings.contentSelector).scrollHeight + 'px';

//         if (settings.outClick) {
//             document.addEventListener('click', outClick);
//         };
//     }


//     function closeAccordion(elem) {
//         elem.classList.remove('_open');
//         elem.querySelector(settings.titleSelector).classList.remove('_open');
//         elem.querySelector(settings.contentSelector).classList.remove('_open');
//         elem.querySelector(settings.contentSelector).style.maxHeight = 0 + 'px';

//         if (settings.outClick) {
//             document.removeEventListener('click', outClick);
//         };
//     }


//     function closeAllAccordions() {
//         for (let i = 0; i < accordions.length; i++) {
//             accordions[i].classList.remove('_open');
//             accordions[i].querySelector(settings.titleSelector).classList.remove('_open');
//             accordions[i].querySelector(settings.contentSelector).classList.remove('_open');
//             accordions[i].querySelector(settings.contentSelector).style.maxHeight = 0 + 'px';
//         };
//     }


//     function outClick(e) {
//         let target = e.target;
//         if (!target.closest(settings.parrentSelector))  {
//             closeAllAccordions();
//         }
//     }
// }



let targets = document.querySelectorAll('footer');
for (let target of targets) {
    let canvas = document.createElement('canvas');
        canvas.width = target.offsetWidth;
        canvas.height = target.offsetHeight;
    let ctx = canvas.getContext('2d');
    // получаем все пиксели изображения
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imageData.data;
    for (var i = 0, il = pixels.length; i < il; i += 4) {
        var color = Math.round(Math.random() * 255);
        // так как шум монохромный, в каналы R, G и B кладём одно и то же значение
        pixels[i] = pixels[i + 1] = pixels[i + 2] = color;
        // делаем пиксель непрозрачным
        pixels[i + 3] = 10;
    }
    // записываем пиксели обратно на холст
    ctx.putImageData(imageData, 0, 0);
    target.appendChild(canvas);
};


function headerMenu() {
    let burger = document.querySelector('#burger');
    let menu = document.querySelector('.menu');
    let body = document.body;
    let links;

    if (!burger || !menu) {
        console.log("Недостаточно элементов для выполнения функции headerMenu")
        return false;
    }
    //if (window.innerWidth > 767) return false;

    links = menu.querySelectorAll('li');

    for (let i = 0; i < links.length; i++) {
        let subMunu = links[i].querySelector('ul');
        if (subMunu) {
            links[i].classList.add('submenu-parent');
        }
    }

    burger.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!burger.classList.contains('_open')) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function openMenu() {
        burger.classList.add('_open');
        menu.classList.add('_open');
        body.classList.add('_lock');
        addEventsToMenuItems();
        document.addEventListener('click', outClick);
    }

    function closeMenu() {
        burger.classList.remove('_open');
        menu.classList.remove('_open');
        body.classList.remove('_lock');
        removeEventsOfMenuItems();
        document.removeEventListener('click', outClick);
    }

    function addEventsToMenuItems() {
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', closeMenu);
        };
    }

    function removeEventsOfMenuItems() {
        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', closeMenu);
        };
    }

    function outClick(e) {
        let target = e.target;
        if (!target.closest('.burger') && !target.closest('.menu')) {
            closeMenu();
        }
    }
}
headerMenu();

// авто дата

let newDate = new Date();

if (newDate.getHours() >= 18) {
    newDate.setDate(newDate.getDate() + 1);
}

let month = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня'
];

let day = newDate.getDate();
let monthName = month[newDate.getMonth()];

$('.cDate').text(`${day} ${monthName}`);

// let timer = `${newDate.getFullYear()},${newDate.getMonth()},${newDate.getDate()},24`;
// $('.cDate').text('23 квітня');
// let timer = `${newDate.getFullYear()},03,01,15`;
// $('.simpleCountdown').data('date', timer);

//щовівторка 


// const newDate = new Date();
// const dateCopy = new Date(newDate.getTime());

// // Розрахунок наступного вівторка
// const daysUntilNextTuesday = ((2 - dateCopy.getDay() + 7) % 7) || 7;
// dateCopy.setDate(dateCopy.getDate() + daysUntilNextTuesday);

// // Перевірка, чи сьогодні вівторок і час менше 18:00
// if (newDate.getDay() === 2 && newDate.getHours() < 18) {
//     // Якщо так, виводимо повідомлення у консоль
//     console.log('Сьогодні вівторок до 18:00!');
// } else {
//     // Інакше, переходимо на наступний вівторок
//     newDate.setTime(dateCopy.getTime());
// }

// const month = [
//     'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
//     'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
// ];

// // Встановлюємо нову дату на елемент з класом .cDate
// $('.cDate').text(`${newDate.getDate()} ${month[newDate.getMonth()]}`);




initTicker()
function initTicker() {
    let ticker = document.querySelectorAll('.ticker');
    if (ticker.length == 0) return;

    for (let i = 0; i < ticker.length; i++) {
        createTicker(ticker[i])
    };

    function createTicker(ticker) {
        let text = ticker.querySelectorAll('.ticker__text');
        createKeyFrames(text)
    }

    function createKeyFrames(text) {
        return `
            @keyframes ticker{
                0% {
                    transform: translateX(0px);
                }
                100% {
                    transform: translateX(-${text[0].scrollWidth}px);
                }
            }
        `;
    }
}



// new Accordion({
//     parrentSelector: '.day',
//     titleSelector: '.day__head',
//     contentSelector: '.day__description',
//     multiOpenMode: false
// });



// new Accordion({
//     parrentSelector: '.benefits-accordion',
//     titleSelector: '.benefits-accordion__title',
//     contentSelector: '.benefits-accordion__content',
//     multiOpenMode: false
// });


if ($(window).width() < 760) {
	var waypoints = $('#hero, #registration').waypoint({
	  handler: function (direction) {
		$('.btn_fixed-bottom').addClass('hidden');
	  },
	});

	var waypoints = $(
	  '#double, #mistakes, #start, #lecturer, #program, #nums, #clients, #footer'
	).waypoint({
	  handler: function (direction) {
		$('.btn_fixed-bottom').removeClass('hidden');
	  },
	});
  }