$.validator.addMethod(
    "phone",
    function (value) {
        return value.replace(/\D+/g, "").length >= 11;
    },
    "Введите номер телефона полностью"
);





$('[data-form-politics-checkbox]').on('change', function(){
    if( $(this).prop('checked') === true ) {
        console.log('Вкл');
        $(this).closest('form').find('.btn').prop('disabled', false);
    }else {
        console.log('Выкл');
        $(this).closest('form').find('.btn').prop('disabled', true);
    }
});