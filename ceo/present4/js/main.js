$(document).ready(function () {
  var utm_source = getUrlParameter("utm_source");
  var utm_medium = getUrlParameter("utm_medium");
  var utm_term = getUrlParameter("utm_term");
  var utm_campaign = getUrlParameter("utm_campaign");
  var utm_content = getUrlParameter("utm_content");
  $("input[name=utm_source]").val(utm_source);
  $("input[name=utm_medium]").val(utm_medium);
  $("input[name=utm_term]").val(utm_term);
  $("input[name=utm_campaign]").val(utm_campaign);
  $("input[name=utm_content]").val(utm_content);

  // AOS.init();
});

// $(window).load(function() {
// 	$("input[name=name]").val(getCookie("name"));
// 	$("input[name=email]").val(getCookie("email"));
// 	$("input[name=phone]").val(getCookie("phone"));
// });

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

$.get("https://ipapi.co/json/", function (obj) {
  $("input[name=phone]").intlTelInput({
    // utilsScript       : '/js/utils.js',
    defaultCountry: "auto",
    separateDialCode: false,
    nationalMode: false,
    initialCountry: obj.country_code,
    preferredCountries: ["ua", "kz"],
  });
});
$("form .subm").on("click", function (e) {
  e.preventDefault();
  var form = $(this).closest("form");
  form.addClass("loading");
  setTimeout(function () {
    form.submit();
  }, 500);
});

function validate(formid) {
  var output = false;
  var name, email, phone;
  form = $(formid);
  form.addClass("loading");
  form.find('input[name="name"]').focus();
  form.find('input[name="email"]').focus();
  form.find('input[name="phone"]').focus();
  form.find('button[type="submit"]').focus();
  name = form.find('input[name="name"]').val();
  email = form.find('input[name="email"]').val();
  phone = form.find('input[name="phone"]').val();
  phone = phone.replace(/\s/g, "");
  if ($(".not_error").length >= 3) {
    $.ajax({
      type: "POST",
      url: "mailer/export.php",
      async: false,
      data: {
        name: name,
        email: email,
        phone: phone,
      },
      success: function (res) {
        setCookie("name", name, 365);
        setCookie("email", email, 365);
        setCookie("phone", phone, 365);
        window.location.href = "/success.html";
      },
    });
  } else {
    form.find("input.error").first().focus();
    form.removeClass("loading");
  }
  return output;
}
// SMOOTH SCROLL //

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href*="modal"]')
  .click(function (event) {
    // On-page links
    $(".header").removeClass("active");
    $("body").removeClass("fixed");
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        // var headerHeight = $('.header').height();
        var headerHeight = 0;
        if ($(window).width() < 760) {
          headerHeight = 0;
        }
        $("html, body").animate(
          {
            scrollTop: target.offset().top - headerHeight,
          },
          {
            // Set the duration long enough to allow time
            // to lazy load the elements.
            duration: 1500,
            // At each animation step, check whether the target has moved.
            step: function (now, fx) {
              // Where is the target now located on the page?
              // i.e. its location will change as images etc. are lazy loaded
              var newOffset = target.offset().top - headerHeight;
              // If where we were originally planning to scroll to is not
              // the same as the new offset (newOffset) then change where
              // the animation is scrolling to (fx.end).
              if (fx.end !== newOffset) fx.end = newOffset;
            },
          }
        );
      }
    }
  });

const lineSlider = new Swiper(".line__slider", {
  speed: 8000,
  loop: true,
  // freeMode: true,
  spaceBetween: 34,
  centeredSlides: true,
  slidesPerView: "auto",
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
});

const clientsSlider = new Swiper(".clients__slider", {
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

$(".item__more, .program .item__title").on("click", function () {
  $(this).parent().toggleClass("active");
});

$(".packages .item__btn").on("click", function () {
  let package = $(this).data("package");
  $("input[name=package][value=" + package + "]").prop("checked", true);
});

$(".header__burger").on("click", function () {
  $(".header").toggleClass("active");
  $("body").toggleClass("fixed");
});

const checkbox = document.getElementById("myCheckbox");
const hiddenInput = document.querySelector('input[name="formid"]');

checkbox.addEventListener("click", function () {
  if (this.checked) {
    hiddenInput.value = "1";
  } else {
    hiddenInput.value = "0";
  }
});
