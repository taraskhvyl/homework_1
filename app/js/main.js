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
                $('.nav').removeClass('showMenu');
            }
            else {
                $('.block-ahead-body').fadeIn();
                $('.nav').addClass('showMenu');
            }
        }
    );
    function hideMenu() {
        $('.nav').removeClass('showMenu');
        $('.block-ahead-body').fadeOut();
    }
    $('.block-ahead-body').click(
        function () {
            hideMenu();
        }
    );
    
});