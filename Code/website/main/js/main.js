function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//$.get("http://10.0.0.21:3005/categories?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhODJhZjc4MTczODk4NTE0MDQ0NGUyYyIsImVtYWlsIjoicGF1bHM4NjlraWw3OC5jYW1lcmxvaGVyQGh0bGtyZW1zLmF0IiwiaWF0IjoxNTIwMzE5Njc1LCJleHAiOjE1MjAzMjk3NTV9.-UKTxAVeK6ioitxGPGlejpcsSiMY_Kel1dhRKYfQsKk", function(data){
//console.log("succes");
//console.log(data);
//});


$(document).ready(function () { 
    document.cookie="token="+data['token'];
    var token = getCookie("token");
    console.log(token);
});

function addCatgory(){

$.post("http://10.0.0.21:3005/category?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhODJhZjc4MTczODk4NTE0MDQ0NGUyYyIsImVtYWlsIjoicGF1bHM4NjlraWw3OC5jYW1lcmxvaGVyQGh0bGtyZW1zLmF0IiwiaWF0IjoxNTIwMzE5Njc1LCJleHAiOjE1MjAzMjk3NTV9.-UKTxAVeK6ioitxGPGlejpcsSiMY_Kel1dhRKYfQsKk", {"name": "tesgfhjt6","order": 0,"passEntry": [{"name": "google","order": 0,"link": "apple.com","image": "bilduno","username": "hans","password":"hans2","notes": "herbert","customFields": [{"key": "1","value": "dflklg"}],"isfavourite": "false"}]})
}



function updateCategory(name, newName, orderNumber){

var _name = name;
var _newName = newName;
var _orderNumber = orderNumber;
$.ajax({

    dataType: 'json',
    type: 'PUT',
    url: 'http://10.0.0.21:3005/category?token=',
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

