$(function(){
    $('.hamburger').on('click', function(){
        if($('header').hasClass('open')){
            $('header').removeClass('open');
        } else {
            $('header').addClass('open');
        }
    });
    
});

$(document).ready(function(){
    $('#js-slick').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        infinite: true,
    });
});

