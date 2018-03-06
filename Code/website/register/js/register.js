function register(firstname, lastname, username, email, password)
{
  console.log("HELOOOOO");
    $.ajax({
        type: 'POST',
        url: 'http://10.0.0.21:3005/signup',
        data: { firstname: firstname, lastname: lastname, username: username, email: email, password: password },
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
            if(data['status'] == "success")
            {
                console.log("Register was successful");
                document.cookie='token='+data['token'];
                window.location = "../main";
            }
            else if (data['status'] == "error")
            {
              console.log("Register FAILED!!!");
            }
        }
    });
}
