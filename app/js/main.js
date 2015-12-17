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
    
    
    $('#modal-form').validate({
        errorElement: 'div',
        rules: {
            nameProject: {
                required: true
            },
            urlProject: {
                required: true,
                url: true
            },
            descriptionProject: {
                required: true
            },
            uploadFile: {
                required: true,
                
            }
        },
        messages: {
            nameProject: 'название проекта',
            urlProject: 'ссылка на проект',
            descriptionProject: 'описание',
            uploadFile: 'изображение'
        },
        //invalidHandler: function () {
        //    if(!$('#fileProject').valid())
        //        $('#uploadFile').addClass("error");
        //},
        //submitHandler: function () {
        //    if($('#fileProject').valid())
        //        $('#uploadFile').removeClass("error");
        //},
        
    });
    
    
});