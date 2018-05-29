$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
  getAccount();
});

$('#import-button').click(function() {
    $('#import-input').click();
});

// Account Settings
var user = [];
function getAccount() {
  $.get(url+"/user?token="+getCookie("token"), function(data){
  console.log(data);
  user = JSON.parse(data);
  for(var i = 0; i < user.length; i++)
  {
    for(var j = 0; j < user[i].passEntry.length; j++)
    {
      user[i].passEntry[j] = decryptValue(user[i].passEntry[j], getCookie("password_local"));
    }
  }
  domAccount();
  });
}

function domAccount() {
  var inputFirstName = document.getElementById("inputFirstName");
  inputFirstName.setAttribute("value", user.firstname);
  var inputLastName = document.getElementById("inputLastName");
  inputLastName.setAttribute("value", user.lastname);
  var inputUsername = document.getElementById("inputUsername");
  inputUsername.setAttribute("value", user.username);
  var inputEmail = document.getElementById("inputEmail");
  inputEmail.setAttribute("value", user.email);

  var inputCountrySelect = document.getElementById("inputCountrySelect");
  inputCountrySelect.innerHTML="";
  for (var i = 0; i < countries.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = categories[i].name;
    inputCountrySelect.appendChild(option);
  }


}

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
    if(!getCookie("token")=="")
    {
        setCookie("token","",-1);
        window.location = "../login";
    }
    else
    {
        window.location = "../login";
    }
}

function exportRequest(){
  $.get(url+"/export?token="+getCookie("token"), function(data){
    console.log("expooorttt");
    console.log(data);
  })
}
