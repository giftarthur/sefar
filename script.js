$(document).ready(function(){

    $('menu').click(function(){
        $(this).toggleclass('fa-times')
        $('.nabar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times')
        $('.nabar').removeClass('nav-toggle');
    });

    
    })

