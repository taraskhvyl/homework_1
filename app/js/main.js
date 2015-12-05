$(document).ready(function () {
    // hover на работах
    $('.work-image').hover(
        function () {
            $(this).parent().find('.block-ahead').stop(true).fadeIn(300);
        },
        function () {
            $(this).parent().find('.block-ahead').fadeOut(100);
        }
    );

    
    
    $('.mobile-menu').click(
        function () {
            var viMenu = $('.block-ahead-body').is(":visible");
            if (viMenu === true) {
                $('.block-ahead-body').fadeOut();
                $('.nav').css('display','none');
            }
            else {
                $('.block-ahead-body').fadeIn();
                $('.nav').css('display','block');
            }
        }
    );
    function hideMenu() {
        $('.nav').fadeOut();
        $('.block-ahead-body').fadeOut();
    }
    $('.block-ahead-body').click(
        function () {
            hideMenu();
        }
    );
    
});