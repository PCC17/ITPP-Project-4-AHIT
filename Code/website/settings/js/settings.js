$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
});

$('#import-button').click(function() {
    $('#import-input').click();
});

// csv TO json
//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}



// LOGOUT FUNCTION
function logout()
{
  console.log("Tschüüüüss");
    $.ajax({
        type: 'POST',
        url: 'http://10.0.0.21:3005/logout',
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
