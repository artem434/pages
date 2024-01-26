let param = "";
let url =
  "https://choice31.com/handlers/handler_ac/vacancies.php";
let lang = $('.lang-switcher .current-lang a').attr('lang');
let vacancyLinkEng = 'https://choice31.com/en/vacancy-2?vacancy_id=';
let vacancyLinkUkr = 'https://choice31.com/vacancy?vacancy_id=';

// PAGE VACANCIES
if ($(".page-vacancies").length) {
  $(".vacancies__filters .item__title").on("click", function () {
    let item = $(this).closest(".item");
    if (item.hasClass("active")) {
      item.removeClass("active");
    } else {
      $(".vacancies__filters .item.active").removeClass("active");
      item.addClass("active");
    }
  });

  function applyFilters() {
    let checkedFilters = "";
    let filters = $(`[data-filter]`);

    filters.each((index, element) => {
      let checkedItems = $(element).find(".active");
      if (checkedItems.length > 0) {
        let dataFilter = $(element).data("filter").trim();

        checkedItems.each((index, element) => {
          let elementText = $(element).text().trim();
          checkedFilters += `&${dataFilter}[]=${elementText}`;
        });
      }
    });

    param = checkedFilters;

    showVacancies(`${url}?action=vacancies${checkedFilters}`);
  }

  $(".vacancies__filters .item__dropdown").on("click", function (e) {
    let target = $(e.target);
    if (target.closest("li")) {
      $('.vacancies__search input').val(''); // Очищення поля пошуку

      let element = target.closest("li");
      let text = element.text();
      let id = element.data("id");

      if (element.hasClass("active")) {
        element.removeClass("active");
        $(`.${id}`).remove();

        if ($(".vacancies__filters .item__dropdown .active").length == 0) {
          $(".vacancies__filters-checked").css("display", "none");
        }
      } else {
        element.addClass("active");

        $(".vacancies__filters-checked").css("display", "flex");
        $(".vacancies__filters-checked .reset").before(
          `<li class="${id}">
              <span class="close"></span>
              <span class="text">${text}</span>
          </li>`
        );

        $(`.vacancies__filters-checked .${id} .close`).on('click', function () {
          let target = $(this).closest('li');
          let dataId = target.attr('class');
          target.remove();
          $(`.vacancies__filters .item__dropdown [data-id="${dataId}"]`).removeClass('active');


          applyFilters();
        })
      }

      applyFilters();
    }
  });

  $('.vacancies__filters-checked .reset').on('click', function () {
    $(".vacancies__filters-checked").css("display", "none");

    $('.vacancies__filters .item__dropdown li.active').removeClass('active');


    applyFilters();
  })

  function printFilters(arr, name) {
    let filters = "";
    arr.forEach((item, index) => {
      filters += `
                  <li data-id="${name}-${index}">
                      <span class="icon"></span>
                      <div class="text">${item}</div>
                  </li>
                `;
    });
    $(`[data-filter="${name}"] .item__dropdown`).html(filters);
  }

  $.ajax({
    url: `${url}?action=filters`,
    type: "GET",
    success: function (response) {
      let data = JSON.parse(response);

      printFilters(data.filters.skills, "skill");
      printFilters(data.filters.locations, "location");
      printFilters(data.filters.companies, "company");
      printFilters(data.filters.levels, "level");
      printFilters(data.filters.languages, "language");
    },
    error: function (response) {
      console.log("error");
    },
  });

  function showVacancies(url) {
    $.ajax({
      url: url,
      type: "GET",
      success: function (response) {
        let data = JSON.parse(response);

        let vacanciesSubtitle = '';
        if(lang == 'en-US') {
          if (data.total == 0) {
            vacanciesSubtitle = "No vacancies found";
          } else if (data.total == 1) {
            vacanciesSubtitle = `Found ${data.total} vacancy`;
          }else {
            vacanciesSubtitle = `Found ${data.total} vacancies`;
          }
        } else {
          vacanciesSubtitle = `Знайдено ${data.total} вакансі`;

          if (data.total == 0) {
            vacanciesSubtitle = "Вакансій не знайдено";
          } else if (data.total == 1) {
            vacanciesSubtitle += "ю";
          } else if (data.total >= 2 && data.total <= 4) {
            vacanciesSubtitle += "ї";
          } else {
            vacanciesSubtitle += "й";
          }
        }

        $(".vacancies__subtitle").text(vacanciesSubtitle);

        let items = "";

        let btnText = '';
        let vacancyLink = '';
        if(lang == 'en-US') {
          btnText = 'Respond';
          vacancyLink = vacancyLinkEng;
        } else {
          btnText = 'Відгукнутися';
          vacancyLink = vacancyLinkUkr;
        }

        data.vacancies.forEach((vacancy) => {
          items += `
                      <a href="${vacancyLink + vacancy.vacancyId}" class="item">
                          <div class="item__logo" style="background-image: url(https://choice31.com/wp-content/themes/avis/img/vacancies/company/${vacancy.company.slug}.webp)"></div>
                          <div class="item__info item__col">
                              <div class="item__title">${vacancy.vacancyTitle}</div>
                              <div class="item__company">${vacancy.company.name}</div>
                          </div>
                          <div class="item__company item__company--mobile item__col">${vacancy.company.name}</div>
                          <div class="item__location item__col">${vacancy.location[0].name}</div>
                          <div class="btn item__btn vacancies__btn">${btnText}</div>
                      </a>
                  `;
        });

        $(".vacancies__items").html(items);

        showPagination(data.page, data.total, data.limit);
      },
      error: function (response) {
        console.log("error");
      },
    });
  }

  function showSearchList(url) {
    $.ajax({
      url: url,
      type: "GET",
      success: function (response) {
        let data = JSON.parse(response);

        console.log(data);

        let items = "";
        let vacancyLink = '';
        if(lang == 'en-US') {
          vacancyLink = vacancyLinkEng;
        } else {
          vacancyLink = vacancyLinkUkr;
        }

        data.vacancies.forEach((vacancy) => {
          items += `
                      <li>
                        <a href="${vacancyLink + vacancy.vacancyId}">${vacancy.vacancyTitle}</a>
                      </li>
                  `;
        });

        $(".vacancies__search-list").html(items);
        $('.vacancies__search-list').css('display', 'block');
      },
      error: function (response) {
        console.log("error");
      },
    });
  }

  //Функція для виведення пагінації
  function showPagination(page, total, limit) {
    let currentPage = +page;
    let totalPage = Math.ceil(total / limit); //Загальна кількість сторінок
    let vacanciesPagination = "";

    if (totalPage > 1) {
      if (totalPage >= 3 && currentPage - 1 >= 2) {
        vacanciesPagination += `<li>1</li>`;
      }

      if (totalPage >= 4 && currentPage - 1 >= 3) {
        vacanciesPagination += `<li class="dots">...</li>`;
      }

      if (totalPage >= 2 && currentPage - 1 >= 1) {
        vacanciesPagination += `<li class="prev">${currentPage - 1}</li>`;
      }

      vacanciesPagination += `<li class="current">${currentPage}</li>`;

      if (currentPage + 1 <= totalPage) {
        vacanciesPagination += `<li class="next">${currentPage + 1}</li>`;
      }

      if (totalPage >= 4 && currentPage + 3 <= totalPage) {
        vacanciesPagination += `<li class="dots">...</li>`;
      }

      if (totalPage >= 3 && currentPage + 2 <= totalPage) {
        vacanciesPagination += `<li>${totalPage}</li>`;
      }
    }

    $(".vacancies__pagination").html(vacanciesPagination);
  }

  $(".vacancies__pagination").on("click", function (e) {
    let target = $(e.target);
    if (target.is("li:not(li.dots)")) {
      let number = target.text();
      showVacancies(`${url}?action=vacancies${param}&page=${number}`);
    }
  });

  // Пошук
  $('.vacancies__search input').val('');

  $('.vacancies__search input').on('keydown', function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $('.vacancies__search .btn').click();
    }
    if (e.key != "Esc") {
      e.preventDefault();
      $('.vacancies__search-list').css('display', 'none');
    }
    if (e.key != "Enter" && e.key != "Escape" && e.key != "Esc") {
      let value = $('.vacancies__search input').val().trim();
      if(value !== '') {
        showSearchList(`${url}?action=search&search=${value}`);
      }
    }
  });

  $('.vacancies__search .btn').on('click', function(e) {
    e.preventDefault();
    let value = $('.vacancies__search input').val().trim();
    if(value !== '') {
      showVacancies(`${url}?action=search&search=${value}`);
    }
  })

  showVacancies(`${url}?action=vacancies`);
}

