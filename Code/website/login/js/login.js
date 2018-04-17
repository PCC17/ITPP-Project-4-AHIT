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
//confirm_password.onkeyup = validatePassword;


function login(email, password)
{
  console.log("HELOOOOO");
    $.ajax({
        type: 'POST',
        url: url + '/authenticate',
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
                setCookie("token",data['token'],5);
                window.location = "../main";
            }
            else if (data['status'] == "error")
            {
              console.log("LOGIN FAILED!!!");

              var t = document.getElementById("errorAlertDiv");

              var alert = document.createElement('div');
              alert.className = 'alert alert-danger alert-dismissible fade show';
              alert.id = "errorAlert";
              alert.innerHTML = "Email or Passwort wrong";
              t.appendChild(alert);

              var dismissbtn = document.createElement('button');
              dismissbtn.className = 'close';
              dismissbtn.setAttribute("type", "button");
              dismissbtn.setAttribute("data-dismiss", "alert");
              alert.appendChild(dismissbtn);

              var span = document.createElement("span");
              span.setAttribute("aria-hidden", "true");
              span.innerHTML = "&times;";
              dismissbtn.appendChild(span);
            }
        }
    });
}
