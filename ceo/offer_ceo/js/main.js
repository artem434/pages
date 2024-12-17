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
