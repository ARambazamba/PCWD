//# sourceURL=validate.js

function addValidator() {

    debugger;
    $('form').validate({
            
        rules: {
            fullname: {
                required: true
            },
            password: {
                required: true
            },
            submitHandler: function (form) {
                console.log('ajax being called...');
            },
            invalidHandler: function (event, validator) {
                console.log('number of invalid fields: ' + validator.numberOfInvalids());
            }
        }
    });
}

addValidator();

//$(document).ready(function () {
//    addValidator();
//});
