"use strict";
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
!(function (e) {
  var t = {
      rus: {
        second: ["секунда", "секунды", "секунд"],
        minute: ["минута", "минуты", "минут"],
        hour: ["час", "часа", "часов"],
        day: ["день", "дня", "дней"],
      },
      eng: {
        second: ["second", "seconds"],
        minute: ["minute", "minutes"],
        hour: ["hour", "hours"],
        day: ["day", "days"],
      },
    },
    n = {
      year: 2014,
      month: 7,
      day: 31,
      hour: 0,
      minute: 0,
      second: 0,
      timeZone: "local",
      ignoreTransferTime: !1,
      periodic: !1,
      periodInterval: 7,
      periodUnit: "d",
      dayVisible: !0,
      dubleNumbers: !0,
      doubleNumbers: !0,
      effectType: "none",
      lang: "eng",
      headTitle: "",
      footTitle: "",
      afterDeadline: function (e) {
        e.bodyBlock.html(
          '<p style="font-size: 1.2em;">Мероприятие закончилось</p>'
        );
      },
    },
    o = {
      init: function (t) {
        var a = e.extend({}, n, t || {});
        return (
          t.hasOwnProperty("dubleNumbers") &&
            (a.doubleNumbers = t.dubleNumbers),
          this.each(function () {
            e(this).data("syotimer-options", a),
              o._render.apply(this, []),
              o._perSecondHandler.apply(this, []);
          })
        );
      },
      _render: function () {
        var t,
          n = e(this),
          o = n.data("syotimer-options"),
          i = o.dayVisible ? a.getCellDom("day", "0") : "";
        (t =
          '<div class="timer-head-block">' +
          o.headTitle +
          '</div><div class="timer-body-block">' +
          i +
          a.getCellDom("hour") +
          a.getCellDom("minute") +
          a.getCellDom("second") +
          '</div><div class="timer-foot-block">' +
          o.footTitle +
          "</div>"),
          n.addClass("syotimer").addClass("timer").html(t);
        var r = {
          headBlock: e(".timer-head-block", n),
          bodyBlock: e(".timer-body-block", n),
          footBlock: e(".timer-foot-block", n),
        };
        n.data("syotimer-blocks", r);
      },
      _perSecondHandler: function () {
        var t = e(this),
          n = t.data("syotimer-options");
        e(".second .tab-val", t).css("opacity", 1);
        var i = new Date(),
          r = new Date(n.year, n.month - 1, n.day, n.hour, n.minute, n.second),
          s = a.getDifferenceWithTimezone(i, r, n),
          c = a.getSecondsToDeadLine(s, n);
        c >= 0
          ? (o._refreshUnitsDom.apply(this, [c]),
            o._applyEffectSwitch.apply(this, [n.effectType]))
          : ((t = e.extend(t, t.data("syotimer-blocks"))), n.afterDeadline(t));
      },
      _refreshUnitsDom: function (n) {
        var o = e(this),
          i = o.data("syotimer-options"),
          r = ["day", "hour", "minute", "second"],
          s = a.getUnitsToDeadLine(n),
          c = t[i.lang];
        i.dayVisible || ((s.hour += 24 * s.day), r.splice(0, 1));
        for (var l = 0; l < r.length; l++) {
          var d = r[l],
            u = "." + d;
          e(u + " .tab-val", o).html(
            a.format2(s[d], "day" != d && i.doubleNumbers)
          ),
            e(u + " .tab-unit", o).html(
              a.definitionOfNumerals(s[d], c[d], i.lang)
            );
        }
      },
      _applyEffectSwitch: function (t) {
        var n = this,
          a = e(n);
        switch (t) {
          case "none":
            setTimeout(function () {
              o._perSecondHandler.apply(n, []);
            }, 1e3);
            break;
          case "opacity":
            e(".second .tab-val", a).animate(
              { opacity: 0.1 },
              1e3,
              "linear",
              function () {
                o._perSecondHandler.apply(n, []);
              }
            );
        }
      },
    },
    a = {
      getCellDom: function (e, t) {
        return (
          '<div class="table-cell ' +
          (e = e || "") +
          '"><div class="tab-val">' +
          (t = t || "00") +
          '</div><div class="tab-metr tab-unit"></div></div><div class="timer-dots">:</div>'
        );
      },
      getSecondsToDeadLine: function (e, t) {
        var n,
          o = e / 1e3;
        if (((o = Math.floor(o)), t.periodic)) {
          var i,
            r,
            s = a.getPeriodUnit(t.periodUnit),
            c = e / (1e3 * s);
          (c = Math.ceil(c)),
            (c = Math.abs(c)),
            o >= 0
              ? ((r = 0 == (r = c % t.periodInterval) ? t.periodInterval : r),
                (r -= 1))
              : (r = t.periodInterval - (c % t.periodInterval)),
            0 == (i = o % s) && o < 0 && r--,
            (n = Math.abs(r * s + i));
        } else n = o;
        return n;
      },
      getUnitsToDeadLine: function (e) {
        for (
          var t = ["day", "hour", "minute", "second"], n = {}, o = 0;
          o < t.length;
          o++
        ) {
          var i = t[o],
            r = a.getPeriodUnit(i);
          (n[i] = Math.floor(e / r)), (e %= r);
        }
        return n;
      },
      getPeriodUnit: function (e) {
        switch (e) {
          case "d":
          case "day":
            return 86400;
          case "h":
          case "hour":
            return 3600;
          case "m":
          case "minute":
            return 60;
          case "s":
          case "second":
            return 1;
        }
      },
      getDifferenceWithTimezone: function (e, t, n) {
        var o = t.getTime() - e.getTime(),
          i = 0,
          r = 0;
        "local" !== n.timeZone &&
          (i =
            1e3 *
            (parseFloat(n.timeZone) * a.getPeriodUnit("hour") -
              -e.getTimezoneOffset() * a.getPeriodUnit("minute")));
        n.ignoreTransferTime &&
          (r =
            1e3 *
            (-e.getTimezoneOffset() * a.getPeriodUnit("minute") -
              -t.getTimezoneOffset() * a.getPeriodUnit("minute")));
        return o - (i + r);
      },
      format2: function (e, t) {
        return (t = !1 !== t), e <= 9 && t ? "0" + e : "" + e;
      },
      definitionOfNumerals: function (e, t, n) {
        switch (n) {
          case "rus":
            return t[
              e % 100 > 4 && e % 100 < 20
                ? 2
                : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]
            ];
          case "eng":
            return t[1 == e ? 0 : 1];
        }
      },
    },
    i = {
      setOption: function (t, n) {
        var o = e(this),
          a = o.data("syotimer-options");
        a.hasOwnProperty(t) && ((a[t] = n), o.data("syotimer-options", a));
      },
    };
  e.fn.syotimer = function (t) {
    if ("string" == typeof t && "setOption" === t) {
      var n = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        i[t].apply(this, n);
      });
    }
    return null === t || "object" == _typeof(t)
      ? o.init.apply(this, [t])
      : void e.error("SyoTimer. Error in call methods: methods is not exist");
  };
})(jQuery),
  $("body").append(
    "<style>.timer-body-block{display:flex}.timer-body-block {display: flex; font-weight: 400;} .table-cell:after { display: none !important; }</style>"
  ),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" ===
          ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
        module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    var t = Array.prototype.slice,
      n = Array.prototype.splice,
      o = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "inherit",
      },
      a = e(window),
      i = e(document),
      r = [],
      s = a.height(),
      c = function () {
        for (
          var t = a.scrollTop(),
            n = i.height(),
            o = n - s,
            c = t > o ? o - t : 0,
            l = 0,
            d = r.length;
          l < d;
          l++
        ) {
          var u = r[l],
            p = u.stickyWrapper.offset().top - u.topSpacing - c;
          if (
            (u.stickyWrapper.css("height", u.stickyElement.outerHeight()),
            t <= p)
          )
            null !== u.currentTop &&
              (u.stickyElement.css({
                width: "",
                position: "",
                top: "",
                "z-index": "",
              }),
              u.stickyElement.parent().removeClass(u.className),
              u.stickyElement.trigger("sticky-end", [u]),
              (u.currentTop = null));
          else {
            var h,
              m =
                n -
                u.stickyElement.outerHeight() -
                u.topSpacing -
                u.bottomSpacing -
                t -
                c;
            if (
              (m < 0 ? (m += u.topSpacing) : (m = u.topSpacing),
              u.currentTop !== m)
            )
              u.getWidthFrom
                ? ((padding =
                    u.stickyElement.innerWidth() - u.stickyElement.width()),
                  (h = e(u.getWidthFrom).width() - padding || null))
                : u.widthFromWrapper && (h = u.stickyWrapper.width()),
                null == h && (h = u.stickyElement.width()),
                u.stickyElement
                  .css("width", h)
                  .css("position", "fixed")
                  .css("top", m)
                  .css("z-index", u.zIndex),
                u.stickyElement.parent().addClass(u.className),
                null === u.currentTop
                  ? u.stickyElement.trigger("sticky-start", [u])
                  : u.stickyElement.trigger("sticky-update", [u]),
                (u.currentTop === u.topSpacing && u.currentTop > m) ||
                (null === u.currentTop && m < u.topSpacing)
                  ? u.stickyElement.trigger("sticky-bottom-reached", [u])
                  : null !== u.currentTop &&
                    m === u.topSpacing &&
                    u.currentTop < m &&
                    u.stickyElement.trigger("sticky-bottom-unreached", [u]),
                (u.currentTop = m);
            var f = u.stickyWrapper.parent();
            u.stickyElement.offset().top + u.stickyElement.outerHeight() >=
              f.offset().top + f.outerHeight() &&
            u.stickyElement.offset().top <= u.topSpacing
              ? u.stickyElement
                  .css("position", "absolute")
                  .css("top", "")
                  .css("bottom", 0)
                  .css("z-index", "")
              : u.stickyElement
                  .css("position", "fixed")
                  .css("top", m)
                  .css("bottom", "")
                  .css("z-index", u.zIndex);
          }
        }
      },
      l = function () {
        s = a.height();
        for (var t = 0, n = r.length; t < n; t++) {
          var o = r[t],
            i = null;
          o.getWidthFrom
            ? o.responsiveWidth && (i = e(o.getWidthFrom).width())
            : o.widthFromWrapper && (i = o.stickyWrapper.width()),
            null != i && o.stickyElement.css("width", i);
        }
      },
      d = {
        init: function (t) {
          return this.each(function () {
            var n = e.extend({}, o, t),
              a = e(this),
              i = a.attr("id"),
              s = i ? i + "-" + o.wrapperClassName : o.wrapperClassName,
              c = e("<div></div>").attr("id", s).addClass(n.wrapperClassName);
            a.wrapAll(function () {
              if (0 == e(this).parent("#" + s).length) return c;
            });
            var l = a.parent();
            n.center &&
              l.css({
                width: a.outerWidth(),
                marginLeft: "auto",
                marginRight: "auto",
              }),
              "right" === a.css("float") &&
                a.css({ float: "none" }).parent().css({ float: "right" }),
              (n.stickyElement = a),
              (n.stickyWrapper = l),
              (n.currentTop = null),
              r.push(n),
              d.setWrapperHeight(this),
              d.setupChangeListeners(this);
          });
        },
        setWrapperHeight: function (t) {
          var n = e(t),
            o = n.parent();
          o && o.css("height", n.outerHeight());
        },
        setupChangeListeners: function (e) {
          window.MutationObserver
            ? new window.MutationObserver(function (t) {
                (t[0].addedNodes.length || t[0].removedNodes.length) &&
                  d.setWrapperHeight(e);
              }).observe(e, { subtree: !0, childList: !0 })
            : window.addEventListener
            ? (e.addEventListener(
                "DOMNodeInserted",
                function () {
                  d.setWrapperHeight(e);
                },
                !1
              ),
              e.addEventListener(
                "DOMNodeRemoved",
                function () {
                  d.setWrapperHeight(e);
                },
                !1
              ))
            : window.attachEvent &&
              (e.attachEvent("onDOMNodeInserted", function () {
                d.setWrapperHeight(e);
              }),
              e.attachEvent("onDOMNodeRemoved", function () {
                d.setWrapperHeight(e);
              }));
        },
        update: c,
        unstick: function (t) {
          return this.each(function () {
            for (var t = e(this), o = -1, a = r.length; a-- > 0; )
              r[a].stickyElement.get(0) === this && (n.call(r, a, 1), (o = a));
            -1 !== o &&
              (t.unwrap(),
              t.css({
                width: "",
                position: "",
                top: "",
                float: "",
                "z-index": "",
              }));
          });
        },
      };
    window.addEventListener
      ? (window.addEventListener("scroll", c, !1),
        window.addEventListener("resize", l, !1))
      : window.attachEvent &&
        (window.attachEvent("onscroll", c), window.attachEvent("onresize", l)),
      (e.fn.sticky = function (n) {
        return d[n]
          ? d[n].apply(this, t.call(arguments, 1))
          : "object" !== _typeof(n) && n
          ? void e.error("Method " + n + " does not exist on jQuery.sticky")
          : d.init.apply(this, arguments);
      }),
      (e.fn.unstick = function (n) {
        return d[n]
          ? d[n].apply(this, t.call(arguments, 1))
          : "object" !== _typeof(n) && n
          ? void e.error("Method " + n + " does not exist on jQuery.sticky")
          : d.unstick.apply(this, arguments);
      }),
      e(function () {
        setTimeout(c, 0);
      });
  }),
  // Установка после загрузки
  window.addEventListener("DOMContentLoaded", function () {
    LP.CORE.init();
    LP.CORE.getSearchJson();
    LP.CUSTOM.setVaidPhone();
    LP.CUSTOM.setInputAllRequired();
    LP.CUSTOM.setFondy();
    LP.CUSTOM.setLocationHref();
    LP.CUSTOM.setCookie();
    LP.CUSTOM.checkPageTitle();
    LP.CUSTOM.updateStaticInfo();
    LP.HERO.setBackground();
    LP.UI.animateAccordeon();
  });

