var categories;
var list = document.getElementById('sortable');

function getCategories()
{
$.get("http://10.0.0.21:3005/categories?token="+getCookie("token"), function(data){
console.log("succes");
categories = JSON.parse(data);
domCategories();
});
}


$(document).ready(function () {
    getCategories();
});

function addCatgory(name,order,peName,peOrder,peLink, peImage, peUsername, pePassword, peNotes, cfKey, cfValue, peIsFavourite){

var _name = name;
var _order = order;
var _peName = peName;
var _peOrder = peOrder;
var _peLink = peLink;
var _peImage = peImage;
var _peUsername = peUsername;
var _pePassword = pePassword;
var _peNotes = peNotes;
var _cfKey = cfKey;
var _cfValue= cfValue;
var _peIsFavourite = peIsFavourite;

$.post("http://10.0.0.21:3005/category?token="+getCookie("token"), {"name": "tesgfhjt6","order": 0,"passEntry": [{"name": "google","order": 0,"link": "apple.com","image": "bilduno","username": "hans","password":"hans2","notes": "herbert","customFields": [{"key": "1","value": "dflklg"}],"isfavourite": "false"}]})

}

function domCategories(){
    console.log(categories);
    for(var i = 0; i < categories.length; i++)
    {
        var catname = document.createElement('li');
        catname.className = 'nav-item navy my-nav-left';
        catname.id = categories[i].name;
        list.appendChild(catname);
        var catnameChild = document.createElement('a');
        catnameChild.innerHTML = categories[i].name;
        catnameChild.className = 'nav-link';
        catnameChild.innerHTML = categories[i].name;
        var y = document.getElementById(categories[i].name);
        y.appendChild(catnameChild);

    }
}

function domEntries() {
    console.log(categories);
    for(var i = 0; i < categories.length; i++)
    {
        var catname = document.createElement('li');
        catname.className = 'nav-item navy my-nav-left';
        catname.id = categories[i].name;
        list.appendChild(catname);
        var catnameChild = document.createElement('a');
        catnameChild.innerHTML = categories[i].name;
        catnameChild.className = 'nav-link';
        catnameChild.innerHTML = categories[i].name;
        var y = document.getElementById(categories[i].name);
        y.appendChild(catnameChild);
}

function favEntries() {

}

function getEntries(catname) {
var _catname = catname;
$.get("http://10.0.0.21:3005/"+_catname+"/entries?token="+getCookie("token"), function(data){
console.log(data);
});
}

function addEntry(category, name, order, link, image, username, password, notes, cfKey, cfValue, favourtie) {
//addEntry("546", "entriy12", 1, "www.ahdjd,com", "coolesImage", "UserNamen", "SicheresPassword", "notizen", "Liste", "InhaltderListe", "true");

var _category = category;
var _peName = name;
var _peOrder = order;
var _peLink = link;
var _peImage = image;
var _peUsername = username;
var _pePassword = password;
var _peNotes = notes;
var _cfKey = cfKey;
var _cfValue= cfValue;
var _peIsFavourite = favourtie;
$.ajax({

    dataType: 'json',
    type: 'POST',
    url: "http://10.0.0.21:3005/"+_category+"/entry?token="+getCookie("token"),
    data: {"name": _peName,
            "order": _peOrder,
            "link": _peLink,
            "image": _peImage,
            "username": _peUsername,
            "password": _pePassword,
            "notes": _peNotes,
            "customFields": [{"key": _cfKey,"value": _cfValue}],
            "isfavourite": _peIsFavourite},
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

function updateCategoryOrder(name, orderNumber){

var _name = name;
var _orderNumber = orderNumber;
$.ajax({

    dataType: 'json',
    type: 'PUT',
    url: 'http://10.0.0.21:3005/category?token='+getCookie("token"),
    data: {'name': _name, 'neworder': _orderNumber},
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

function updateCategoryName(name, newname){

var _name = name;
var _newName = newname;
$.ajax({

    dataType: 'json',
    type: 'PUT',
    url: 'http://10.0.0.21:3005/category?token='+getCookie("token"),
    data: {'name': _name, 'newname': _newName},
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
