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

$("form .subm").on("click", function (e) {
  e.preventDefault();
  var form = $(this).closest("form");
  form.addClass("loading");
  setCookie("name", $('input[name="name"]').val(), 365);
  setCookie("email", $('input[name="email"]').val(), 365);
  setCookie("phone", $('input[name="phone"]').val(), 365);
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

const tickerSlider = new Swiper(".ticker--line", {
  speed: 4000,
  loop: true,
  freeMode: true,
  centeredSlides: true,
  slidesPerView: "auto",
  //freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  760: {
    //speed: 7000,
  },
  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
});

const clientsSlider = new Swiper(".clients__slider", {
  spaceBetween: 24,
  slidesPerView: 2,
  //freeModeMomentum: false,
  //disableOnInteraction: false,
  breakpoints: {
    760: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 7,
      loop: false,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
});
const expertsSlider = new Swiper(".experts__list", {
  //centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
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
// });

const difficultiesSlider = new Swiper(".difficulties__content", {
  //centeredSlides: true,
  loop: false,
  //spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".difficulties-pagination",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  on: {
    init: function () {
      lazyLoadInstance.update();
    },
  },
});
$(".item__more, .program .faq .item__title").on("click", function () {
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

var spans = document.querySelectorAll(".register__package span");

var landingIdInput = document.getElementsByName("landing_id")[0];

spans.forEach(function (span) {
  span.addEventListener("click", function () {
    this.classList.toggle("active");
    var activeSpan = document.querySelector(".register__package span.active");
    var activeDataId = activeSpan ? activeSpan.getAttribute("data-id") : "";

    landingIdInput.value = activeDataId;
    spans.forEach(function (otherSpan) {
      if (otherSpan !== span) {
        otherSpan.classList.remove("active");
      }
    });
  });
});

document.querySelectorAll(".format__btns a").forEach(function (button) {
  button.addEventListener("click", function () {
    var dataId = this.getAttribute("data-id");

    spans.forEach(function (span) {
      if (span.getAttribute("data-id") === dataId) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });

    landingIdInput.value = dataId;
  });
});

$(".expert__collapse-btn").click(function () {
  $(".expert__text").toggleClass("active");
});

var player;

// Функция инициализации плеера
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "200",
    width: "300",
    videoId: "tok-0uAVj_s",
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Функция, вызываемая после загрузки плеера
function onPlayerReady(event) {
  player = event.target;
}

// Функция воспроизведения видео и отображения модального окна
function playVideo() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  // Проверяем, что плеер был инициализирован
  if (player) {
    player.playVideo();
  }
}

// Функция закрытия модального окна и остановки видео
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";

  // Проверяем, что плеер был инициализирован
  if (player) {
    player.stopVideo();
  }
}

// Установка слушателя клика на кнопку воспроизведения в модальном окне
document.getElementById("playButton").addEventListener("click", playVideo);

// Установка слушателя клика на кнопку закрытия модального окна
document.querySelector(".close").addEventListener("click", closePopup);

// Установка слушателя клика на область вне модального окна для его закрытия
document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы .instruction__item
  var items = document.querySelectorAll(".instruction__item");

  // Устанавливаем активным первый элемент и его соответствующий .instruction__phone
  setActiveItem(items[0]);

  // Добавляем обработчики событий клика для каждого элемента .instruction__item
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      var phone = this.nextElementSibling;

      // Устанавливаем активным текущий элемент и его .instruction__phone
      setActiveItem(this);
    });
  });

  // Функция для установки активного элемента и его .instruction__phone
  function setActiveItem(activeItem) {
    var activePhone = activeItem.nextElementSibling;

    // Удаляем класс активности и скрываем все .instruction__phone
    items.forEach(function (item) {
      item.classList.remove("instruction__item--active");
    });
    document.querySelectorAll(".instruction__phone").forEach(function (phone) {
      phone.style.display = "none";
    });

    // Добавляем класс активности и показываем соответствующий .instruction__phone
    activeItem.classList.add("instruction__item--active");
    activePhone.style.display = "block";
  }
});

$(document).ready(function () {
  var topElementId = "register";
  var bottomElementId = "footer";
  var $heroBtn = $(".btn-page--full");

  $(window).scroll(function () {
    var topOffset = $("#" + topElementId).offset().top;
    var bottomOffset = $("#" + bottomElementId).offset().top;
    var scrollPosition = $(window).scrollTop();

    $heroBtn.toggleClass(
      "d-none",
      scrollPosition >= topOffset && scrollPosition <= bottomOffset
    );
  });
});
