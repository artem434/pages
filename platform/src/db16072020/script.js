System.register(["bootstrap"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            jQuery(function ($) {
                $(window).on('resize', function () {
                    if ($(window).width() < 820) {
                        var isScrolling = false;
                        window.addEventListener("scroll", throttleScroll, false);
                        function throttleScroll(e) {
                            if (isScrolling == false) {
                                window.requestAnimationFrame(function () {
                                    scrolling(e);
                                    isScrolling = false;
                                });
                            }
                            isScrolling = true;
                        }
                        document.addEventListener("DOMContentLoaded", scrolling, false);
                        var listItems = document.querySelectorAll(".package");
                        var profits__blockItems = document.querySelectorAll(".profits__item");
                        console.log(listItems);
                        function scrolling(e) {
                            console.log("ok");
                            for (var y = 0; y < profits__blockItems.length; y++) {
                                var profits__blockItem = profits__blockItems[y];
                                if (isPartiallyVisible(profits__blockItem)) {
                                    profits__blockItem.classList.add("active3");
                                }
                                else {
                                    profits__blockItem.classList.remove("active3");
                                }
                            }
                            for (var i = 0; i < listItems.length; i++) {
                                var listItem = listItems[i];
                                if (isPartiallyVisible(listItem)) {
                                    listItem.classList.add("active3");
                                }
                                else {
                                    listItem.classList.remove("active3");
                                }
                            }
                        }
                        function isPartiallyVisible(el) {
                            var elementBoundary = el.getBoundingClientRect();
                            var top = elementBoundary.top;
                            var bottom = elementBoundary.bottom;
                            var height = elementBoundary.height;
                            return ((top + height >= 300) && (height + 300 >= bottom));
                        }
                    }
                    return;
                });
                jQuery(document).ready(function ($) {
                    if ($('ul.package__list').find('li').length > 5) {
                        $('.js-show_hide').click(function () {
                            $(this).prev().children('li:nth-child(n+5)').slideToggle('');
                            $(this).toggleClass('opnd_g');
                            if ($(this).hasClass('opnd_g')) {
                                $(this).html('приховати');
                            }
                            else {
                                $(this).html('а ще входить...');
                            }
                        });
                    }
                    else {
                        $('.show_hide_list').hide();
                    }
                });
            });
            $('[data-timer-2]').each(function (index, elem) {
                var units = [86400, 3600, 60, 1];
                var a = $(elem).data('timer-2').split(/[^0-9]/);
                var due = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
                function pad(a) {
                    a = Math.floor(a);
                    if (a <= 0)
                        return '00';
                    return a < 10 ? '0' + a : a;
                }
                function update() {
                    var timeLeft = Math.floor((due.getTime() - new Date().getTime()) / 1000);
                    var u = units.map(function (s) {
                        var unit = (timeLeft < 0) ? 0 : Math.floor(timeLeft / s);
                        timeLeft -= unit * s;
                        return pad(unit);
                    });
                    $('.seconds', elem).text(pad(u[3]));
                    $('.minuts', elem).text(pad(u[2]));
                    $('.hours', elem).text(pad(u[1]));
                    $('.days', elem).text(pad(u[0]));

                    if (pad(u[3]) == 0 && pad(u[2]) == 0 && pad(u[1]) == 0 && pad(u[0]) == 0)  {
                        $('[data-timer-2]').hide();
                        $('.order__title').hide();
                    }
                }
                setInterval(update, 1000);
            });
        }
    };
});
