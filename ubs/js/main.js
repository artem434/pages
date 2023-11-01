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
  $("input[name=name]").val("");
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

// $("form [type=sumbit]").on("click", function (e) {
//   e.preventDefault();

//   var form = $(this).closest("form");
//   form.addClass("loading");
//   setTimeout(function () {
//     form.submit();
//   }, 1000);
// });

$("form .subm").on("click", function (e) {
  e.preventDefault();
  var form = $(this).closest("form");
  var submitButton = form.find(".form__btn");
  form.addClass("loading");
  setCookie("name", $('input[name="name"]').val(), 365);
  setCookie("email", $('input[name="email"]').val(), 365);
  setCookie("phone", $('input[name="phone"]').val(), 365);
  submitButton.prop("disabled", true);
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

const clientsSlider = new Swiper(".samit__slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    760: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".samit-next",
    prevEl: ".samit-prev",
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
if (window.innerWidth >= 768) {
  $(".package__more").on("click", function () {
    $(".package__more").parent().toggleClass("active");
  });
  console.log(1);
} else {
  console.log(2);
  $(".package__more, .package__less, .package__btn").on("click", function () {
    $(this).parent().toggleClass("active");
  });
}

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

///таймер

function updateTimer() {
  const now = new Date();
  const currentDay = now.getDay(); // Поточний день тижня (неділя - 0, понеділок - 1, ..., субота - 6)

  // Встановлюємо день неділі (неділя - 0, понеділок - 1, ..., субота - 6)
  const sunday = 0;

  // Обчислюємо різницю в днях до неділі
  let daysUntilSunday = sunday - currentDay;
  if (daysUntilSunday < 0) {
    // Якщо поточний день більший за неділю, то додаємо 7 днів
    daysUntilSunday += 7;
  }

  // Встановлюємо час на 23:59:59
  const targetDate = new Date(now);
  targetDate.setDate(now.getDate() + daysUntilSunday);
  targetDate.setHours(23, 59, 59, 999);

  // Обчислюємо різницю в мілісекундах між поточним часом і кінцевою датою
  const timeDiff = targetDate - now;

  const days = String(Math.floor(timeDiff / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  // Оновлюємо елементи HTML
  $("#days").html(days + " <span>днів</span>");
  $("#hours").html(hours + " <span>годин</span>");
  $("#minutes").html(minutes + " <span>хвилин</span>");
  $("#seconds").html(seconds + " <span>секунд</span>");
}

// Викликаємо функцію спочатку, щоб вона оновила таймер відразу
updateTimer();

// Встановлюємо інтервал для виклику функції кожну секунду
setInterval(updateTimer, 1000);

$(document).ready(function () {
  $("#close-popup").click(function () {
    $("#popup").fadeOut();
    $("#overlay").fadeOut();
  });

  $("#overlay").click(function (event) {
    if (event.target.id === "overlay") {
      $("#popup").fadeOut();
      $("#overlay").fadeOut();
    }
  });
});

// Обработчик клика для всех кнопок
var landingBtns = document.querySelectorAll(".btn-page--active");
landingBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var landingIdInput = document.querySelector(
      '#form input[name="landing_id"]'
    );
    $("#popup").fadeIn();
    $("#overlay").fadeIn();
    localStorage.setItem("text", $("#form").find("input[name=text]").val());

    landingIdInput.value = btn.getAttribute("data-landing-id");
    console.log(landingIdInput.value);
  });
});

$(document).ready(function () {
  $("#partner .btn-page").click(function () {
    localStorage.setItem(
      "text",
      $(" #form-partner").find("input[name=text]").val()
    );
  });
  const storedName = localStorage.getItem("text");

  const spanElement = document.querySelector("#namePlaceholder");

  if (storedName && spanElement) {
    spanElement.textContent = storedName;
  }

  if ($(window).width() <= 768) {
    var $myDiv = $(".btn_fixed-bottom");
    $myDiv.addClass("btn_fixed-bottom-active");
    $(window).scroll(function () {
      var $packages = $("#packages");
      var scrollPosition = $(this).scrollTop();
      var packagesTop = $packages.offset().top;

      if (scrollPosition >= 0 && scrollPosition < packagesTop) {
        $myDiv.addClass("btn_fixed-bottom-active");
      } else {
        $myDiv.removeClass("btn_fixed-bottom-active");
      }
    });
  }
});

const toggleButtons = document.querySelectorAll(".package__more");
const contentElements = document.querySelectorAll(".package__body");

if (window.innerWidth >= 768) {
  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      contentElements.forEach((content) => {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = "100%";
        }
      });
    });
  });
} else {
  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const content = contentElements[index];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = "100%";
      }
    });
  });
}

var listItems = document.querySelectorAll(".register__list li");
var landingIdInput = document.querySelector('.zoho_url [name="landing_id"]');
var packageButtons = document.querySelectorAll(".package__btn");

// Добавьте класс "active" к первому элементу по умолчанию
listItems[0].classList.add("active");
// Установите значение data-id первого элемента в input
landingIdInput.value = listItems[0].getAttribute("data-id");

// Переберите элементы и добавьте обработчик события щелчка для списка
listItems.forEach(function (item) {
  if (item.classList.contains("active")) {
    // Отримуємо значення атрибута "data-name" поточного елемента
    const packageName = item.getAttribute("data-name");

    // Зберігаємо значення "data-name" в локальному сховищі (localStorage)
    localStorage.setItem("packegeNmame", packageName);
  }

  item.addEventListener("click", function () {
    // Удалите класс "active" у всех элементов списка
    listItems.forEach(function (li) {
      li.classList.remove("active");
    });
    const packageName = item.getAttribute("data-name");
    // Добавьте класс "active" к выбранному элементу
    item.classList.add("active");
    // Установите значение data-id выбранного элемента в input
    landingIdInput.value = item.getAttribute("data-id");
    localStorage.setItem("packegeNmame", packageName);
    const submitButton = document.querySelector(".form__btn span");
    if (item.getAttribute("data-id") === "2108311000746741174") {
      // Найдите кнопку с атрибутом data-id="2108311000746741174" и измените ее текст

      if (submitButton) {
        submitButton.textContent = "Взяти участь";
      }
    } else {
      submitButton.textContent = "Зареєструватись";
    }
  });
});

// Переберите кнопки и добавьте обработчик события щелчка для кнопок
packageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var buttonDataId = button.getAttribute("data-id");

    // Найдите соответствующий элемент listItems с тем же data-id и добавьте класс "active"
    listItems.forEach(function (item) {
      if (item.getAttribute("data-id") === buttonDataId) {
        item.classList.add("active");
        landingIdInput.value = buttonDataId;
      } else {
        item.classList.remove("active");
      }
    });
  });
});
