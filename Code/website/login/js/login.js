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
              addClass('#errorAlert', 'show');
            }
        },
        error: function(error) {
          console.log(error);
        }
    });
}
