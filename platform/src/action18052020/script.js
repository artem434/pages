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
                        console.log(listItems);
                        function scrolling(e) {
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
        }
    };
});
