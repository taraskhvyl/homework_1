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
    
    $('.close-red').on('click', function(){
        $('.error-mess').hide();
    });
    
    $('#modal-form').validate({
        errorElement: 'div',
        rules: {
            nameProject: {
                required: true
            },
            urlProject: {
                required: true,
                complete_url: true
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
        
        
    });
    jQuery.validator.addMethod("complete_url", function(val, elem) {
        // if no url, don't do anything
        if (val.length == 0) { return true; }

        // if user has not entered http:// https:// or ftp:// assume they mean http://
        if(!/^(https?|ftp):\/\//i.test(val)) {
            val = 'http://'+val; // set both the value
            $(elem).val(val); // also update the form element
        }
        // now check if valid url
        // http://docs.jquery.com/Plugins/Validation/Methods/url
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(val);
    });
    
    
});

