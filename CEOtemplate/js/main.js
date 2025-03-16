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
  speed: 2000,
  loop: true,
  spaceBetween: 24,
  slidesPerView: 2,
  freeModeMomentum: false,
  disableOnInteraction: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
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

const expertsSlider = new Swiper(".experts__list", {
  centeredSlides: true,
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
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".title").forEach((title) => {
  gsap.from(title, {
    opacity: 0,
    y: 50, // Зміщення вниз на старті
    duration: 1, // Тривалість анімації
    ease: "power2.out",
    scrollTrigger: {
      trigger: title, // Для кожного заголовка окремий тригер
      start: "top 80%", // Анімація почнеться, коли заголовок буде в цій зоні
      toggleActions: "play none none reverse", // При скролі назад - прибирає ефект
    },
  });
});

gsap.from(".problems__item ", {
  opacity: 0,
  y: 50, // Спочатку знизу
  scale: 0.8, // Трохи менший розмір
  duration: 0.6,
  stagger: 0.2, // Затримка між елементами для ефекту хвилі
  ease: "back.out(1.7)", // Підстрибування при появі
  scrollTrigger: {
    trigger: ".problems__items",
    start: "top 80%", // Початок анімації при появі в зоні видимості
    toggleActions: "play none none reverse",
  },
});

function animateElement(selector) {
  gsap.from(selector, {
    opacity: 0,
    y: 60,
    boxShadow: "0px 30px 20px rgba(0, 0, 0, 0.3)",
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}

// Використовуємо функцію для обох блоків
animateElement(".issues");
animateElement(".info");
// Додати плавний перехід для зміни властивостей

let cards = gsap.utils.toArray(".card");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".stack-section",
    start: "top 10px",
    end: `+=${cards.length * 40}%`,
    scrub: true,
    pin: true,
  },
});

// Перша картка завжди видима
gsap.set(cards[0], {
  opacity: 1,
  pointerEvents: "auto",
});

// Перша картка завжди видима та не змінюється
tl.to(
  cards[0],
  {
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
  },
  0
);

cards.forEach((card, i) => {
  if (i !== 0) {
    // Всі картки, крім першої
    gsap.set(card, {
      opacity: 1, // Спочатку приховані
      y: 492, // Починають нижче, щоб виїжджали вгору
      scale: 0.9, // Трохи зменшені для ефекту появи
    });

    tl.to(
      card,
      {
        opacity: 1,
        y: i * 10, // Виїжджають вгору
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
        zIndex: 100, // Додаємо z-index 100
      },
      `+=${i * 0.5}`
    );
  }
});

