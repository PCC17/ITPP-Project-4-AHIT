$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
  getAccount();
  var file;

   document.getElementById('inputFile').addEventListener('change', readSingleFile, false);

  $.get(url+"/export?token="+getCookie("token"), function(data){
  console.log(data);
});


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

}

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
  return JSON.stringify(result);
}

function importChanged()
{
  var jsonfile = document.getElementById("inputFile").files[0];
  console.log(jsonfile);

  importFile(jsonfile);
}

function importFile(file){
  $.ajax({
      dataType: 'json',
      type: 'POST',
      url: url+"/import?token="+getCookie("token"),
      data: { "lines": [file]},
      success: function(data)
      {
          console.log(data);
          getCategories();
          if(['status'] == "success")
          {
              console.log("success");
          }

          else if(['status'] == "error")
          {
              console.log("error");
          }
      }

  });
}

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


var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function crypt( str,  encrypt)
{
  arrayOfLines = str.match(/[^\r\n]+/g);
  for(var i = 0; i < arrayOfLines.length; i++)
  {
    var sp = arrayOfLines[i].split(';');
    if(encrypt)
    {
      sp[3] = encryptValue(sp[3], getCookie("token"));
    }
    else {
      sp[3] = decryptValue(sp[3], getCookie("token"));
    }
    arrayOfLines[i] = "";
    for(var j = 0; j < sp.length; j++)
    {
      arrayOfLines[i] += sp[j] + ";";
    }
    console.log(arrayOfLines[i]);
  }
  str= "";
  for(var i = 0; i < arrayOfLines.length; i++)
  {
    str += arrayOfLines[i] + '\n';
  }
  return str;
}

function download() {
  var client = new HttpClient();
  client.get( url+"/export?token="+getCookie("token"), function(response) {
  var element = document.createElement('a')
  response = crypt(response, false);
    console.log(response);
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response));
  element.setAttribute('download', "export.csv");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});

}



function checkMobile()
{

  if(typeof window.orientation !== 'undefined')
  {
    console.log("mobile");
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  }
  else
  console.log("not mobile");

}
