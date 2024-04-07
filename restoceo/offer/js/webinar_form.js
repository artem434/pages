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
        // window.location.href = form.find("input[name=success_url]").val();
      },
    });
  }
  return false;
}

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

let cDate = "3 жовтня",
  // Landing id // Online
  cLandingId = "2108311000825356176",
  // Landing id // Online Pro
  cLandingIdPro = "2108311000825356199",
  // es_mail_id
  cMail_id = "",
  // es_id
  cEs_id = "1154",
  // success_url
  cSuccess_url = "https://restoceo.bizconstructor.com/offer/thanks.html";

//  дата скидки (автозамена)
let dataDeadline;
// dataDeadline = foundSale.date;

// Проверка данных с универсального блока (Удаем тут, если удалили с блока)
if (cDate !== "date") {
  $(".cDate").each(function () {
    $(this).html(cDate);
  });
}
if (cLandingId !== "id") {
  $("input[name='landing_id']").val(cLandingId);
  $(".core_price").attr("data-id", cLandingId);
}
if (cLandingIdPro !== "id") {
  $(".pro_price").attr("data-id", cLandingIdPro);
}
if (cMail_id !== "es_mail_id") {
  $("input[name='es_mail_id']").val(cMail_id);
}
if (cEs_id !== "cEs_id") {
  $("input[name='es_id']").val(cEs_id);
}
// if (cSuccess_url !== "success_url") {
//   $("input[name='success_url'], input[name='error_url']").val(cSuccess_url);
// }
if (dataDeadline !== "dataDeadline") {
  $(".data_deadline").each(function () {
    $(this).html(dataDeadline);
  });
}

// Установка цен на пакетах
let data = LP.CORE.getSearchJson();
LP.CORE.getPriceByID(data.landing_id);
$(".package_price").each(function (i, el) {
  LP.CORE.setPriceThanks(
    $(this).data("id"),
    $(this).find(".price-full-redline"),
    $(this).find(".price-discount-big")
  );
});
