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
    console.log(formdata);
    // $.ajax({
    //   type: "POST",
    //   url: "mailer/export.php",
    //   async: false,
    //   data: formdata,
    //   success: function (res) {
    //     setCookie("name", formdata.name, 365);
    //     setCookie("email", formdata.email, 365);
    //     setCookie("phone", formdata.phone, 365);
    //     //window.location.href = form.find("input[name=success_url]").val();
    //   },
    // });
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

$(".header__burger").on("click", function () {
  $(".header").toggleClass("active");
  $("body").toggleClass("fixed");
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

const casesSlider = new Swiper(".cases__content", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
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
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  navigation: {
    nextEl: ".next-video",
    prevEl: ".prev-video",
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