var LP = {
  CORE: {
    init: function () {
      $(".hamburger").click(function () {
        $(this).hasClass("is-active") ? LP.MENU.close() : LP.MENU.open();
      });
      $("header").sticky({
        topSpacing: 0,
      });
      $("[data-href], .header__menu a")
        .not(".phone")
        .click(function (event) {
          event.preventDefault();
          var href = $(this).data("href")
            ? $(this).data("href")
            : $(this).attr("href");
          $("html, body").animate(
            {
              scrollTop: $(href).offset().top - parseInt($(".header").height()),
            },
            800
          );
          LP.MENU.close();
        });
      $("[data-modal]").click(function (event) {
        event.preventDefault();
        LP.CORE.showModal($(this).data("modal"));
      });
      $("[data-modal-close]").click(function (event) {
        event.preventDefault();
        LP.CORE.closeModal($(this).data("modal-close"));
      });
      $(".tabs__tab, [data-id]").click(function () {
        $(".tabs__tab").removeClass("tabs__tab--active"),
          $(this).not(".package_price").addClass("tabs__tab--active"),
          LP.CORE.selectPackage($(this));
      });
      if (!$(".tabs__tab").length && $(".zoho_url").length) {
        LP.CORE.getPriceByID($('[name="landing_id"]').val());
      }
      if ($(".tabs__tab").length) {
        $(".tabs__tab:first-child").click();
      }
    },
    showModal: function (modal) {
      $(modal).addClass("modal--active");
      $("body").css("overflow", "hidden");
      $(".getcall__wrapper").css("display", "none");
    },
    closeModal: function (modal) {
      $(modal).removeClass("modal--active");
      $("body").css("overflow", "visible");
      $(".getcall__wrapper").css("display", "block");
    },
    selectPackage: function (el) {
      LP.CORE.getPriceByID(el.data("id"));
    },
    getPriceByID: function (id) {
      if (!id) return !1;

      const month = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];

      $.get(
        `https://crm-oz.constructor.biz.ua/landing/price?landing_id=${id}&token=LapQMWHF9k5QPPGRkfRnAtACAGwUcX2tkaVgyDuQe76crMGnrU`,
        function (data) {
          try {
            var dates = data.beforeDate.split("-");
            var monthIndex =
              dates[0][0] == 0 ? dates[0].replace("0", "") : dates[0];
            $("[data-deadline]").text(dates[1] + " " + month[monthIndex - 1]);
            $("[data-total-price]").text(data.maxPrice);
            $("[data-price]").text(data.price);

            if ($(".timer_content").length) {
              $(".timer_content").syotimer({
                year: dates[2],
                month: dates[0],
                day: dates[1] - 1,
                hour: 24,
                lang: "rus",
              });
            }
          } catch (error) {
            throw new Error(`error get price by id: ${error}`);
          } finally {
            $('#form [name="landing_id"]').val(id);
            LP.CORE.setActivaButtonsByID(id);
          }
        }
      );
    },
    setActivaButtonsByID: function (id) {
      $("[data-id]")
        .not(".package_price")
        .removeClass("active__button__id tabs__tab--active"),
        $('[data-id="' + id + '"]')
          .not(".package_price")
          .addClass("active__button__id tabs__tab--active");
    },
    setPriceThanks: function (id, elMaxPrice, elPrice, elSaving = null) {
      if ($(".zoho_url").length) {
        try {
          $.get(
            `https://crm-oz.constructor.biz.ua/landing/price?landing_id=${id}&token=LapQMWHF9k5QPPGRkfRnAtACAGwUcX2tkaVgyDuQe76crMGnrU`,
            function (data) {
              $(elMaxPrice).text(data.maxPrice),
                $(elPrice).text(data.price),
                elSaving && $(elSaving).text(data.maxPrice - data.price);
            }
          );
        } catch (error) {
          throw new Error(`error get price by package_price: ${error}`);
        }
      }
    },
    getSearchJson: function () {
      var pairs = window.location.search.substring(1).split("&"),
        obj = {},
        pair,
        i;

      for (i in pairs) {
        if (pairs[i] === "") continue;

        pair = pairs[i].split("=");

        if (!obj[decodeURIComponent(pair[0])]) {
          obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);

          if (pair[0] != "landing_id" && pair[0] != "phone") {
            if ($('[name="' + pair[0] + '"]').length) {
              var val = decodeURIComponent(pair[1]);
              $('[name="' + pair[0] + '"]').val(val.replace("+", " "));
            }
          }
          if (pair[0] == "phone") {
            $('[name="' + pair[0] + '"]').val(decodeURIComponent(pair[1]));
          }
        }
      }
      return obj;
    },
  },
  MENU: {
    open: function () {
      $(".hamburger").addClass("is-active"),
        $(".header__menu").addClass("header__menu--active");
    },
    close: function () {
      $(".hamburger").removeClass("is-active"),
        $(".header__menu").removeClass("header__menu--active");
    },
  },
  HERO: {
    setBackground: function () {
      if (
        Boolean($(".hero").data("img-xs")) ||
        Boolean($(".hero").data("img-lg"))
      ) {
        checkHeroResize();
        $(window).resize(checkHeroResize());
      }

      function checkHeroResize() {
        if ($(window).width() < 768) {
          $(".hero").css(
            "background-image",
            "url(" + $(".hero").data("img-xs") + ")"
          );
        } else {
          $(".hero").css(
            "background-image",
            "url(" + $(".hero").data("img-lg") + ")"
          );
        }
      }
    },
  },
  UI: {
    animateAccordeon: function () {
      // accordeon section items
      function o(t, e) {
        var a = t.height(),
          i = t.css("height", "auto").height();
        t.height(a),
          t.stop().animate(
            {
              height: i,
            },
            e
          );
      }

      $(".accorden-item__title").on("click", function () {
        $(".accorden-item__title").removeClass("is-open"),
          $(this).addClass("is-open");
        var t = $(this).next();
        $(this).parent().hasClass("show-in")
          ? $(".show-in .accorden-item__content").stop().animate(
              {
                height: "0",
              },
              250
            )
          : ($(".show-in .accorden-item__content").stop().animate(
              {
                height: "0",
              },
              250
            ),
            o(t, 250)),
          $(this)
            .parent()
            .toggleClass("show-in")
            .siblings()
            .removeClass("show-in");
      });

      // Spoiler items section
      !(function (i) {
        var o, n;
        i(".spoiler__title").on("click", function () {
          (o = i(this).parents(".spoiler--item")),
            (n = o.find(".spoiler__info")),
            o.hasClass("active_block")
              ? (o.removeClass("active_block"), n.slideUp())
              : (o.addClass("active_block"),
                n.stop(!0, !0).slideDown(),
                o
                  .siblings(".active_block")
                  .removeClass("active_block")
                  .children(".spoiler__info")
                  .stop(!0, !0)
                  .slideUp());
        });
      })(jQuery);
      $(".spoiler--item:first .spoiler__title").click();
    },
    observerToggleVideo: function (selector) {
      let videos = document.querySelectorAll(selector);
      if (videos.length) {
        videos.forEach((video) => {
          // We can only control playback without insteraction if video is mute
          video.muted = true;
          // Play is a promise so we need to check we have it
          let playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then((_) => {
              let observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (
                      // entry.intersectionRatio !== 1 &&
                      entry.intersectionRatio <= 0 &&
                      !video.paused
                    ) {
                      video.pause();
                    } else if (video.paused) {
                      video.play();
                    }
                  });
                },
                {
                  threshold: 0,
                }
              );
              observer.observe(video);
            });
          }
        });
      }
    },
  },
  CUSTOM: {
    setFondy: function () {
      // fondy autochange id merchant
      const fondyMerchant = document.querySelectorAll('input[name="f_m_id"]');

      function setMerchant() {
        fondyMerchant.forEach(function (item) {
          switch (item.value) {
            // Программы
            case "fondy_pr":
              item.value = "1502560";
              break;
            // Самитты
            case "fondy_sm":
              item.value = "1502560";
              break;
            // ПМ, МК
            case "fondy_mk_pm":
              item.value = "1450447";
              break;
            // RU all
            case "fondy_ru":
              item.value = "1502560";
              break;
            case "fondy_barabash":
              item.value = "1502560";
              break;
            case "fondy_tanasyuk":
              item.value = "1502560";
              break;
          }
        });
      }
      if (fondyMerchant.length) {
        setMerchant();
      }
    },
    setCookie: function () {
      if ($(".zoho_url").length) {
        try {
          var getId = getGA();

          if (getId) {
            $('input[name="google_client_id"]').val(getId);
          } else {
            var timerID = setInterval(checkGA, 200);
          }

          function checkGA() {
            //get GA from cookie
            getId = getGA();

            if (getId) {
              $('input[name="google_client_id"]').val(getId);
              clearInterval(timerID);
            }
          }

          function getGA() {
            var res = getCookie("_ga");
            if (res !== null) {
              var parts = res.split(".", 4);
              if (parts.length === 4) {
                return parts[2] + "." + parts[3];
              }
            }
            return false;
          }

          function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == " ") c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
            }
            return null;
          }
        } catch (error) {
          throw new Error(`error with cookies: ${error}`);
        }
      }
    },
    setVaidPhone: function () {
      // Валидация tel
      function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
        }
      }

      function maskPhone(event) {
        let matrix;
        let isCharacterTel = document.querySelector("[data-mask]");

        if (!isCharacterTel) {
          matrix = "+ ____________";
        } else {
          matrix = isCharacterTel.dataset.mask;
        }

        let i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ""
            : a;
        });

        // Добавление атрибута, для установки формата ввода номера телефона
        this.setAttribute("pattern", ".{12,}");

        // Ввывод сообщения, при неверно запополненом поле ввода номера телефона
        if (val.length < 10) {
          this.setCustomValidity("Введите корректный номер телефона");
        } else {
          this.setCustomValidity("");
        }

        if (event.type == "blur") {
          if (this.value.length == 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
      }

      let validPhone = document.querySelectorAll('input[name="phone"]');
      if (validPhone) {
        validPhone.forEach((item) => {
          item.addEventListener("input", maskPhone, false);
          item.addEventListener("focus", maskPhone, false);
          item.addEventListener("blur", maskPhone, false);
        });
      }
    },
    setInputAllRequired: function () {
      // Сделать все поля обязательными
      const inputsName = document.getElementsByName("name");
      const inputsEmail = document.getElementsByName("email");
      const inputsPhone = document.getElementsByName("phone");

      const arrInputs = [...inputsName, ...inputsEmail, ...inputsPhone];

      arrInputs.forEach((input) => input.setAttribute("required", "true"));
    },
    setLocationHref: function () {
      const newInputs =
        '<input type="hidden" name="rolecompany" value=""><input type="hidden" name="countcompany" value="">';
      const inputlocationHref = `<input type="hidden" name="location_href" value="${window.location.href}">`;
      const forms = document.querySelectorAll(".zoho_url");

      forms.forEach((item) => {
        item.insertAdjacentHTML("beforeend", newInputs);
        item.insertAdjacentHTML("beforeend", inputlocationHref);
      });
    },
    // Функция проверки заголовка
    checkPageTitle() {
      const h1 = document.querySelector("h1");

      if (!h1) {
        const title = document.createElement("h1");
        title.innerText = document.title;
        title.style.display = "none";
        document.body.append(title);
      }
    },
    updateStaticInfo: function () {
      // footer contact change url text
      $(".form__contact span").each(function () {
        var text = $(this).text();
        text = text.replace("Или напишите нам письмо:", "Или напишите письмо:");
        $(this).text(text);
      });

      // footer change url terms-conditions
      $(".footer-col.second-col .footer-col-list .list-footer a")
        .last()
        .text("Публичная оферта UA");
      // $('.footer-col.second-col .footer-col-list .list-footer').last().after("<li class='list-footer'><a href='http://terms-conditions.bizconstructor.com/kz' target='_blank'>Публичная оферта KZ</a></li>");

      // footer contact change UA address
      $(
        ".footer-col.four-col .footer-col-list ul .list-footer.footer--contacts:nth-child(1) p:nth-child(2)"
      ).html("Киев, ул. Ломоносова, 73з");

      // footer contact change KZ address
      $(
        ".footer-col.four-col .footer-col-list ul .list-footer.footer--contacts:nth-child(2) p:nth-child(2)"
      ).html(
        "Алматы, ул. Байзакова, 280," +
          '<br style="display: block">' +
          "БЦ «Almaty Towers»"
      );

      // Update contact us UA
      $(".form__contact a[href='https://goo.gl/maps/z4gUF1AKAJRSFfge8")
        .attr("href", "https://goo.gl/maps/84z7ZSNJ6Q7rQYcG7")
        .html("Киев, Киев, ул. Ломоносова, 73з");
      $(".form__contact a[href='https://goo.gl/maps/9LMtuVv7yqCwTziMA")
        .attr("href", "https://goo.gl/maps/84z7ZSNJ6Q7rQYcG7")
        .html("Киев, Киев, ул. Ломоносова, 73з");

      // Update contact us KZ
      $(
        ".form__contact a[href='https://2gis.kz/almaty/firm/70000001018896711?m=76.939694%2C43.253276%2F16"
      )
        .attr("href", "https://goo.gl/maps/W9WbpiC1VtsXDmWg9")
        .html("Алматы, ул. Байзакова, 280, БЦ «Almaty Towers», SmArt.Point");
      $(".form__contact a[href='https://goo.gl/maps/jEYTh6j5z2QjLEpg8")
        .attr("href", "https://goo.gl/maps/W9WbpiC1VtsXDmWg9")
        .html("Алматы, ул. Байзакова, 280, БЦ «Almaty Towers», SmArt.Point");

      // open link with taget
      $(".footer a, .form__contact a").click(function () {
        $(this).target = "_blank";
        window.open($(this).prop("href"));
        return false;
      });

      // footer last year
      $("#lastYearFooter, #lastYearFooterMob").html(new Date().getFullYear());
    },
  },
};

