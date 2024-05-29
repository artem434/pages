<!DOCTYPE html>
<html lang="uk-UA">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>
      CEO | Інтенсивна освітня програма для керівників | Бізнес-Конструктор
    </title>
    <!-- SEO-->
    <meta
      property="og:title"
      content="CEO | Інтенсивна освітня програма для керівників | Бізнес-Конструктор"
    />
    <meta
      property="og:description"
      content="Ефективна та концентрована освітня програма для навчання перших осіб компанії"
    />
    <meta property="og:image" content="img/og-image.png" />
    <meta property="og:url" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <link rel="stylesheet" href="css/libs.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link
      rel="icon"
      href="https://bizconstructor.com/ua/wp-content/uploads/sites/8/2019/08/cropped-Frame-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      href="https://bizconstructor.com/ua/wp-content/uploads/sites/8/2019/08/cropped-Frame-192x192.png"
      sizes="192x192"
    />
    <link
      rel="apple-touch-icon-precomposed"
      href="https://bizconstructor.com/ua/wp-content/uploads/sites/8/2019/08/cropped-Frame-180x180.png"
    />
    <meta
      name="msapplication-TileImage"
      content="https://bizconstructor.com/ua/wp-content/uploads/sites/8/2019/08/cropped-Frame-270x270.png"
    />
    <script src="js/modernizr-custom.js"></script>

    <!-- Meta Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "422318891243887");
      fbq("track", "PageView");
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=422318891243887&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->
    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-TZ48NNJ");
    </script>
    <!-- End Google Tag Manager -->

    <!-- clarity code -->
    <script type="text/javascript">
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "hxq8cxegar");
    </script>
    <!-- end clarity code -->
    <!-- Start VWO Async SmartCode -->
    <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
    <script type="text/javascript" id="vwoCode">
      window._vwo_code ||
        (function () {
          var account_id = 780161,
            version = 2.0,
            settings_tolerance = 2000,
            hide_element = "body",
            hide_element_style =
              "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important",
            /* DO NOT EDIT BELOW THIS LINE */
            f = false,
            w = window,
            d = document,
            v = d.querySelector("#vwoCode"),
            cK = "_vwo_" + account_id + "_settings",
            cc = {};
          try {
            var c = JSON.parse(
              localStorage.getItem("_vwo_" + account_id + "_config")
            );
            cc = c && typeof c === "object" ? c : {};
          } catch (e) {}
          var stT = cc.stT === "session" ? w.sessionStorage : w.localStorage;
          code = {
            use_existing_jquery: function () {
              return typeof use_existing_jquery !== "undefined"
                ? use_existing_jquery
                : undefined;
            },
            library_tolerance: function () {
              return typeof library_tolerance !== "undefined"
                ? library_tolerance
                : undefined;
            },
            settings_tolerance: function () {
              return cc.sT || settings_tolerance;
            },
            hide_element_style: function () {
              return "{" + (cc.hES || hide_element_style) + "}";
            },
            hide_element: function () {
              return typeof cc.hE === "string" ? cc.hE : hide_element;
            },
            getVersion: function () {
              return version;
            },
            finish: function () {
              if (!f) {
                f = true;
                var e = d.getElementById("_vis_opt_path_hides");
                if (e) e.parentNode.removeChild(e);
              }
            },
            finished: function () {
              return f;
            },
            load: function (e) {
              var t = this.getSettings(),
                n = d.createElement("script"),
                i = this;
              if (t) {
                n.textContent = t;
                d.getElementsByTagName("head")[0].appendChild(n);
                if (!w.VWO || VWO.caE) {
                  stT.removeItem(cK);
                  i.load(e);
                }
              } else {
                n.fetchPriority = "high";
                n.src = e;
                n.type = "text/javascript";
                n.onerror = function () {
                  _vwo_code.finish();
                };
                d.getElementsByTagName("head")[0].appendChild(n);
              }
            },
            getSettings: function () {
              try {
                var e = stT.getItem(cK);
                if (!e) {
                  return;
                }
                e = JSON.parse(e);
                if (Date.now() > e.e) {
                  stT.removeItem(cK);
                  return;
                }
                return e.s;
              } catch (e) {
                return;
              }
            },
            init: function () {
              if (d.URL.indexOf("__vwo_disable__") > -1) return;
              var e = this.settings_tolerance();
              w._vwo_settings_timer = setTimeout(function () {
                _vwo_code.finish();
                stT.removeItem(cK);
              }, e);
              var t = d.currentScript,
                n = d.createElement("style"),
                i = this.hide_element(),
                r = t && !t.async && i ? i + this.hide_element_style() : "",
                c = d.getElementsByTagName("head")[0];
              n.setAttribute("id", "_vis_opt_path_hides");
              v && n.setAttribute("nonce", v.nonce);
              n.setAttribute("type", "text/css");
              if (n.styleSheet) n.styleSheet.cssText = r;
              else n.appendChild(d.createTextNode(r));
              c.appendChild(n);
              this.load(
                "https://dev.visualwebsiteoptimizer.com/j.php?a=" +
                  account_id +
                  "&u=" +
                  encodeURIComponent(d.URL) +
                  "&vn=" +
                  version
              );
            },
          };
          w._vwo_code = code;
          code.init();
        })();
    </script>
    <!-- End VWO Async SmartCode -->
  </head>

  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TZ48NNJ"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="wrapper">
      <header class="header" id="header">
        <div class="header__container">
          <a class="header__logo" href="https://ceo.bizconstructor.com/new"></a>
          <ul class="header__menu">
            <li>
              <a href="#program">Структура програми</a>
            </li>
            <li>
              <a href="#expert">Експерт</a>
            </li>
            <li>
              <a class="phone" href="tel:+380931701239"
                >+38 ( 093 ) 170 12 39</a
              >
            </li>
            <li class="btn">
              <a href="#register">Реєстрація</a>
            </li>
          </ul>
          <div class="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <section class="hero" id="hero">
        <div class="hero__container">
          <div class="hero__content">
            <p class="hero__title">
              Інтенсивна освітня <br />
              програма для <br />
              <span>керівників бізнесу</span>

              <!-- <strong>12 березня</strong> -->
            </p>
            <h1>CEO</h1>
            <div class="hero__text">
              <p class="hero__subtitle">
                Стань еталонним лідером <br />
                для своєї компанії
              </p>
              <!-- <div class="hero__date">5 вересня</div> -->
            </div>

            <a class="hero__btn btn_fixed-bottom-hidden" href="#register"
              >ЗАРЕЄСТРУВАТИСЯ</a
            >
          </div>
          <div class="hero__images">
            <div class="hero__image_bg d-none d-xl-block"></div>
            <div class="hero__form">
              <form class="form zoho_url" id="form" method="post">
                <div class="loader"></div>
                <p class="form__title">
                  Тільки для учасників ефіру діє <span>знижка 40%</span>
                </p>
                <div class="form__package-body">
                  <ul class="form__package">
                    <li>
                      <div
                        class="packages-btns__pack-name tabs__tab core_price"
                        data-id=""
                      >
                        <span>CORE</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="packages-btns__pack-name tabs__tab pro_price"
                        data-id=""
                      >
                        <span>PRO</span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="packages-btns__pack-name tabs__tab premium_price"
                        data-id=""
                      >
                        <span>PREMIUM</span>
                      </div>
                    </li>
                  </ul>
                  <div class="hero__form_timer">
                    <div class="hero__timer_item">
                      <div class="time minutes">10</div>
                      <span>хв</span>
                    </div>
                    <div class="hero__timer_item">
                      <div class="time seconds">00</div>
                      <span>сек</span>
                    </div>
                    <div class="hero__timer_item">
                      <div class="time milliseconds">00</div>
                      <span>міл</span>
                    </div>
                  </div>
                </div>

                <label class="input__wrap">
                  <input
                    class="input"
                    name="name"
                    type="text"
                    placeholder="Твоє ім’я"
                    required=""
                  />
                </label>
                <label class="input__wrap">
                  <input
                    class="input"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Твій номер телефону"
                    required=""
                  />
                </label>
                <label class="input__wrap">
                  <input
                    class="input"
                    name="email"
                    type="email"
                    placeholder="Твій email"
                    required=""
                  />
                </label>
                <div class="hidden">
                  <input type="hidden" name="ref" value="" autocomplete="off" />
                  <input type="hidden" name="ga" value="" autocomplete="off" />
                  <input
                    type="hidden"
                    name="ym_uid"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_source"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_medium"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_term"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_content"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_campaign"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="google_client_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="landing_id"
                    value=""
                    autocomplete="off"
                  />
                  <!-- Landing_id-->
                  <input
                    type="hidden"
                    name="es_mail_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="convert_in_zoho"
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="es_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="token"
                    value="LapQMWHF9k5QPPGRkfRnAtACAGwUcX2tkaVgyDuQe76crMGnrU"
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="success_url"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="error_url"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="false"
                    autocomplete="off"
                  />
                  <input type="hidden" name="send_to_gf" value="gf_ceo_offer" />
                </div>
                <button class="form__btn subm" type="submit">
                  ЗАЛИШИТИ ЗАЯВКУ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="line" id="line">
        <div class="line__slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
            <div class="swiper-slide">БІЗНЕС-КОНСТРУКТОР</div>
          </div>
        </div>
      </section>
      <section class="format" id="format">
        <div class="format__table">
          <div class="container">
            <h2 class="title title--big">
              Формат участі
              <span>в програмі </span>
            </h2>
            <div class="format__packeges">
              <p>CORE</p>
              <p>PRO</p>
              <p>PREMIUM</p>
            </div>
            <table>
              <tr>
                <td>Навчання в онлайн-форматі</td>
                <td class="text">3 міс.</td>
                <td class="text">3 міс.</td>
                <td class="text">4 міс.</td>
              </tr>
              <tr>
                <td>Кількість модулів програми</td>
                <td class="text">13</td>
                <td class="text">13</td>
                <td class="text">13</td>
              </tr>
              <tr>
                <td>Доступ до матеріалів програми після її завершення</td>
                <td class="text">2 міс.</td>
                <td class="text">3 міс.</td>
                <td class="text">12 міс.</td>
              </tr>
              <tr>
                <td>Case study: відповіді на запитання від експерта</td>
                <td class="text text--small">
                  watch only 
                </td>
                <td ></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Доступ до практичних матеріалів: інструкцій, чек-листів та
                  шаблонів
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Сертифікат про проходження навчання на програмі</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Супровід куратором по організаційно-технічним питанням
                  протягом навчання
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Закрита група в Telegram для нетворкінгу з учасниками програми
                  з підтримкою куратора 
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Воркшопи по розробору кейсів з бізнес-консультантами та
                  експертами
                </td>
                <td class="text">в записі</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Індивідуальний зворотний зв'язок від бізнес-консультанта по
                  практичним завданням програми
                </td>
                <td class="no-active"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                Додатковий модуль про залучення інвестицій 
                </td>
                <td class="no-active"></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>
                Додаткові три модулі програми про міжнародне масштабування бізнесу, HR-маркетинг і бренд роботодавця, управління проектами 
                </td>
                <td class="no-active"></td>
                <td class="no-active"></td>
                <td></td>
              </tr>
              <tr>
                <td>
                Бонусний модуль “Особистий бренд власника бізнесу”
                <td class="no-active"></td>
                <td class="no-active"></td>
                <td></td>
              </tr>
              <tr>
                <td>
                Доступ до зустрічей Case study (відповіді на запитання від Кирила Куницького) протягом року
                <td class="no-active"></td>
                <td class="no-active"></td>
                <td></td>
              </tr>
              <tr>
                <td>
                Навчання на програмі "Ефективний керівник" (пакет PRO) для вашого топменеджера
                <td class="no-active"></td>
                <td class="no-active"></td>
                <td></td>
              </tr>
            </table>
            <div class="format__btns">
              <a id="btn-core" href="#register" data-package="core">Замовити</a>
              <a id="btn-pro" href="#register" data-package="pro">Замовити</a>
              <a id="btn-premium" href="#register" data-package="premium"
                >Замовити</a
              >
            </div>
          </div>
        </div>
      </section>
      <section class="about" id="about">
        <div class="about__container">
          <div class="about__info">
            <p class="about__info_text">
              Цей 3-місячний курс дозволить тобі в найкоротші терміни здобути
              всі необхідні знання та компетенції, які дозволять тобі стати
              еталонним CEO для своєї компанії.
            </p>
            <ul class="about__info_list">
              <li>3 місяці навчання в онлайн форматі</li>
              <li>Індивідуальний експертний супровід</li>
              <li>Практичні завдання та шаблони документів</li>
              <li>Робота в професійному оточенні однодумців</li>
              <li>
                Сертифікат про проходження <br />
                програми
              </li>
            </ul>
          </div>
          <h2 class="about__slogan">
            Так швидко
            <span
              >твій професійний <br />
              рівень
            </span>
            ще ніколи не зростав
          </h2>
        </div>
      </section>
      <section class="for" id="for">
        <div class="for__container">
          <div class="for__block">
            <div
              class="for__block_decor lazy"
              data-bg="img/for__block_decor.svg"
            ></div>
            <h2 class="for__title"><span>ДЛЯ КОГО</span> ПРОГРАМА</h2>
            <div class="for__items">
              <div class="item">
                <h3 class="item__title">Керівники</h3>
                <p class="item__text">
                  які прагнуть вирости професійно та карʼєрно як управлінці
                </p>
              </div>
              <div class="item">
                <h3 class="item__title">Власники бізнесу</h3>
                <p class="item__text">
                  які прагнуть більш ефективно керувати своїм бізнесом або
                  виростити CEO всередині компанії
                </p>
              </div>
              <div class="item">
                <h3 class="item__title">Діючі CEO,</h3>
                <p class="item__text">
                  що прагнуть в короткі терміни значно підвищити рівень власних
                  компетенцій
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="results" id="results">
        <div class="results__container">
          <h2 class="results__title">
            <span>ПІСЛЯ НАВЧАННЯ</span> НА ПРОГРАМІ ТИ:
          </h2>
          <div class="results__items">
            <div class="item">
              <h3 class="item__number">01</h3>
              <p class="item__text">
                <b>Чітко зрозумієш цілі та завдання позиції СЕО</b> та значно
                підвищиш ефективність свого <br />
                робочого процесу
              </p>
            </div>
            <div class="item">
              <h3 class="item__number">02</h3>
              <p class="item__text">
                <b
                  >Навчишся будувати <br />
                  стратегію компанії</b
                >
                та організовувати високу дисципліну реалізації стратегічних
                проектів
              </p>
            </div>
            <div class="item">
              <h3 class="item__number">03</h3>
              <p class="item__text">
                <b
                  >Сформуєш комплексне розуміння діяльності <br />
                  бізнесу як системи</b
                >
                та навчишся налагоджувати ефективну взаємодію всіх елементів
              </p>
            </div>
            <div class="item">
              <h3 class="item__number">04</h3>
              <p class="item__text">
                <b>Навчишся тримати стратегічний фокус</b> без надмірного
                залучення <br />
                в операційні процеси
              </p>
            </div>
            <div class="item">
              <h3 class="item__number">05</h3>
              <p class="item__text">
                <b
                  >Опануєш методи <br />
                  побудови сильної <br />
                  команди</b
                >
                та значно підвищиш якість взаємодії в команді
              </p>
            </div>
            <div class="item">
              <h3 class="item__number">06</h3>
              <p class="item__text">
                <b
                  >Впровадиш інструменти управління всіма <br />
                  ключовими функціями бізнесу <br
                /></b>
                та навчишся будувати <br />
                системні та прибуткові компанії
              </p>
            </div>
          </div>
          <div class="results__block">
            <p class="results__block_title">
              Програма <span>« <b>Ceo</b> »</span>
            </p>
            <div class="results__block_content">
              <p>
                значно перевищує за своєю ефективністю та практичністю більшість
                існуючих MBA-програм.
              </p>
              <p>
                Всі інструменти, які ти будеш вивчати, поєднані в єдину
                комплексну систему і викладаються в максимально практичній
                формі.
              </p>
              <a class="results__block_btn" href="#register">ЗАРЕЄСТРУВАТИСЯ</a>
            </div>
          </div>
        </div>
      </section>
      <section class="decor" id="decor">
        <div class="decor__image lazy" data-bg="img/decor.svg"></div>
      </section>

      <?php include 'program.php' ?>

      <section class="expert" id="expert">
        <div class="expert__container">
          <div class="expert__content">
            <p class="expert__uptitle">Експерт програми</p>
            <p class="expert__name">КИРИЛО <b>КУНИЦЬКИЙ</b></p>
            <p class="expert__prof">
              Засновник міжнародної <br />освітньо-консалтингової компанії
              «Бізнес-Конструктор»
            </p>
            <ul class="expert__bio">
              <li>
                Бізнесмен із 20-річним досвідом управління компаніями у сфері
                логістики, туризму, постачання промислового обладнання,
                роздрібної торгівлі, виробництва ювелірних <br />
                прикрас та IT.
              </li>
              <li>
                Протягом останніх 10 років Кирило особисто консультує власників
                та топ-менеджмент топових компаній (Епіцентр, Шериф, Планета
                Кіно, Золотий Вік, G.Bar, Gastro Family, Taryan Group, KAN
                Development, MTI, Ultra Group та багато інших).
              </li>
              <li>
                Візитна картка Кирила – власні унікальні технології ведення
                бізнесу, які працюють не тільки в його компаніях, а й успішно
                впроваджено більш ніж 25 000 підприємств, що є клієнтами
                компанії «Бізнес-Конструктор».
              </li>
            </ul>
          </div>
          <div class="expert__photo">
            <div class="photo lazy" data-bg="img/expert__photo.jpg"></div>
          </div>
        </div>
      </section>

      <section class="register" id="register">
        <div class="register__container">
          <p class="register__title">
            Навчись будувати системну компанію та стань кращим CEO в своїй
            галузі
          </p>
          <div class="block">
            <div class="block__content">
              <p class="block__title">ЗАЛИШ <b>ЗАЯВКУ</b></p>
              <p class="block__subtitle">
                НА ПРОГРАМУ «СЕО» <br />
                НА СПЕЦІАЛЬНИХ УМОВАХ та отримай бонус
              </p>
              <ul class="block__info">
                <li>
                  <p>онлайн</p>
                </li>
                <li>
                  <p>3 місяці</p>
                </li>
                <!-- <li>
                  <p>12 березня</p>
                </li> -->
              </ul>
            </div>
            <div class="block__form">
              <form class="form zoho_url" id="form" method="post">
                <div class="loader"></div>
                <ul class="form__package">
                  <li>
                    <div
                      class="packages-btns__pack-name tabs__tab core_price"
                      data-id=""
                    >
                      <span>CORE</span>
                    </div>
                  </li>
                  <li>
                    <div
                      class="packages-btns__pack-name tabs__tab pro_price"
                      data-id=""
                    >
                      <span>PRO</span>
                    </div>
                  </li>
                  <li>
                    <div
                      class="packages-btns__pack-name tabs__tab premium_price"
                      data-id=""
                    >
                      <span>PREMIUM</span>
                    </div>
                  </li>
                </ul>

                <p class="form__title">Реєстрація</p>
                <label class="input__wrap">
                  <input
                    class="input"
                    name="name"
                    type="text"
                    placeholder="Твоє ім’я"
                    required=""
                  />
                </label>
                <label class="input__wrap">
                  <input
                    class="input"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Твій номер телефону"
                    required=""
                  />
                </label>
                <label class="input__wrap">
                  <input
                    class="input"
                    name="email"
                    type="email"
                    placeholder="Твій email"
                    required=""
                  />
                </label>
                <div class="hidden">
                  <input type="hidden" name="ref" value="" autocomplete="off" />
                  <input type="hidden" name="ga" value="" autocomplete="off" />
                  <input
                    type="hidden"
                    name="ym_uid"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_source"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_medium"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_term"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_content"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="utm_campaign"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="google_client_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="landing_id"
                    value=""
                    autocomplete="off"
                  />
                  <!-- Landing_id-->
                  <input
                    type="hidden"
                    name="es_mail_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="convert_in_zoho"
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="es_id"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="token"
                    value="LapQMWHF9k5QPPGRkfRnAtACAGwUcX2tkaVgyDuQe76crMGnrU"
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="success_url"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="error_url"
                    value=""
                    autocomplete="off"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="false"
                    autocomplete="off"
                  />
                  <input type="hidden" name="send_to_gf" value="gf_ceo_offer" />
                </div>
                <button class="form__btn subm" type="submit">
                  ЗАЛИШИТИ ЗАЯВКУ
                </button>
                <p class="form__agree">
                  Натискаючи кнопку «Залишити заявку», ти даєш згоду на обробку
                  твоїх персональних даних згідно з
                  <a href="http://privacy.bizconstructor.com/"
                    >Політикою конфіденційності</a
                  >.
                  <!-- <a href="http://refund.bizconstructor.com/">Політика повернення</a> -->
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="how" id="how">
        <div class="how__image lazy" data-bg="img/how__image.svg"></div>
        <div class="how__container">
          <h2 class="how__title">
            <span>ЯК ПРОХОДИТЬ НАВЧАННЯ</span>
          </h2>
          <div class="how__items">
            <div class="item">
              <p class="item__title">
                НАВЧАЄШСЯ ОНЛАЙН У БУДЬ-ЯКОМУ <br />
                МІСЦІ В БУДЬ-ЯКИЙ ЧАС
              </p>
              <div class="item__text">
                Все навчання відбувається в зручному онлайн-кабінеті, де ти
                щотижня отримуєш доступ до нового модуля програми (перегляд
                матеріалів займає 2-3 години на тиждень).
              </div>
            </div>
            <div class="item">
              <p class="item__title">
                ВИКОНУЄШ ЗАВДАННЯ ТА ЗАКРІПЛЮЄШ <br />
                ЗНАННЯ НА ПРАКТИЦІ
              </p>
              <div class="item__text">
                Після перегляду кожного модулю ти проходиш невеличке тестування,
                після чого отримуєш практичні завдання, які допоможуть тобі
                закріпити нову навичку. Завдання можуть виконуватись як на базі
                неіснуючої компанії, так і на базі реального діючого бізнесу.
              </div>
            </div>
            <div class="item">
              <p class="item__title">
                ОТРИМУЄШ СУПРОВІД ПРОФЕСІЙНОГО <br />
                БІЗНЕС-КОНСУЛЬТАНТА
              </p>
              <div class="item__text">
                Всі 3 місяці тебе супроводжує професійний консультант
                «Бізнес-Конструктор», який допомагає тобі доводити всі завдання
                до ідеалу, а також знаходити відповіді на свої запитання.
              </div>
            </div>
            <div class="item">
              <p class="item__title">
                ЩОТИЖНЯ МАЄШ МОЖЛИВІСТЬ РОЗБИРАТИ СВІЙ КЕЙС З ГОЛОВНИМ ЕКСПЕРТОМ
              </p>
              <div class="item__text">
                Щотижня Кирило Куницький проводить онлайн майстер-групи в ZOOM,
                на яких розбирає всі наявні питання та допомагає знаходити
                найбільш ефективні рішення.
              </div>
            </div>
          </div>
          <a class="how__btn" href="#register">ХОЧУ НА ПРОГРАМУ</a>
        </div>
      </section>

      <section class="company" id="company">
        <div class="company__container">
          <div
            class="company__decor lazy"
            data-bg="img/company__decor.svg"
          ></div>
          <h2 class="company__title">
            <span>ПРО НАС</span>
            <b
              >«Бізнес-
              <br />
              <i>Конструктор»</i>
            </b>
          </h2>
          <p class="company__text">
            — це міжнародна освітньо-консалтингова компанія. Ми допомагаємо
            власникам бізнесу та топ-менеджменту систематизувати роботу своїх
            компаній за допомогою інноваційних освітньо-консалтингових
            продуктів, створених на методології Кирила Куницького.
            <br />
            <br />Завдяки багаторічній практиці роботи з тисячами компаній та
            постійному вивченню найкращого світового досвіду, ми створили
            методологію систематизації бізнесу, яка дозволяє в найкоротші
            терміни значно підняти ефективність роботи будь-якої компанії.
          </p>
          <div class="company__items">
            <div class="item">
              <p class="item__title">20 000+</p>
              <p class="item__text">клієнтів</p>
            </div>
            <div class="item">
              <p class="item__title">10 <span>років</span></p>
              <p class="item__text">на ринку, працюємо з 2013 року</p>
            </div>
            <div class="item">
              <p class="item__title">20+</p>
              <p class="item__text">країн, в яких працюємо</p>
            </div>
            <div class="item">
              <p class="item__title">25 000+</p>
              <p class="item__text">випускників освітніх програм</p>
            </div>
            <div class="item">
              <p class="item__title">400+</p>
              <p class="item__text">проведених івентів</p>
            </div>
          </div>
        </div>
      </section>
      <section class="clients" id="clients">
        <div class="clients__container">
          <h2 class="clients__title">Серед наших клієнтів</h2>
          <div class="clients__slider swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/1.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/2.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/3.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/4.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/5.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/6.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/7.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/8.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/10.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/11.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/12.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/13.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/14.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/15.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/16.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/17.png"
              ></div>
              <div
                class="swiper-slide logo lazy"
                data-bg="img/clients/18.png"
              ></div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>
      <section class="footer" id="footer">
        <!-- <div class="footer__decor footer__decor--1 lazy" data-bg="img/footer__decor--1.png"></div>
      <div class="footer__decor footer__decor--2 lazy" data-bg="img/footer__decor--2.png"></div> -->
        <div class="footer__container">
          <div class="footer__menu">
            <h5 class="footer__menu_title">Корисно</h5>
            <ul class="footer__menu_list">
              <li>
                <a
                  href="http://bizconstructor.com/about?_ga=2.150560566.1675371198.1664796566-206334048.1655729050"
                  >Про Нас</a
                >
              </li>
              <li>
                <a
                  href="http://bizconstructor.com/blog?_ga=2.150631350.1675371198.1664796566-206334048.1655729050"
                  >Блог Бізнес-Конструктор</a
                >
              </li>
              <li>
                <a
                  href="http://www.kunitsky.com/?_ga=2.150631350.1675371198.1664796566-206334048.1655729050"
                  >Блог Кирила Куницького</a
                >
              </li>
              <li>
                <a
                  href="https://www.work.ua/jobs/by-company/448901?_ga=2.153252920.1675371198.1664796566-206334048.1655729050"
                  >Робота в Бізнес-Конструктор</a
                >
              </li>
            </ul>
          </div>
          <div class="footer__links">
            <h5 class="footer__links_title">Клієнтам</h5>
            <ul class="footer__menu_list">
              <li>
                <!-- <a href="http://refund.bizconstructor.com/ua?_ga=2.84367262.645259001.1658240152-892051805.1657004770">Умови повернення коштів</a> -->
              </li>
              <li>
                <a
                  href="http://privacy.bizconstructor.com/ua/?_ga=2.153252920.1675371198.1664796566-206334048.1655729050"
                  >Політика конфіденційності</a
                >
              </li>
              <li>
                <a
                  href="http://terms-conditions.bizconstructor.com/ua?_ga=2.75242514.1675371198.1664796566-206334048.1655729050"
                  >Публічна оферта UA</a
                >
              </li>
            </ul>
          </div>
          <div class="footer__social">
            <h5 class="footer__social_title">Наші соц.мережі</h5>
            <div class="footer__social_links">
              <a
                class="footer__social_link"
                href="https://www.facebook.com/business.constructor/?_ga=2.75242514.1675371198.1664796566-206334048.1655729050"
              >
                <svg
                  width="16"
                  height="30"
                  viewBox="0 0 16 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.47669 6.79257C4.47669 7.44719 4.47669 10.369 4.47669 10.369H1.85645V14.7424H4.47669V27.7384H9.85921V14.7427H13.4711C13.4711 14.7427 13.8094 12.6458 13.9734 10.3529C13.5033 10.3529 9.87956 10.3529 9.87956 10.3529C9.87956 10.3529 9.87956 7.80866 9.87956 7.3627C9.87956 6.91578 10.4664 6.3146 11.0465 6.3146C11.6254 6.3146 12.8473 6.3146 13.9791 6.3146C13.9791 5.71917 13.9791 3.66181 13.9791 1.76172C12.4682 1.76172 10.7494 1.76172 9.99172 1.76172C4.34364 1.76142 4.47669 6.1391 4.47669 6.79257Z"
                    fill="#DDFE65"
                  ></path>
                </svg>
              </a>
              <a
                class="footer__social_link"
                href="https://www.instagram.com/business_constructor/?_ga=2.150035382.1675371198.1664796566-206334048.1655729050"
              >
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_116_885)">
                    <path
                      d="M16.3582 0.486328H6.26379C2.83579 0.486328 0.046875 3.27537 0.046875 6.70337V16.7978C0.046875 20.2259 2.83579 23.0148 6.26379 23.0148H16.3582C19.7864 23.0148 22.5754 20.2258 22.5754 16.7978V6.70337C22.5755 3.27537 19.7864 0.486328 16.3582 0.486328ZM20.5767 16.7978C20.5767 19.1237 18.6843 21.016 16.3583 21.016H6.26379C3.93794 21.0161 2.04571 19.1237 2.04571 16.7978V6.70337C2.04571 4.37753 3.93794 2.48516 6.26379 2.48516H16.3582C18.6842 2.48516 20.5765 4.37753 20.5765 6.70337V16.7978H20.5767Z"
                      fill="#DDFE65"
                    ></path>
                    <path
                      d="M11.3118 5.94434C8.11092 5.94434 5.50684 8.54842 5.50684 11.7494C5.50684 14.9502 8.11092 17.5541 11.3118 17.5541C14.5127 17.5541 17.1168 14.9502 17.1168 11.7494C17.1168 8.54842 14.5127 5.94434 11.3118 5.94434ZM11.3118 15.5552C9.21321 15.5552 7.50568 13.8479 7.50568 11.7493C7.50568 9.65045 9.21308 7.94304 11.3118 7.94304C13.4106 7.94304 15.118 9.65045 15.118 11.7493C15.118 13.8479 13.4104 15.5552 11.3118 15.5552Z"
                      fill="#DDFE65"
                    ></path>
                    <path
                      d="M17.3614 4.24902C16.9762 4.24902 16.5979 4.40493 16.326 4.6781C16.0527 4.94995 15.8955 5.32839 15.8955 5.71483C15.8955 6.10008 16.0528 6.47839 16.326 6.75156C16.5978 7.0234 16.9762 7.18065 17.3614 7.18065C17.7478 7.18065 18.1249 7.0234 18.3981 6.75156C18.6713 6.47839 18.8272 6.09994 18.8272 5.71483C18.8272 5.32839 18.6713 4.94995 18.3981 4.6781C18.1262 4.40493 17.7478 4.24902 17.3614 4.24902Z"
                      fill="#DDFE65"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_116_885">
                      <rect width="23" height="24" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </a>
              <a
                class="footer__social_link"
                href=" https://t.me/bizkonstructor?_ga=2.175258786.1675371198.1664796566-206334048.1655729050"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.72623 16.0359L9.31621 21.8032C9.90285 21.8032 10.1569 21.5512 10.4616 21.2486L13.212 18.62L18.9111 22.7936C19.9563 23.3762 20.6927 23.0694 20.9747 21.8321L24.7155 4.30305L24.7166 4.30202C25.0481 2.75692 24.1578 2.15273 23.1394 2.53178L1.15074 10.9503C-0.349941 11.5328 -0.327219 12.3694 0.895638 12.7485L6.51727 14.497L19.5752 6.32634C20.1897 5.91941 20.7485 6.14458 20.2889 6.55151L9.72623 16.0359Z"
                    fill="#DDFE65"
                  ></path>
                </svg>
              </a>
              <a
                class="footer__social_link"
                href="https://youtube.com/user/businessconstructor?_ga=2.175258786.1675371198.1664796566-206334048.1655729050"
              >
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_116_892)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.08026 0.0947266C3.52536 0.0947266 0.643555 2.97654 0.643555 6.53143V12.9682C0.643555 16.5231 3.52536 19.4049 7.08025 19.4049H21.5629C25.1178 19.4049 27.9996 16.5231 27.9996 12.9682V6.53143C27.9996 2.97654 25.1178 0.0947266 21.5629 0.0947266H7.08026ZM11.9083 13.7027V6.53187L18.1114 10.1172L11.9083 13.7027Z"
                      fill="#DDFE65"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_116_892">
                      <rect width="28" height="20" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- HIDDEN ELEMENTS (MODALS)-->
      <div class="modal-overlay" id="modal-video">
        <div class="modal-overlay__container">
          <div class="modal-content">
            <div class="close-button"></div>
            <div class="video">
              <div id="video-popup"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- END HIDDEN ELEMENTS (MODALS)-->
    </div>
    <script src="js/libs.min.js"></script>
    <script src="js/main.js"></script>
    <script>
      $(document).ready(function () {
        // Дата мероприятия
        let cDate = "5 вересня",
          // Landing id // Online
          cLandingId = "2108311000882667103",
          // Landing id // Online Pro
          cLandingIdPro = "2108311000882667130",
          // Landing id // Online Premium
          cLandingIdPremium = "2108311000882667157",
          // es_mail_id
          cMail_id = "",
          // es_id
          cEs_id = "1154",
          // success_url
          cSuccess_url = "https://ceo.bizconstructor.com/offer_ceo/thanks.html";

        //  дата скидки (автозамена)
        let dataDeadline;
        // dataDeadline = foundSale.date;

        // Проверка данных с универсального блока (Удаем тут, если удалили с блока)
        // if (cDate !=='date'){
        // 	$('.cDate').each(function (){
        // 		$(this).html(cDate);
        // 	});
        // };
        if (cLandingId !== "id") {
          $("input[name='landing_id']").val(cLandingId);
          $(".core_price").attr("data-id", cLandingId);
        }
        if (cLandingIdPro !== "id") {
          $(".pro_price").attr("data-id", cLandingIdPro);
        }
        if (cLandingIdPremium !== "id") {
          $(".premium_price").attr("data-id", cLandingIdPremium);
        }
        if (cMail_id !== "es_mail_id") {
          $("input[name='es_mail_id']").val(cMail_id);
        }
        if (cEs_id !== "cEs_id") {
          $("input[name='es_id']").val(cEs_id);
        }
        if (cSuccess_url !== "success_url") {
          $("input[name='success_url'], input[name='error_url']").val(
            cSuccess_url
          );
        }
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
      });

      // Настройка собитыий при клике на кнопки пакета
      $("#btn-core").click(function () {
        $(".packages-btns__pack-name.core_price").click();
      });

      $("#btn-pro").click(function () {
        $(".packages-btns__pack-name.pro_price").click();
      });
      $("#btn-premium").click(function () {
        $(".packages-btns__pack-name.premium_price").click();
      });
    </script>
    <script>
      document.write(
        `<script src="https://forstas.bizconstructor.com/tilda-assets/src/js/script_ver_generate_lead.js?ver=${Math.floor(
          Math.random() * 100
        )}"><\/script>`
      );
    </script>

    <!-- FB CAPI Script -->
    <script>
      /*** Get Facebook AD Click ID ***/
      function getFBclid() {
        var params = window.location.search
          .replace("?", "")
          .split("&")
          .reduce(function (p, e) {
            var a = e.split("=");
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
          }, {});
        if (typeof params["fbclid"] !== "undefined") {
          return params["fbclid"];
        } else return false;
      }

      /*** Restore Facebook Click ID ***/
      var restoreFBClId = setTimeout(function () {
        try {
          if (fbq.getState().pixels.length > 0) {
            console.log("GTM: FB Pixel is active");
          } else {
            console.log("GTM: FB Pixel is blocked or not installed");
            if (getFBclid())
              setCookie(
                "_fbc",
                "fb.1." + Math.round(new Date().getTime()) + "." + getFBclid()
              );
          }
        } catch (e) {
          console.log("GTM: FB Pixel is blocked or not installed");
          if (getFBclid())
            setCookie(
              "_fbc",
              "fb.1." + Math.round(new Date().getTime()) + "." + getFBclid()
            );
        }
      }, 5000);

      /*** Get Cookies ***/
      function getCookie(cookieName) {
        var matches = document.cookie.match(
          new RegExp(
            "(?:^|; )" +
              cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

      /*** Set Cookies ***/
      function setCookie(cookieName, cookieValue, daysOfLife) {
        // Create/Update Cookies
        var cookieExp = new Date(new Date().getTime() + daysOfLife * 86400000);
        document.cookie =
          cookieName +
          "=" +
          cookieValue +
          "; expires=" +
          cookieExp.toUTCString() +
          "; path=/;" +
          "domain=" +
          location.hostname +
          ";SameSite=Lax";
      }

      /*** Send Event to FB CAPI ***/
      function sendEventToFBCAPI(data, endpoint) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();

          var stringifiedData = JSON.stringify(data);

          xhr.open("POST", endpoint);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.send(stringifiedData);

          xhr.onload = function () {
            if (xhr.status.toString()[0] !== "2") {
              console.error(xhr.status + "> " + xhr.statusText);
              reject(false);
            } else if (xhr.status == 200) {
              resolve(true);
            }
          };
        });
      }
    </script>
    <!-- End FB CAPI Script -->

    <script>
      //пакет по умолчанию
      setTimeout(function () {
        $(".packages-btns__pack-name.pro_price").click();
      }, 0);
    </script>
    <script>
      var minutesLabel = document.querySelector(".time.minutes");
      var secondsLabel = document.querySelector(".time.seconds");
      var millisecondsLabel = document.querySelector(".time.milliseconds");

      var totalMilliseconds = 600000;
      var interval = setInterval(setTime, 10);

      function setTime() {
        totalMilliseconds -= 10;
        var minutes = Math.floor(totalMilliseconds / 60000);
        var seconds = Math.floor((totalMilliseconds % 60000) / 1000);
        var milliseconds = totalMilliseconds % 1000;

        minutesLabel.textContent = padValue(minutes);
        secondsLabel.textContent = padValue(seconds);
        millisecondsLabel.textContent = padValueMilliseconds(milliseconds);

        if (totalMilliseconds <= 0) {
          clearInterval(interval);
          alert("Час вийшов!");
          resetTimer();
          interval = setInterval(setTime, 10);
        }
      }

      function resetTimer() {
        totalMilliseconds = 600000;
      }

      function padValue(value) {
        return value.toString().padStart(2, "0");
      }

      function padValueMilliseconds(value) {
        return value.toString().padStart(3, "0").slice(0, 2);
      }
    </script>
  </body>
</html>
