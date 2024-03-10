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

$(window).load(function () {
  $("input[name=name]").val(getCookie("name"));
  $("input[name=email]").val(getCookie("email"));
  $("input[name=phone]").val(getCookie("phone"));
});

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

$.get("https://ipapi.co/json/", function (obj) {
  if (getCookie("phone")) {
    $("input[name=phone]").val(getCookie("phone"));
  } else {
    $("input[name=phone]").val(obj.country_calling_code);
  }
  $("input[name=phone]").intlTelInput({
    // utilsScript       : '/js/utils.js',
    defaultCountry: "auto",
    separateDialCode: false,
    nationalMode: false,
    initialCountry: obj.country_code,
    preferredCountries: ["ua", "kz"],
  });
});

$("form [type=sumbit]").on("click", function (e) {
  e.preventDefault();
  var form = $(this).closest("form");
  form.addClass("loading");
  setTimeout(function () {
    form.submit();
  }, 1000);
});

function validate(formid) {
  var output = false;
  form = $(formid);
  form.addClass("loading");
  form.find("input[name=name]").focus();
  form.find("input[name=email]").focus();
  form.find("input[name=phone]").focus();
  form.find('button[type="submit"]').focus();
  const formdata = {
    name: form.find("input[name=name]").val(),
    email: form.find("input[name=email]").val(),
    phone: form.find("input[name=phone]").val().replace(/\s/g, ""),
    utm_source: form.find("input[name=utm_source]").val(),
    utm_medium: form.find("input[name=utm_medium]").val(),
    utm_term: form.find("input[name=utm_term]").val(),
    utm_campaign: form.find("input[name=utm_campaign]").val(),
    utm_content: form.find("input[name=utm_content]").val(),
  };
  if ($(".error").length > 0) {
    form.find("input.error").first().focus();
    form.removeClass("loading");
  } else {
    $.ajax({
      type: "POST",
      url: "mailer/export.php",
      async: false,
      data: formdata,
      success: function (res) {
        setCookie("name", formdata.name, 365);
        setCookie("email", formdata.email, 365);
        setCookie("phone", formdata.phone, 365);
        window.location.href = form.find("input[name=success_url]").val();
      },
    });
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

var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  speed: 3000,
  centeredSlides: true,
  effect: "coverflow",
  coverflow: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    //slideShadows: true,
  },
  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});

const expertsSlider = new Swiper(".experts__list", {
  //centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    //delay: 1000,
  },
  navigation: {
    nextEl: ".next-experts",
    prevEl: ".prev-experts",
  },

  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
  breakpoints: {
    // 760: {
    //   slidesPerView: 4,
    // },
    1200: {
      slidesPerView: 4,
      loop: true,
      // loop: false,
    },
  },
});

mySwiper.on("slideChange", function () {
  // Удаляем класс active у всех элементов списка
  document.querySelectorAll(".hero__lector-item").forEach(function (el) {
    el.classList.remove("active");
  });

  // Получаем индекс активного слайда
  var activeSlideIndex = mySwiper.realIndex; // realIndex учитывает loop и centeredSlides

  // Добавляем класс active соответствующему элементу списка
  var activeListItem = document.querySelector(
    ".hero__lector-item:nth-child(" + (activeSlideIndex + 1) + ")"
  );
  activeListItem.classList.add("active");
});

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

$(document).ready(function () {
  var aboutElementId = "about";
  var $heroBtn = $(".hero__btn");

  $(window).scroll(function () {
    var aboutOffset = $("#" + aboutElementId).offset().top;
    var scrollPosition = $(window).scrollTop();

    $heroBtn.toggleClass("active", scrollPosition >= aboutOffset);

    if (scrollPosition < aboutOffset) {
      $heroBtn.removeClass("active");
    }

    // Видаляємо клас "active", коли сторінка докручується до якого-небудь елемента з id, що починається на "#anchor"
    $('[id^="register"]').each(function () {
      var anchorOffset = $(this).offset().top;
      if (scrollPosition >= anchorOffset) {
        $heroBtn.removeClass("active");
      }
    });
  });
});
function updateTimer() {
  var now = new Date();
  var friday = new Date(now);

  // Знаходимо наступну п'ятницю
  friday.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7));
  friday.setHours(0, 0, 0, 0); // Встановлюємо час на 00:00:00

  // Обчислюємо різницю в мілісекундах
  var difference = friday - now;

  // Обчислюємо дні, години, хвилини та секунди
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Додаємо ведучі нулі до годин, хвилин і секунд, якщо вони складають менше двох цифр
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Оновлюємо відображення таймера
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Оновлюємо кожну секунду
  setTimeout(updateTimer, 1000);
}

// Запускаємо таймер
updateTimer();
