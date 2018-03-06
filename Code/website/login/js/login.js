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
