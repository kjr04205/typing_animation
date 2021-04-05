$(document).ready(function(){
    $(window).scroll(function(){
        var topControll = $(window).scrollTop();
        var position = $('#main').offset().top;

        if(position < topControll){
            $('#header').addClass('fixed');
        }
        else{
            $('#header').removeClass('fixed');
        }
    });
});
