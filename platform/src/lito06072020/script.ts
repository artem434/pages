import $ from 'jquery';
import 'bootstrap';
import YT from "youtube";
jQuery(($) => {


    $(window).on('resize', function() {

        if ( $(window).width() <820 ) {

            var isScrolling = false;

            window.addEventListener("scroll", throttleScroll, false);

            function throttleScroll(e) {
                if (isScrolling == false) {
                    window.requestAnimationFrame(function() {
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
                console.log("ok")

                for (var y = 0; y < profits__blockItems.length; y++) {
                    var profits__blockItem = profits__blockItems[y];

                    if (isPartiallyVisible(profits__blockItem)) {
                        profits__blockItem.classList.add("active3");
                    } else {
                        profits__blockItem.classList.remove("active3");

                    }
                }

                for (var i = 0; i < listItems.length; i++) {
                    var listItem = listItems[i];

                    if (isPartiallyVisible(listItem)) {
                        listItem.classList.add("active3");
                    } else {
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

    jQuery(document).ready(function($){
        if($('ul.package__list').find('li').length > 5){
            $(.js-show_hide).html('а ще входить...');
            $('.js-show_hide').click(function(){
                $(this).prev().children('li:nth-child(n+5)').slideToggle('');
                $(this).toggleClass('opnd_g');
                if($(this).hasClass('opnd_g')){
                    $(this).html('приховати');}
                else {$(this).html('а ще входить...');}
            });
        }else{$('.show_hide_list').hide();}
    });
});

