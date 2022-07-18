$(document).ready(function() {
    $('.btn1').on('click', function() {
        $('.box1').css('display', 'block')
    })

    $('i').on('click', function() {
        $('.box1').css('display', 'none')
    })

    for (let i = 1; i <= 2; ++i) {
        $('#submitBtn' + i).on('click', function() {
            var checkFiled1 = checkUsername('#username', i);
            var checkFiled2 = checkEmailId('#emailId', i);
            
            if(checkFiled1 && checkFiled2) {
                $('.box' + 1).css('display', 'none');
                return true;
            }

            else
                return false;
        })
    }

    $('#usernameValidation1').hide();
    $('#usernameValidation2').hide();
    $('#emailValidation1').hide();
    $('#emailValidation2').hide();

    $('#username1').keyup(function() {
        checkUsername('#username', 1);
    })
    $('#username2').keyup(function() {
        checkUsername('#username', 2);
    })

    $('#emailId1').keyup(function() {
        checkEmailId('#emailId', 1);
    })
    $('#emailId2').keyup(function() {
        checkEmailId('#emailId', 2);
    })

    function checkUsername(query, id) {
        var username = $(query + id).val();

        if(username == "") {
            $('#usernameValidation' + id).show();
            $('#usernameValidation' + id).html("Enter Username");
            $('#usernameValidation' + id).css("color", "red");

            return false;
        }

        else if(username.length < 3 || username.length > 10) {
            $('#usernameValidation' + id).show();
            $('#usernameValidation' + id).html("Invalid Username");
            $('#usernameValidation' + id).css("color", "red");

            return false;
        }

        $('#usernameValidation' + id).hide();
        return true;
    }

    function checkEmailId(query, id) {
        var emailId = $(query + id).val();
        var checkReg = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        if(!checkReg.test(emailId)) {
            $('#emailValidation' + id).show();
            $('#emailValidation' + id).html("Enter valid Email ID");
            $('#emailValidation' + id).css("color", "red");

            return false;
        }

        $('#emailValidation' + id).hide();
        return true;
    }
})