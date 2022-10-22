$(function()
{
    'use strict';
    // adjust slider height
    // var minH=$(window).height(),
    // upperH=$('.upper-bar').innerHeight(),
    // navH=$('.navbar').innerHeight();
    // $('.slider').height(minH -(upperH + navH));

    $('.featuredWork  ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')==='.all')
        {
            // $('.suffle-imgs .col-sm').show();
            $('.suffle-imgs .col-sm').css('opacity',1);
        }
        else
        {
            $('.suffle-imgs .col-sm').css('opacity','.08');
            $($(this).data('class')).parent().css('opacity',1);
        }
    })
})