$(document).ready(function () {
    $.validator.addMethod("startsWithA", function (value, element) {
        return /^A/.test(value);
    }, 'Field must start with A');


    $('form').validate({
        rules: {
            fullname: {
                required: true,
                startsWithA: true
            },
            password: {
                required: true
            },
            submitHandler: function (form) {
                alert('ajax being called...');
            },
            invalidHandler: function (event, validator) {
                alert('number of invalid fields: ' + validator.numberOfInvalids());
            }
        }
    });
});