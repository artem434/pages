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





/** SPARROW SCRIPTS */

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
        if (!target.closest(settings.parrentSelector))  {
            closeAllAccordions();
        }
    }
}





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





/* (function setHeroPaddingTop(){
    let elems = {
        header: document.querySelector('header'),
        hero: document.querySelector('#hero')
    }

    if (!elems.header || !elems.hero) return;

    elems.hero.style.paddingTop = elems.header.offsetHeight + 'px';
}()) */





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





new Accordion({
    parrentSelector: '.day',
    titleSelector: '.day__head',
    contentSelector: '.day__description',
    multiOpenMode: true
});

document.querySelector('.program .day__head').click();



/**
 * Настройка пропорций таблицы с пакетами
 */
function packagesTable() {
    let table = document.querySelector('.packages__table');
    if (!table) return;


    let info = {
        empty: table.querySelector('.packages__info-empty'),
        services: table.querySelectorAll('.packages__info-srvice'),
        price: table.querySelector('.packages__info-price')
    }

    let packages = {
        heads: table.querySelectorAll('.packages__package-head'),
        headMaxHeight: [],
        prices: table.querySelectorAll('.packages__package-prices'),
        pricesMaxHeight: []
    }



    /**
     * Определяю нибольшую высоту заголовка пакета
     */
    for (let i = 0; i < packages.heads.length; i++) {
        packages.headMaxHeight.push(+packages.heads[i].offsetHeight);
    };

    packages.headMaxHeight = Math.max.apply(null, packages.headMaxHeight);



    /**
     * Определяю нибольшую высоту блока с ценами пакета
     */
    for (let i = 0; i < packages.prices.length; i++) {
        packages.pricesMaxHeight.push(+packages.prices[i].offsetHeight);
    };

    packages.pricesMaxHeight = Math.max.apply(null, packages.pricesMaxHeight);



    /**
     * Устанавливаю одинаковую высоту для первого рядя таблицы
     */
    for (let i = 0; i < packages.heads.length; i++) {
        packages.heads[i].style.height = packages.headMaxHeight + 'px';
    };
    info.empty.style.height = packages.headMaxHeight + 'px';



    /**
     * Устанавливаю одинаковую высоту для последнего рядя таблицы
     */
     for (let i = 0; i < packages.heads.length; i++) {
        packages.prices[i].style.height = packages.pricesMaxHeight + 'px';
    };
    info.price.style.height = packages.pricesMaxHeight + 'px';



    /**
     * Задаю одинаковую высоту для ячеек услуг пакетов. 
     * Высота берется из колонки info
     */
    for (let i = 0; i < info.services.length; i++) {
        setHeightForPackageServices(info.services[i].offsetHeight, i + 1);
    };

    /**
     * Устанавливает высоту для ячеек услуг пакетов.
     */
    function setHeightForPackageServices(serviceHeight, i) {
        let packServices = table.querySelectorAll(`.packages__package-service_${i}`);
        
        for (let i = 0; i < packServices.length; i++) {
            packServices[i].style.height = serviceHeight + 'px';
        };
    }
}









/**
 * Кнопка "Показати більше" на бобилках
 */
function showMoreBenefits() {
    let benefitsBlock = document.querySelector('.benefits');
    let btn = benefitsBlock.querySelector('.benefits__list-more');

    if (!benefitsBlock || window.innerWidth > 760 || !btn) return;

    let listWrap = benefitsBlock.querySelector('.benefits__list-wrap');
    let height = getListHeight(6); // Указать число видимых строк блока. 
    
    listWrap.style.overflow = 'hidden';
    listWrap.style.height = height + 'px';

    btn.addEventListener('click', function() {
        toggleListHeight();
    });

    function toggleListHeight() {
        // console.log('btn')
        if (!listWrap.classList.contains('_open')) {
            openList();
        } else {
            closeList();
        }
    } 

    function openList() {
        listWrap.classList.add('_open');
        listWrap.style.height = listWrap.scrollHeight + 'px';
        document.addEventListener('click', outClick);
    }

    function closeList() {
        listWrap.classList.remove('_open');
        listWrap.style.height = height + 'px';
        document.removeEventListener('click', outClick);
    }

    function getListHeight(count) {
        let listItems = benefitsBlock.querySelectorAll('.benefits__list-item');
        let height = 0;
        for (let i = 0; i < count; i++) {
            height += listItems[i].offsetHeight + 5;
        };
        return height;
    }

    function outClick(e) {
        let target = e.target;
        if (!target.closest('.benefits__list-more') && !target.closest('.benefits__list-wrap')) {
            closeList(); 
        }
    }
}


