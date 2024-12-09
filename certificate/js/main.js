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
  console.log("1");
  // var form = $(this).closest("form");
  // form.addClass("loading");
  // setTimeout(function () {
  //   form.submit();
  // }, 1000);
});

function validate(formid) {
  var output = false;
  console.log("1");
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

$("select").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("s-hidden");

  $this.wrap('<div class="select"></div>');

  $this.after('<div class="styledSelect"></div');

  var $styledSelect = $this.next("div.styledSelect");

  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
    class: "options",
  }).insertAfter($styledSelect);

  for (var i = 1; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.styledSelect.active").each(function () {
      $(this).removeClass("active").next("ul.options").hide();
    });

    $(this).toggleClass("active").next("ul.options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $(".select").removeClass("error");
    $list.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});

var $listItems = $("ul.options li");
var $form = $("form.form.zoho_url");
var $landingIdInput = $form.find('input[name="landing_id"]');

$listItems.click(function () {
  var relValue = $(this).attr("rel");
  $landingIdInput.val(relValue);
});
$(".program-btn").click(function () {
  var dataRel = $(this).data("rel");

  var $select = $("select");

  $select.val(dataRel);

  var $styledSelect = $select.next("div.styledSelect");
  $styledSelect.text($select.children("option:selected").text());
});

const header = document.querySelector(".header");
let isHeaderVisible = false;

window.addEventListener("scroll", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 767) {
    const currentScrollPosition = window.scrollY;
    const isScrollingDown = currentScrollPosition > 0;

    if (isScrollingDown !== isHeaderVisible) {
      header.style.display = isScrollingDown ? "block" : "none";
      isHeaderVisible = isScrollingDown;
    }
  }
});

const registerSection = document.querySelector("#register");
const button = document.querySelector(".btn-page-fix"); // Замініть "your-button-id" на ідентифікатор вашої кнопки
let isButtonVisible = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const registerSectionTop = registerSection.offsetTop;
  const registerSectionHeight = registerSection.offsetHeight;

  if (
    scrollY >= registerSectionTop &&
    scrollY <= registerSectionTop + registerSectionHeight
  ) {
    if (!isButtonVisible) {
      button.style.display = "none";
      isButtonVisible = true;
    }
  } else {
    if (isButtonVisible) {
      button.style.display = "block";
      isButtonVisible = false;
    }
  }
});
document.querySelector(".letter__btn").addEventListener("click", function () {
  document.querySelector(".letter__close").classList.add("hidden");
  document.querySelector(".letter__btn").classList.add("hidden");
  document.querySelector(".letter__open").classList.remove("hidden");
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
const programmsSlider = new Swiper(".programmms", {
  loop: false,
  spaceBetween: 24,
  slidesPerView: 1,
  effect: "fade", // Додаємо fade-ефект
  fadeEffect: {
    crossFade: true, // Плавний перехід між слайдами
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    init: function () {
      lazyLoadInstance.update();
      updateCustomPagination(this.realIndex); // Оновлення активної вкладки під час ініціалізації
    },
    slideChange: function () {
      updateCustomPagination(this.realIndex); // Оновлення активної вкладки при зміні слайду
    },
  },
});

function updateCustomPagination(activeIndex) {
  document.querySelectorAll(".custom-pagination-tab").forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Додаємо події кліку на кастомні вкладки
document.querySelectorAll(".custom-pagination-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"), 10);
    programmsSlider.loopFix(); // Виправляє стан циклічності перед переходом
    programmsSlider.slideTo(index); // Переходимо на вказаний слайд
  });
});
