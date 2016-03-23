function ValidateForm() {
    var salutation_code = $("#salutation_code").val().trim();
    var first_name = $("#first_name").val().trim();
    var last_name = $("#last_name").val().trim();
    var birth_date = $("#birth_date").val().trim();
    var street_address = $("#street_address").val().trim();
    var postal_code = $("#postal_code").val().trim();
    var town = $("#town").val().trim();
    var country = $("#country").val();
    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    var heard_about_us = $("#heard_about_us").val().trim();
    var message = $("#message").val();
    var privacy_agree = $("#privacy_agree").val();

    if (salutation_code == '') {
        alert("Please Select Salutation Code");
        return false;
    }

    if (first_name == '') {
        alert("Please Provide First Name");
        $("#first_name").focus();
        return false;
    }

    if (last_name == '') {
        alert("Please Provide Last Name");
        $("#last_name").focus();
        return false;
    }

    if (birth_date == '') {
        alert("Please Enter Birth Date");
        $("#birth_date").focus();
        return false;
    }

    if (street_address == '') {
        alert("Please Enter Street Address");
        $("#street_address").focus();
        return false;
    }

    if (postal_code == '') {
        alert("Please Enter Postal Code");
        $("#postal_code").focus();
        return false;
    }

    if (town == '') {
        alert("Please Enter Town");
        $("#town").focus();
        return false;
    }

    if (country == '') {
        alert("Please Select Country");
        $("#country").focus();
        return false;
    }

    if (phone == '') {
        alert("Please Enter Phone number");
        $("#phone").focus();
        return false;
    }

    if (email == '') {
        alert("Please Enter Email");
        $("#email").focus();
        return false;
    }

    if (heard_about_us == '') {
        alert("Please Select the source from where you heard about us");
        return false;
    }


    if (message == '') {
        alert("Please Enter Message");
        $("#message").focus();
        return false;
    }

    if (privacy_agree == '0') {
        alert("Please accept our privacy agreement");
        return false;
    }
    
    var file_validation = prepareUpload();
    if(!file_validation){
        return false;
    }

}

function prepareUpload()
{
    var isValid = true;
    var files = $('#file_name')[0].files;
    var str_msg = '';
    if(files.length > 0){
        for (var i = 0; i < files.length; i++){
            var size = files[i].size;
            var file_name = files[i].name;
            var file_size = Math.round((size / 1048576));
            if (file_size > 2) {
                str_msg += "Size of File : "+file_name+" is more than 2 MB";
                str_msg += '\n';
                isValid = false;
            }
        }
    }
    if(!isValid){
        alert(str_msg);
    }
    return isValid;
}