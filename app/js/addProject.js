var addProject = (function () {
    
    var init = function () {
        _setUpListners();
    };
    
    var _setUpListners = function () {
        
        $('.add-work').on('click', _showModal); // открытие модалки
        $('#fileProject').on('change', _addText); // инпут с файлом
        $('.icon-drive').on('click', _clickAddFile);
        $('#modal-form').on('submit', _submitForm);
        
    };
    
    var _showModal = function (e) {
        
        var popup = $('#popup'),
            form = popup.find('form');
        
        e.preventDefault();
        popup.bPopup({
            positionStyle: 'fixed', //'fixed' or 'absolute'
            modalClose: true,
            transition: 'slideDown',
            onClose: function() {
                $('.message').hide();
                form.find('input').val('');
                form.find('textarea').val('');
            }
        });
        
    };
    
    var _submitForm = function (e) {
        
        e.preventDefault();
        var form = $(this),
            url = 'send.php',
            data = form.serialize();
        
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: data,
        })
          .done(function(ans){
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
    
    var _addText = function () {
      
        $('#uploadFile').val(this.value);
        
    };
    
    var _clickAddFile = function () {
      
        $('#fileProject').click();
        
    };
    
    return {
        init: init
    }
    
    
})();

addProject.init();