import $ from 'jquery';
import 'bootstrap';
import YT from "youtube";
jQuery(($) => {




    jQuery(document).ready(function($){
        if($('ul.package__list').find('li').length > 5){
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