// Квиз формы
let quizComplete = false;
let activeForm = null;

const formWithQuiz = document.querySelector("[data-quiz]");

// Если нету квиза - запрос серверу сразу
if (!formWithQuiz) {
  quizComplete = true;
} else {
  modalQuiz();
}

function modalQuiz() {
  // Проверка наличия актуальных вопросов
  const currentQuestions =
    typeof customQuestions !== "undefined" && customQuestions.length
      ? customQuestions
      : questions;

  const templateTitle = `<div class="quiz--header flex direction--mcolumn--drow space-between"><span>Вопрос <span id="countQuestions">1</span> из ${currentQuestions.length}</span><h6 class="quiz__title active_color">Спасибо за ваш ответ!</h6></div>`;

  $("#modal__quiz .module-item__list h6").remove();
  $("#modal__quiz .module-item__list").prepend(templateTitle);

  let questionCounter = 0,
    selections = [],
    quiz = $("#quiz");

  // Показываем вопросы
  displayNext();

  // Кнопка вперед
  $("#next").on("click", function (e) {
    e.preventDefault();

    choose();

    if (isNaN(selections[questionCounter])) {
      alert("Выберите один вариант ответа");
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Кнопка назад
  $("#prev").on("click", function (e) {
    e.preventDefault();

    choose();
    questionCounter--;
    displayNext();
  });

  function createQuestionElement(index) {
    let qElement = $("<div>", {
      id: "question",
    });

    let question = $("<p>").append(currentQuestions[index].question);
    qElement.append(question);

    let radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Создает список вариантов ответа
  function createRadios(index) {
    let answers = document.createElement("ul");

    currentQuestions[index].choices.forEach((item, i = 0) => {
      answers.insertAdjacentHTML(
        "beforeend",
        `<li><input type="radio" data-num="${i}" id="${i}" name="answer" value=${item.value} answerkey=${currentQuestions[index].key}><label for="${i}">${item.text}</label></li>`
      );
    });

    return answers;
  }

  // Считывает выбор пользователя и помещает значение в массив и input
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').attr(
      "data-num"
    );

    let currentQuestion = $('input[name="answer"]:checked').attr("answerkey"),
      questionAnswer = $('input[name="answer"]:checked').val();

    $("input[name=" + currentQuestion + "]").val(questionAnswer);
  }

  // Отображает следующий запрошенный элемент
  function displayNext() {
    quiz.fadeOut(function () {
      $("#question").remove();

      if (questionCounter < currentQuestions.length) {
        let nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();

        if (!isNaN(selections[questionCounter])) {
          $("input[data-num=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }

        if (questionCounter > 0) {
          $("#prev").show();
          $("#countQuestions").html(questionCounter + 1);
        } else if (questionCounter == 0) {
          $("#prev").hide();
          $("#next").show();
          $("#countQuestions").html(questionCounter + 1);
        }
      } else {
        // Вставка в поля формы адреса следующей страницы, после ответа на первый вопрос сегментации
        // pagesForQuiz - массив со списком страниц в блоке настройки лендинга
        if (
          selections.length &&
          typeof pagesForQuiz !== "undefined" &&
          pagesForQuiz.length
        ) {
          document
            .querySelectorAll(
              'input[name="success_url"], input[name="error_url"]'
            )
            .forEach((input) => {
              pagesForQuiz.forEach((page, idx) => {
                if (idx === selections[0]) {
                  input.value = page;
                }
              });
            });
        }

        $("#modal__quiz").remove();
        quizComplete = true;

        if (activeForm !== null) {
          activeForm.submit();
        }
      }
    });
  }
}

// Обработчик на форму
$(".zoho_url").submit(function (e) {
  e.preventDefault();

  var form = $(this);
  var activeForm = $(this);

  activeForm.find('input[name="name"]').focus();
  activeForm.find('input[name="email"]').focus();
  activeForm.find('input[name="phone"]').focus();
  activeForm.find('input[type="submit"]').focus();
  activeForm.find('button[type="submit"]').focus();

  if ($(".error").length == 0) {
    var gr_token = activeForm.find('input[name="gr_token"]').val();
    var gotogf = activeForm.find('input[name="send_to_gf"]').val();
    var name = activeForm.find('input[name="name"]').val();
    var email = activeForm.find('input[name="email"]').val();
    var phone = activeForm.find('input[name="phone"]').val();
    var data = new FormData();
    var url = "https://crm-oz.constructor.biz.ua/landing/save";
    var arrayData = $(form).serializeArray();
    arrayData.forEach(function (el) {
      data.append(el.name, el.value + "");
    });
    var get_params = activeForm.find('input[name="get_params"]').val(); //чи передавати гет параметри на сторінку саксесу
    var server_response_link;

    $(form).find(".send-form").prop("disabled", true).text("Отправка формы...");

    $.ajax({
      data: data,
      url: url,
      type: $(form).attr("method") || "POST",
      method: $(form).attr("method") || "POST",
      cache: false,
      processData: false,
      contentType: false,
      dataType: "json",
    })
      .done(function (server_response) {
        if (server_response.status == "ok") {
          $(form)
            .find(".send-form")
            .text("Форма отправлена")
            .addClass("send-success");

          if ($(form).data("form") == "callback") {
            console.log(arrayData);
          } else {
            console.log("formsend");

            // Triggger GTM
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
              event: "generate_lead",
              user_data: {
                email_address: email.trim().toLowerCase(),
                phone_number: phone.replace(/\D+/g, ""),
              },
              event_id:
                Math.round(new Date().getTime() / 1000) +
                "." +
                Math.floor(Math.random() * 10000000000),
              fbp: getCookie("_fbp"),
              fbc: getCookie("_fbc"),
              event_source_url: window.location.href,
              user_agent: navigator.userAgent,
            });

            console.log("dataLayer push OK");

            if (typeof fbcapiData !== "undefined") {
              sendEventToFBCAPI(
                fbcapiData,
                "https://cap1.space/fb-capi.php/"
              ).finally(() => {
                // if (server_response.link !== false) {
                //   if (!quizComplete) {
                //     LP.CORE.showModal("#modal__quiz");
                //   } else {
                //     if (get_params == "false") {
                //       server_response_link = server_response.link.split("?")[0];
                //     } else {
                //       server_response_link = server_response.link;
                //     }
                //     setTimeout(function () {
                //       document.location.href = server_response_link;
                //     }, 250);
                //   }
                // }
              });
            } else {
              // if (server_response.link !== false) {
              //   if (!quizComplete) {
              //     LP.CORE.showModal("#modal__quiz");
              //   } else {
              //     if (get_params == "false") {
              //       server_response_link = server_response.link.split("?")[0];
              //     } else {
              //       server_response_link = server_response.link;
              //     }
              //     setTimeout(function () {
              //       document.location.href = server_response_link;
              //     }, 250);
              //   }
              // }
            }

            // Facebook pixel tracking
            if (typeof fbq !== "undefined") {
              fbq("track", "Lead");
              console.log("fb-pixel-done");
            } else {
              console.log("fb-pixel-none!!!");
            }

            // Send data to Pipedrive
            sendDataToPipedrive({ name: name, email: email, phone: phone });
          }
        }
      })
      .fail(function (request, status, error) {
        $(form).find(".send-form").text("Что-то не так :(");

        const statusCode = `error_formsend with code: ${request.status}`;
        console.log(statusCode);
        if (window.dataLayer) {
          dataLayer.push({
            event: statusCode,
          });
        }
      });

    // sending to GF
    if (gotogf !== "" && gotogf !== undefined) {
      $.ajax({
        data: data,
        url: "https://bizconstructor.com/bk_gf/" + gotogf + "/export.php",
        type: $(form).attr("method") || "POST",
        method: $(form).attr("method") || "POST",
        cache: !1,
        processData: !1,
        contentType: !1,
        dataType: "json",
      })
        .done(function (e) {
          console.log(e);
        })
        .fail(function (e, n, o) {
          var a = "error_formsend with code: ".concat(e.status);
          console.log(a), window.dataLayer && dataLayer.push({ event: a });
        });
    }

    // sending to GR
    if (gr_token !== "" && gr_token !== undefined) {
      $.ajax({
        data: data,
        url: "https://bizconstructor.com/gr/",
        type: $(form).attr("method") || "POST",
        method: $(form).attr("method") || "POST",
        cache: !1,
        processData: !1,
        contentType: !1,
        dataType: "json",
      })
        .done(function (e) {
          console.log(e);
        })
        .fail(function (e) {
          var a = "error_formsend with code: ".concat(e.status);
          console.log(a);
        });
    }
  } else {
    activeForm.removeClass("loading");
    activeForm.find("input.error").first().focus();
  }
});

function sendDataToPipedrive(data) {
  const API_KEY = "d291ce336580094a5ea31f509ac6a30c6288ca06";
  const API_URL = "https://api.pipedrive.com/v1/persons?api_token=" + API_KEY;
  function getQueryParams(url) {
    var queryParams = {};
    var parser = document.createElement("a");
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split("&");
    vars.forEach(function (v) {
      var pair = v.split("=");
      queryParams[pair[0]] = decodeURIComponent(pair[1]);
    });
    return queryParams;
  }

  var url = window.location.href;
  var params = getQueryParams(url);

  var utm_source = params["utm_source"];
  var utm_campaign = params["utm_campaign"];
  $.ajax({
    url: API_URL,
    type: "POST",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
    data: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      "1270774a4c06b5b037295365f4cd862ffa64cc7e": utm_source,
      "617788c5068a48c40edec294da8716d2b68f84b0": utm_campaign,
    }),
    success: function (response) {
      console.log("Success:", response);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
}

// DON'T TOUCH!!
function searchToObject() {
  return LP.CORE.getSearchJson();
}
