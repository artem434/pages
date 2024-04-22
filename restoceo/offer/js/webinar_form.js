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
