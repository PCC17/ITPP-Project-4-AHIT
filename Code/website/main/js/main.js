
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

var token;

function getCategories() {
    var catName;

    $.ajax({
        type: 'GET',
        url: 'http://10.0.0.21:3005/categories?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhODJhZjc4MTczODk4NTE0MDQ0NGUyYyIsImVtYWlsIjoicGF1bHM4NjlraWw3OC5jYW1lcmxvaGVyQGh0bGtyZW1zLmF0IiwiaWF0IjoxNTE5NzI1NzEyLCJleHAiOjE1MTk3MzU3OTJ9.Wz87V4D39q7iVlH6XKHDohZeMeWv6bhO37zATooa3ow',
        type: 'GET',
        data: 'name'
    })
}

function updateCategorie(oldName,newName) {
    $.ajax({
        url:http://10.0.0.21:3005/category/
        type: 'PUT',
        data: "name=oldName&newName=newName",
        succes: function(data){
            alert('hat funktioniert');
        }

    })
}

