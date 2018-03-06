$(document).ready(function() {
    console.log( "ready!" );
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
function validate()
{
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
}

var password = document.getElementById("inputPassword")
  , confirm_password = document.getElementById("inputRepeatPassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function login(email, password)
{
  console.log("HELOOOOO");
    $.ajax({
        type: 'POST',
        url: 'http://10.0.0.21:3005/authenticate',
        data: { email: email, password: password },
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
            if(data['status'] == "success")
            {
                console.log("Login was successful");
                document.cookie='token='+data['token'];
                window.location = "../main";
            }
            else if (data['status'] == "error")
            {
              console.log("LOGIN FAILED!!!");
              var erroralert = "<div class=\"alert-danger alert-dismissible fade show\" role=\"alert\" id=\"errorAlert\">Email or password not correct!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>";
              document.getElementById("login-heading").after(erroralert);
              //document.getElementById("errorAlert").classList.add("show");
            }
        }
    });
}
