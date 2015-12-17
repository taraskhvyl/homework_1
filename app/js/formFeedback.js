$(document).ready(function () {

    $('#formFeedback').validate({
        errorElement: 'div',
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            captcha: {
                required: true,
                minlength: 6,
                maxlength: 6
            }
        },
        messages: {
            name: 'введите имя',
            email: 'введите email',
            message: 'ваш вопрос',
            captcha: 'код капчи'
        },
    });   
});



var addProject = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function () {

        $('#formFeedback').on('submit', _submitFeedback);
        $('button[type="reset"]').on('click', _resetAll)

    };

    var _submitFeedback = function (e) {

        e.preventDefault();
        var form = $(this),
            url = 'feedback.php',
            data = form.serialize();
        //_checkFile();

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: data,
        })
            .done(function(ans){
            $('.message').hide();
            if (ans.status == 'OK') {
                form
                    .hide()
                    .siblings('.success-mess')
                    .show()
            } else {
                $('.error-mess').show();
            }
        })
            .fail(function(){
            form
                .find('.error-mess')
                .text('Ошибка');
        })

    };


   var _resetAll = function(){
       $('#formFeedback').validate().resetForm();
       $('.message').hide();
   }
    return {
        init: init
    }


})();

addProject.init();
