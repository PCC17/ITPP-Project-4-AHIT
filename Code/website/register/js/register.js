function register(firstname, lastname, username, email, birthdate, password)
{
  console.log("Registering started");
    $.ajax({
        type: 'POST',
        url: url + '/signup',
        data: { "firstname": firstname, "lastname": lastname, "username": username, "email": email, "birthDate": birthdate, "password": password },
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
            if(data['status'] == "success")
            {
                console.log("Register was successful");
                document.cookie='token='+data['token'],5;
                window.location = "../login";
            }
            else if (data['status'] == "error")
            {
              console.log("Register FAILED!!!");
            }
        }
    });
}