// PAGE VACANCY
if ($(".single-vacancy").length) {
    let getUrlParameter = function getUrlParameter(sParam) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  let vacancyId = getUrlParameter('vacancy_id');

  // Зміна урла в lang-switcher
  let langSwitcherHref = $('.lang-switcher .lang-item').not('.current-lang').find('a').attr('href');
  $('.lang-switcher .lang-item').not('.current-lang').find('a').attr('href', `${langSwitcherHref}?vacancy_id=${vacancyId}`);

  // Схожі вакансії
  function showSimilarVacancies(key, value) {
    $.ajax({
      url: `${url}?action=vacancies&${key}[]=${value}`,
      type: "GET",
      success: function (response) {
        let data = JSON.parse(response);

        if(data.vacancies.length > 0) {

          let items = '';
          let href = window.location.href.split('?')[0];
          for(let i = 0; i < data.vacancies.length; i++) {
            items += `
                      <div class="item" data-id=${data.vacancies[i].vacancyId}>
                        <div class="item__info">
                          <a href="${href}?vacancy_id=${data.vacancies[i].vacancyId}" class="item__title">${data.vacancies[i].vacancyTitle}</a>
                          <div class="item__company">${data.vacancies[i].company.name}</div>
                        </div>
                        <div class="item__location item__col">${data.vacancies[i].location[0].name}</div>
                      </div>
                    `;

            if(i == 3) break;
          }

          $('.vacancy__similar-items').html(items);
          $('.vacancy__similar').css('display', 'block');
        }
      },
      error: function (response) {
        console.log("error");
      },
    });
  }
  $.ajax({
    url: `${url}?action=vacancy&id=${vacancyId}`,
    type: "GET",
    success: function (response) {
      let data = JSON.parse(response);

      let vacancyTitle = data.vacancies[0].vacancyTitle
      document.title = vacancyTitle;
      $('.vacancy__title').text(vacancyTitle);
      $('.vacancy__logo').css('background-image', `url(https://choice31.com/wp-content/themes/avis/img/vacancies/company/${data.vacancies[0].company.slug}.webp)`);
      $('.vacancy__name').text(data.vacancies[0].company.name);

      $('.vacancy__column').prepend(`
                                  <div class="vacancy__info-desc">${data.vacancies[0].shortDescription}</div>
                                  <div class="vacancy__info-desc">${data.vacancies[0].desiredSkills}</div>
                                  <div class="vacancy__info-desc">${data.vacancies[0].weExpect}</div>
                                  <div class="vacancy__info-desc">${data.vacancies[0].weOffer}</div>
                                  <div class="vacancy__info-desc">${data.vacancies[0].additionalInfo}</div>
                                `)

      $('.vacancy__btn').attr('href', data.vacancies[0].linkApplication);

      let companyDescription = data.vacancies[0].companyDescription;
      $('.vacancy__company-desc').prepend(`
                                          <div class="vacancy__company-desc-title">${data.vacancies[0].company.name}</div>
                                          ${companyDescription}
                                        `);
      let companyBtnHref = '';
      if(data.vacancies[0].company.slug == 'netpeak') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else if(data.vacancies[0].company.slug == 'ringostat') {
        companyBtnHref = 'https://ringostat.com/uk/';
      } else if(data.vacancies[0].company.slug == 'tonti-laguna-group') {
        companyBtnHref = 'http://tontilaguna.com/';
      } else if(data.vacancies[0].company.slug == 'my-city') {
        companyBtnHref = 'https://mycity.one/';
      } else if(data.vacancies[0].company.slug == 'tonti-laguna-media') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else if(data.vacancies[0].company.slug == 'tonti-laguna-mobile') {
        companyBtnHref = 'https://tontilagunamobile.com/';
      } else if(data.vacancies[0].company.slug == 'saldo-apps') {
        companyBtnHref = 'https://saldoapps.com/';
      } else if(data.vacancies[0].company.slug == 'gladpet') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else if(data.vacancies[0].company.slug == 'choice31') {
        companyBtnHref = 'https://choice31.com/';
      } else if(data.vacancies[0].company.slug == 'serpstat') {
        companyBtnHref = 'https://serpstat.com/uk/';
      } else if(data.vacancies[0].company.slug == 'academy-ocean') {
        companyBtnHref = 'https://academyocean.com/ua';
      } else if(data.vacancies[0].company.slug == 'netpeak-core') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else if(data.vacancies[0].company.slug == 'inweb') {
        companyBtnHref = 'https://inweb.ua/ua/';
      } else if(data.vacancies[0].company.slug == 'netpeak-group') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else if(data.vacancies[0].company.slug == 'kiss-my-apps') {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      } else {
        companyBtnHref = 'https://netpeak.net/uk/ua/';
      }

      $('.vacancy__company-desc-btn').attr('href', companyBtnHref);

      if ($(window).width() > 760) {
        showSimilarVacancies('skill', data.vacancies[0].skill.name);
      }

      $('.vacancy').css('opacity', 1);
    },
    error: function (response) {
      console.log("error");
    },
  });
}
