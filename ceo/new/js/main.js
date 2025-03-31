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

  // Ініціалізуємо телефонний інпут
  var phoneInput = $("input[name=phone]").intlTelInput({
    // utilsScript: '/js/utils.js',
    defaultCountry: "auto",
    separateDialCode: false,
    nationalMode: false,
    initialCountry: obj.country_code,
    preferredCountries: ["ua", "kz"],
  });

  // Додаємо індикатор статусу
  $("input[name=phone]").after('<div class="phone-validation-status"></div>');

  // Додаємо обробник події input
  $("input[name=phone]").on("input", function () {
    var $status = $(this).next(".phone-validation-status");
    var isValid = $(this).intlTelInput("isValidNumber");
    var errorCode = $(this).intlTelInput("getValidationError");

    var errorMap = [
      " Вірний номер",
      " Невірний код країни",
      " Номер занадто короткий",
      " Номер занадто довгий",
      " Невірна довжина номера",
    ];

    $status.text(errorMap[errorCode]);
    $status.css("color", isValid ? "green" : "red");

    // Додаємо/видаляємо класи валідації
    if (isValid) {
      $(this).removeClass("error").addClass("not_error");
    } else {
      $(this).removeClass("not_error").addClass("error");
    }
  });
});

$("form .subm").on("click", function (e) {
  e.preventDefault();
  var form = $(this).closest("form");
  form.addClass("loading");
  setCookie("name", $('input[name="name"]').val(), 365);
  setCookie("email", $('input[name="email"]').val(), 365);
  setCookie("phone", $('input[name="phone"]').val(), 365);
  // Додаємо відстеження LinkedIn
  if (window.lintrk) {
    window.lintrk("track", { conversion_id: 21670585 });
  }
  setTimeout(function () {
    form.submit();
  }, 1000);
});

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

/**
 * Прячет / показывает кнопку которая ведет на пакеты
 */

function hidePackagesBtn() {
  let target = document.querySelector("#register");
  let pkg = document.querySelector("#packages");
  let btn = document.querySelector(".hero__btn");

  if (!target || !pkg || !btn) return;

  let targetPosition = target.offsetTop;
  let targetHeight = target.offsetHeight;

  let targetPositionPkg = pkg.offsetTop;
  let targetHeightPkg = pkg.offsetHeight;

  let isBtnActive = false;

  window.addEventListener("scroll", function (e) {
    let scrollY = window.scrollY;

    if (
      (scrollY > targetPosition - window.innerHeight &&
        scrollY < targetPosition + targetHeight) ||
      (scrollY > targetPositionPkg - window.innerHeight &&
        scrollY < targetPositionPkg + targetHeightPkg)
    ) {
      if (!isBtnActive) {
        btn.classList.add("btn_fixed-bottom-hidden");
        isBtnActive = true;
      }
    } else {
      btn.classList.remove("btn_fixed-bottom-hidden");
      isBtnActive = false;
    }
  });
}

hidePackagesBtn();

$(document).ready(function () {
  var players = [];

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

  var youtubeSwiper = new Swiper(".swiper-container", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".youtube-next",
      prevEl: ".youtube-prev",
    },
    breakpoints: {
      760: {
        slidesPerView: 3,
      },
    },
    on: {
      slideChange: function () {
        stopAllVideos();
      },
    },
  });

  if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
    loadYouTubeAPI();
  } else {
    onYouTubeIframeAPIReady();
  }

  function loadYouTubeAPI() {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }

  function onYouTubeIframeAPIReady() {
    $(".swiper-slide iframe").each(function (index, iframe) {
      var player = new YT.Player(iframe, {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
      players.push(player);
    });
  }

  function stopAllVideos() {
    players.forEach(function (player) {
      if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
      }
    });
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      players.forEach(function (player) {
        if (player !== event.target) {
          player.pauseVideo();
        }
      });
    }
  }

  function openPopup(type, url, isImage = false) {
    var popupHtml = `
		<div class="${type}-popup">
		  <div class="${type}-popup__overlay">
		    <div class="${type}-popup__content">
			<div class="${type}-popup__block">
			  ${
          isImage
            ? `<img src="${url}" alt="Review Image" />`
            : `<iframe src="${url}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
        }
			  <button class="${type}-popup__close">&times;</button>
			</div>
		  </div></div>
		
		</div>
	  `;
    $("body").append(popupHtml);
    $(`.${type}-popup`).fadeIn(300);
  }

  $(document).on("click", ".reviews__image", function () {
    var imageUrl = $(this).attr("src");
    openPopup("image", imageUrl, true);
  });

  $(document).on(
    "click",
    ".swiper-slide .video-wrapper .video-thumbnail",
    function () {
      var videoId = $(this).data("video-id");
      var videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`;
      openPopup("video", videoUrl);
    }
  );

  // Закриття попапів
  $(document).on(
    "click",
    ".image-popup__overlay, .image-popup__close, .video-popup__overlay, .video-popup__close",
    function () {
      $(".image-popup, .video-popup").fadeOut(300, function () {
        $(this).remove();
      });
    }
  );
});
