$(document).ready(function () {
  var utmParams = {
    utm_source: getUrlParameter("utm_source"),
    utm_medium: getUrlParameter("utm_medium"),
    utm_term: getUrlParameter("utm_term"),
    utm_campaign: getUrlParameter("utm_campaign"),
    utm_content: getUrlParameter("utm_content"),
  };

  $.each(utmParams, function (key, value) {
    $("input[name=" + key + "]").val(value);
  });

  // $("input[name=name]").val(getCookie("name"));
  // $("input[name=email]").val(getCookie("email"));
  // $("input[name=phone]").val(getCookie("phone"));

  //var lazyLoadInstance = new LazyLoad();

  $.get("https://ipapi.co/json/", function (obj) {
    // var phoneValue = getCookie("phone")
    //   ? getCookie("phone")
    //   : obj.country_calling_code;
    // $("input[name=phone]").val(phoneValue);

    $("input[name=phone]").intlTelInput({
      defaultCountry: "auto",
      separateDialCode: false,
      nationalMode: false,
      initialCountry: obj.country_code,
      preferredCountries: ["ua", "kz"],
    });
  });

  $("form [type=submit]").on("click", function (e) {
    e.preventDefault();
    var form = $(this).closest("form");
    form.addClass("loading");
    setTimeout(function () {
      form.submit();
    }, 1000);
  });
});

function validate(formid) {
  var form = $(formid);
  form.addClass("loading");
  form.find("input[name=name], input[name=email], input[name=phone]").focus();
  form.find('button[type="submit"]').focus();

  var formdata = {
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
  return false;
}

// SMOOTH SCROLL //
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href*="modal"]')
  .click(function (event) {
    $(".header").removeClass("active");
    $("body").removeClass("fixed");
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        var headerHeight = 0;
        if ($(window).width() < 760) {
          headerHeight = 0;
        }
        $("html, body").animate(
          {
            scrollTop: target.offset().top - headerHeight,
          },
          {
            duration: 1500,
            step: function (now, fx) {
              var newOffset = target.offset().top - headerHeight;
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
      //lazyLoadInstance.update();
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
      //lazyLoadInstance.update();
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

function startCountdown() {
  var minutes = 10;
  var seconds = 0;
  var minutesDisplay = document.getElementById("minutes");
  var secondsDisplay = document.getElementById("seconds");
  console.log("timer");
  var countdown = setInterval(function () {
    if (minutes === 0 && seconds === 0) {
      minutes = 10;
      seconds = 0;
    }
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

startCountdown();

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hideButton();
    } else {
      showButton();
    }
  });
}

function hideButton() {
  var button = document.querySelector(".hero__btn");
  button.style.display = "none";
}

function showButton() {
  var button = document.querySelector(".hero__btn");
  button.style.display = "flex";
}

var observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

var heroBlock = document.getElementById("hero");
if (heroBlock) {
  observer.observe(heroBlock);
}

if (heroBlock && heroBlock.getBoundingClientRect().top < window.innerHeight) {
  hideButton();
} else {
  showButton();
}