// Створюємо анімацію для кожного блока змін
if (window.matchMedia("(max-width: 768px)").matches) {
  gsap.utils.toArray(".change").forEach((change, i) => {
    // Анімація прозорості та зміщення
    gsap.from(change, {
      opacity: 0.5, // Початкова прозорість
      y: 50, // Початкове зміщення вниз
      duration: 1, // Тривалість анімації
      ease: "power2.out", // Тип easing
      scrollTrigger: {
        trigger: change, // Кожен блок змін має свій trigger
        start: "top 30%", // Анімація починається, коли верх блока потрапляє в зону видимості
        end: "top 0%", // Анімація закінчується, коли верх блока виходить із зони видимості
        scrub: true, // Синхронізує анімацію з прокручуванням
        toggleActions: "play none none reverse", // Відтворює анімацію при прокручуванні
      },
    });

    // Для того, щоб блоки плавно наїжджали один на одного, можна використовувати затримку:
    gsap.to(change, {
      y: 0, // Зміщення на -50px, щоб блоки наїжджали один на одного
      stagger: 0.3, // Затримка між анімаціями
      scrollTrigger: {
        trigger: change, // Тригер для кожного блоку
        start: "top 30%", // Коли блок потрапляє в зону видимості
        end: "top 0%", // Анімація закінчується, коли блок виходить із зони видимості
        scrub: true, // Синхронізує анімацію з прокручуванням
      },
    });

    // Зміна кольору до червоного

    // Якщо ви хочете змінювати колір фону
    gsap.to(change, {
      backgroundColor: "#df0013", // Зміна кольору фону до червоного
      duration: 1,
      scrollTrigger: {
        trigger: change,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
  document.addEventListener("DOMContentLoaded", () => {
    const changes = document.querySelectorAll(".change");

    // Анімація для першого елемента (за замовчуванням)
    const firstChange = document.querySelector(".change.active");
    gsap.to(firstChange, { width: 512, duration: 0.3, ease: "power2.out" });
    gsap.to(firstChange.querySelector(".change__body"), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      maxHeight: "210px",
    });

    changes.forEach((change) => {
      change.addEventListener("click", () => {
        const active = document.querySelector(".change.active");

        if (active !== change) {
          gsap.to(active, { width: 248, duration: 0.3, ease: "power2.out" });
          gsap.to(active.querySelector(".change__body"), {
            opacity: 0,
            y: 10,
            duration: 0.3,
            maxHeight: 0,
          });

          active.classList.remove("active");

          change.classList.add("active");
          gsap.to(change, { width: 512, duration: 0.3, ease: "power2.out" });
          gsap.to(change.querySelector(".change__body"), {
            opacity: 1,
            y: 0,
            duration: 0.3,
            maxHeight: "210px",
          });
        }
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.querySelector(".programs__items");
  const modules = document.querySelectorAll(".program");
  const btnPage = document.getElementById("programs-btn");

  let isExpanded = false;

  function getCollapsedHeight() {
    return window.innerWidth <= 768 ? "600px" : "432px";
  }

  btnPage.addEventListener("click", () => {
    if (!isExpanded) {
      // Відкриваємо всі модулі
      gsap.to(itemsContainer, {
        height: "auto",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          modules.forEach((module) => (module.style.display = "flex"));
        },
      });

      gsap.to(modules, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.2,
      });

      btnPage.querySelector("span").textContent = "Згорнути модулі";
    } else {
      // Закриваємо модулі з урахуванням розміру екрану
      gsap.to(modules, {
        opacity: (i) => (i < 2 ? 1 : i === 2 ? 0.5 : 0),
        filter: (i) => (i === 2 ? "blur(2px)" : "blur(0px)"),
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(itemsContainer, {
        height: getCollapsedHeight(),
        duration: 0.6,
        ease: "power2.in",
      });

      btnPage.querySelector("span").textContent = "Всі модулі програми";
    }

    isExpanded = !isExpanded;
  });
});
document.querySelectorAll(".btn-page--description").forEach((btn) => {
  btn.addEventListener("click", function () {
    const formatItem = this.closest(".item").cloneNode(true);
    const popup = document.querySelector(".popup");
    const popupBody = document.querySelector(".popup__body");

    // Очищаємо попередній контент і додаємо клонований блок
    popupBody.innerHTML = "";
    popupBody.appendChild(formatItem);

    // Блокуємо скролл
    document.body.classList.add("no-scroll");

    // Відкриваємо попап з анімацією GSAP
    gsap.to(popup, { opacity: 1, visibility: "visible", duration: 0.5 });
    gsap.from(".popup__content", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Закриття попапа при кліку на кнопку в клонованому елементі
    popupBody
      .querySelector(".btn-page--description")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
      });
  });
});

// Закриття попапа при кліку на .popup__close
document.querySelector(".popup__close").addEventListener("click", closePopup);

function closePopup() {
  gsap.to(".popup", {
    opacity: 0,
    visibility: "hidden",
    duration: 0.5,
    onComplete: () => {
      // Розблокуємо скролл після анімації
      document.body.classList.remove("no-scroll");
    },
  });
}
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
gsap.from(".items", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".items",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".item--online", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".format",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".item--offline", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".format",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(".company__item", {
  opacity: 0,
  y: 50,
  stagger: 0.2, // Затримка між елементами
  duration: 1,
  scrollTrigger: {
    trigger: ".company__text",
    start: "top 80%", // Коли текст компанії входить в область видимості
    toggleActions: "play none none reverse",
  },
});
