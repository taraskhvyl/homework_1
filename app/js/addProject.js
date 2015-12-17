var addProject = (function () {
    
    var init = function () {
        _setUpListners();
    };
    
    var _setUpListners = function () {
        
        $('.add-work').on('click', _showModal); // открытие модалки
        $('#fileProject').on('change', _addText); // инпут с файлом
        $('#fileProject').on('keyup', _addText); // инпут с файлом
        $('.icon-drive').on('click', _clickAddFile);
        $('#modal-form').on('submit', _submitForm);
        $('#formFeedback').on('submit', _submitFeedback);
        $('.close-red').on('click', _closeError);
        
    };
    
    var _showModal = function (e) {
        
        var popup = $('#popup'),
            form = popup.find('form');
        
        (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
        popup.bPopup({
            positionStyle: 'fixed', //'fixed' or 'absolute'
            modalClose: true,
            transition: 'slideDown',
            onClose: function() {
                $('.message').hide();
                form.find('input').val('');
                form.find('textarea').val('');
                form.show();
                form.validate().resetForm();
                form.find('input,textarea').removeClass('error');
            }
        });
        
    };
    
    var _submitForm = function (e) {
        
        e.preventDefault();
        var form = $(this),
            url = 'send.php',
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
    
    var _submitFeedback = function (e) {

        e.preventDefault();
        var form = $(this),
            url = 'send.php',
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
                    .show();
                    
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
    
    
    var _addText = function () {
      
        $('#uploadFile').val(this.value);
        $('#modal-form').validate().element( "#uploadFile" );
    };
    
    var _clickAddFile = function () {
      
        $('#fileProject').click();
        
    };
    
    var _closeError = function () {
        
        $('.error-mess').hide();
        
    };
    
    //var _checkFile = function () {
        
    //    if($('#fileProject').hasClass('error')){
    //        $('#uploadFile').addClass('error');
    //    } else {
    //        $('#uploadFile').removeClass('error');
    //    }
        
    //};
    return {
        init: init
    }
    
    
})();

addProject.init();