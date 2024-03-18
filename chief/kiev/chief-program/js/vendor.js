
/**
 * SyoTimer v.1.1.0 | under MIT licence
 * https://github.com/mrfratello/SyoTimer#readme
 */
!function(e){const t=86400,i=3600,o=60;var n={rus:{second:["секунда","секунды","секунд"],minute:["минута","минуты","минут"],hour:["час","часа","часов"],day:["день","дня","дней"]},eng:{second:["second","seconds"],minute:["minute","minutes"],hour:["hour","hours"],day:["day","days"]}};const r={year:2014,month:7,day:31,hour:0,minute:0,second:0,timeZone:"local",ignoreTransferTime:!1,periodic:!1,periodInterval:7,periodUnit:"d",dayVisible:!0,dubleNumbers:!0,doubleNumbers:!0,effectType:"none",lang:"eng",headTitle:"",footTitle:"",afterDeadline:function(e){e.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>')}};var a={init:function(t){var i=e.extend({},r,t||{});return t.hasOwnProperty("dubleNumbers")&&(i.doubleNumbers=t.dubleNumbers),this.each(function(){var t=e(this);t.data("syotimer-options",i),a._render.apply(this,[]),a._perSecondHandler.apply(this,[])})},_render:function(){var t,i=e(this),o=i.data("syotimer-options"),n=o.dayVisible?s.getCellDom("day","0"):"";t='<div class="timer-head-block">'+o.headTitle+'</div><div class="timer-body-block">'+n+s.getCellDom("hour")+s.getCellDom("minute")+s.getCellDom("second")+'</div><div class="timer-foot-block">'+o.footTitle+"</div>",i.addClass("syotimer").addClass("timer").html(t);var r=e(".timer-head-block",i),a=e(".timer-body-block",i),d=e(".timer-foot-block",i),l={headBlock:r,bodyBlock:a,footBlock:d};i.data("syotimer-blocks",l)},_perSecondHandler:function(){var t=e(this),i=t.data("syotimer-options");e(".second .tab-val",t).css("opacity",1);var o=new Date,n=new Date(i.year,i.month-1,i.day,i.hour,i.minute,i.second),r=s.getDifferenceWithTimezone(o,n,i),d=s.getSecondsToDeadLine(r,i);d>=0?(a._refreshUnitsDom.apply(this,[d]),a._applyEffectSwitch.apply(this,[i.effectType])):(t=e.extend(t,t.data("syotimer-blocks")),i.afterDeadline(t))},_refreshUnitsDom:function(t){var i=e(this),o=i.data("syotimer-options"),r=["day","hour","minute","second"],a=s.getUnitsToDeadLine(t),d=n[o.lang];o.dayVisible||(a.hour+=24*a.day,r.splice(0,1));for(var l=0;l<r.length;l++){var c=r[l],u="."+c;e(u+" .tab-val",i).html(s.format2(a[c],"day"!=c&&o.doubleNumbers)),e(u+" .tab-unit",i).html(s.definitionOfNumerals(a[c],d[c],o.lang))}},_applyEffectSwitch:function(t){var i=this,o=e(i);switch(t){case"none":setTimeout(function(){a._perSecondHandler.apply(i,[])},1e3);break;case"opacity":e(".second .tab-val",o).animate({opacity:.1},1e3,"linear",function(){a._perSecondHandler.apply(i,[])})}}},s={getCellDom:function(e,t){return e=e||"",t=t||"00",'<div class="table-cell '+e+'"><div class="tab-val">'+t+'</div><div class="tab-metr tab-unit"></div></div>'},getSecondsToDeadLine:function(e,t){var i,o=e/1e3;if(o=Math.floor(o),t.periodic){var n,r,a=s.getPeriodUnit(t.periodUnit),d=e/(1e3*a);d=Math.ceil(d),d=Math.abs(d),o>=0?(r=d%t.periodInterval,r=0==r?t.periodInterval:r,r-=1):r=t.periodInterval-d%t.periodInterval,n=o%a,0==n&&o<0&&r--,i=Math.abs(r*a+n)}else i=o;return i},getUnitsToDeadLine:function(e){for(var t=["day","hour","minute","second"],i={},o=0;o<t.length;o++){var n=t[o],r=s.getPeriodUnit(n);i[n]=Math.floor(e/r),e%=r}return i},getPeriodUnit:function(e){switch(e){case"d":case"day":return t;case"h":case"hour":return i;case"m":case"minute":return o;case"s":case"second":return 1}},getDifferenceWithTimezone:function(e,t,i){var o,n=t.getTime()-e.getTime(),r=0,a=0;if("local"!==i.timeZone){var d=parseFloat(i.timeZone)*s.getPeriodUnit("hour"),l=-e.getTimezoneOffset()*s.getPeriodUnit("minute");r=1e3*(d-l)}if(i.ignoreTransferTime){var c=-e.getTimezoneOffset()*s.getPeriodUnit("minute"),u=-t.getTimezoneOffset()*s.getPeriodUnit("minute");a=1e3*(c-u)}return o=r+a,n-o},format2:function(e,t){return t=t!==!1,e<=9&&t?"0"+e:""+e},definitionOfNumerals:function(e,t,i){switch(i){case"rus":var o,n=[2,0,1,1,1,2];return o=e%100>4&&e%100<20?2:n[e%10<5?e%10:5],t[o];case"eng":return t[1==e?0:1]}}},d={setOption:function(t,i){var o=e(this),n=o.data("syotimer-options");n.hasOwnProperty(t)&&(n[t]=i,o.data("syotimer-options",n))}};e.fn.syotimer=function(t){if("string"==typeof t&&"setOption"===t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){d[t].apply(this,i)})}return null===t||"object"==typeof t?a.init.apply(this,[t]):void e.error("SyoTimer. Error in call methods: methods is not exist")}}(jQuery);
//# sourceMappingURL=jquery.syotimer.min.js.map

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'auto'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        // s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          // stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));