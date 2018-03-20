function checkToken()
{
    if(!getCookie("token")=="")
    {
        $.ajax({ 
            type: 'GET', 
            url: 'https://api.iot.lime-tree.eu/checkToken?token='+getCookie("token"), 
            xhrFields: { withCredentials: true },
            dataType: 'json',
            success: function (data) { 
                console.log("spitzen token");
                if(data['status'] == "error")
                {
                    window.location = "https://iot.lime-tree.eu/index.php";
                }
            }
        });
    }
    else
    {
        window.location = "https://iot.lime-tree.eu/index.php";
    }
}


function getCategories()
{
$.get("http://10.0.0.21:3005/categories?token="+getCookie("token"), function(data){
console.log("succes");
console.log(data);
});
}


$(document).ready(function () { 
    document.cookie="token="+data['token'];
    var token = getCookie("token");
    console.log(token);
});

function addCatgory(){

$.post("http://10.0.0.21:3005/category?token="+getCookie("token"), {"name": "tesgfhjt6","order": 0,"passEntry": [{"name": "google","order": 0,"link": "apple.com","image": "bilduno","username": "hans","password":"hans2","notes": "herbert","customFields": [{"key": "1","value": "dflklg"}],"isfavourite": "false"}]})
}



function updateCategory(name, newName, orderNumber){

var _name = name;
var _newName = newName;
var _orderNumber = orderNumber;
$.ajax({

    dataType: 'json',
    type: 'PUT',
    url: 'http://10.0.0.21:3005/category?token='+getCookie("token"),
    data: {'name': _name, 'newname': _newName, 'neworder': _orderNumber},
    success: function(data)
    {
        console.log(data);
        if(['status'] == "success")
        {
            console.log("success");

        }

        else if(['status'] == "error")
        {
            console.log("error");
        }
    }

})
}

