$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        if($(window).scrollTop() < 25){
            $('.header').hide();
        }else{
            $('.header').show();
        }

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.buttons').click(function(){
        var filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.filter-image').show();
        }else{
            $('.filter-image').not('.'+filter).hide();
            $('.filter-image').filter('.'+filter).show();
        }

        $(this).addClass('active').siblings().removeClass('active');
    });

});