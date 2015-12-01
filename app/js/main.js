$(document).ready(function(){
    // hover на работах
    $('.work-image').hover(
        function(){
            $(this).parent().find('.block-ahead').stop(true).fadeIn(300);
        },function(){
            $(this).parent().find('.block-ahead').fadeOut(100);
        })
    
    
})