/** Настройка логики кнопок выбора пакета на комп версии  */
function selectedPackageOnDesktop() {
    let table = document.querySelector('.packages__table');
    let form = document.querySelector('.registration__form-wrap');
    let formSectionOffsetTop = document.querySelector('#registration').offsetTop;

    if (!table || window.innerWidth <= 760 ) return;

    let packageBtns = table.querySelectorAll('.packages__package-price-select-btn');
    let formBtns = form.querySelectorAll('.packages-btns__pack-name');
    let inputHidden = form.querySelector('#form-selected-package');

    if (!packageBtns && !formBtns && !inputHidden) return;


    // События выбора пакета в таблице
    for (let i = 0; i < packageBtns.length; i++) {
        packageBtns[i].addEventListener('click', function () {
            // formBtnsRemoveActive();
            // formBtns[i].classList.add('packages-btns__pack-name_active');
            //inputHidden.setAttribute('value', formBtns[i].dataset.package);
            /* window.scrollTo({
                top: formSectionOffsetTop - document.querySelector('header').offsetHeight,
                left: 0,
                behavior: 'smooth'
            }); */
        });
    };


    // События кнопок выбора пакета на форме
    for (let i = 0; i < formBtns.length; i++) {
        formBtns[i].addEventListener('click', function () {
            formBtnsRemoveActive();
            formBtns[i].classList.add('packages-btns__pack-name_active');
            // inputHidden.setAttribute('value', formBtns[i].dataset.package);
        });
    };




    /**
     * Удаляет active каласс у кнопок формы
     */
    function formBtnsRemoveActive() {
        for (let i = 0; i < formBtns.length; i++) {
            formBtns[i].classList.remove('packages-btns__pack-name_active');
        };
    }


    return
}






/** Настройка логики кнопок выбора пакета на моб версии  */
function selectedPackagesOnMob() {
    let mobilePackages = document.querySelector('.packages__table-wrap-mob');
    if (!mobilePackages) return;

    let tabBtns = mobilePackages.querySelectorAll('.packages-btns__pack-name');
    let packs = mobilePackages.querySelectorAll('.packages__mob-pack');


    let formSectionOffsetTop = document.querySelector('.form').offsetTop;
    let form = document.querySelector('.registration__form-wrap');
    let formBtns = form.querySelectorAll('.packages-btns__pack-name');
    let inputHidden = form.querySelector('#form-selected-package');

    
    if (!mobilePackages || !form || window.innerWidth > 760) return;


    // Переключение табов
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener('click', function () {
            tabsBtnsRemoveActive();
            tabBtns[i].classList.add('packages-btns__pack-name_active');
            packRemoveActive();
            packs[i].classList.add('packages__mob-pack_active')
        });
    };


    // Выбор пакета при клике на кнопки в таблице пакета
    /* for (let i = 0; i < packs.length; i++) {
        let packBtns = packs[i].querySelectorAll('.packages__package-price-select-btn');
        
        for (let j = 0; j < packBtns.length; j++) {
            packBtns[j].addEventListener('click', function () {
                formBtnsRemoveActive();
                formBtns[i].classList.add('packages-btns__pack-name_active');
                inputHidden.setAttribute('value', formBtns[i].dataset.package);
                window.scrollTo({
                    top: formSectionOffsetTop - document.querySelector('header').offsetHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        };
    }; */

    // События кнопок выбора пакета на форме
    for (let i = 0; i < formBtns.length; i++) {
        formBtns[i].addEventListener('click', function () {
            formBtnsRemoveActive();
            formBtns[i].classList.add('packages-btns__pack-name_active');
            //inputHidden.setAttribute('value', formBtns[i].dataset.package);
        });
    };
 

    /**
     * Удаляет active каласс у пакетов формы
     */
     function packRemoveActive() {
        for (let i = 0; i < packs.length; i++) {
            packs[i].classList.remove('packages__mob-pack_active');
        };
    }


    /**
     * Удаляет active каласс у кнопок табов
     */
     function tabsBtnsRemoveActive() {
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].classList.remove('packages-btns__pack-name_active');
        };
    }



    /**
     * Удаляет active каласс у кнопок формы
     */
    function formBtnsRemoveActive() {
        for (let i = 0; i < formBtns.length; i++) {
            formBtns[i].classList.remove('packages-btns__pack-name_active');
        };
    }

    return;
}





document.addEventListener('DOMContentLoaded', function () {
    packagesTable();
    showMoreBenefits();
    selectedPackageOnDesktop();
    selectedPackagesOnMob();
});


function hidePackagesBtn() {
    let packages = document.querySelector('#packages');
    let btn = document.querySelector('.btn_fixed-bottom');
    if (!packages || !btn) return;

    let packPosititon = packages.offsetTop;
    let packHeight = packages.offsetHeight;
    // console.log(packHeight);

    window.addEventListener('scroll', function (e) {
        // console.log(window.pageYOffset + '-' + packPosititon)
        if (window.scrollY > packPosititon - window.innerHeight) {
            btn.classList.add('btn_fixed-bottom-hidden');
        } else {
            btn.classList.remove('btn_fixed-bottom-hidden');
        }
    });
}

hidePackagesBtn();
