var categories = [];
var entries = [];
var list = document.getElementById('sortable');

function getCategories()
{
$.get("http://10.0.0.21:3005/categories?token="+getCookie("token"), function(data){
console.log(data);
categories = data;
domCategories();
});
}


$(document).ready(function () {
<<<<<<< HEAD
    checkToken();
    getCategories();
=======
>>>>>>> b4a9450b1573aa95ff431ddb3d1fa8790823f874
    //addCatgory();
    //addEntry("ASDF", "entriy12", 1, "www.ahdjd,com", "coolesImage", "UserNamen", "SicheresPassword", "notizen", "Liste", "InhaltderListe", "true");
    getEntries();
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

$.post("http://10.0.0.21:3005/category?token="+getCookie("token"), {"name": "ASDF","order": 0,"passEntry": [{"name": "google","order": 0,"link": "apple.com","image": "bilduno","username": "hans","password":"hans2","notes": "herbert","customFields": [{"key": "1","value": "dflklg"}],"isfavourite": "false"}]})

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
    console.log(entries);
    for(var i = 0; i < entries.length; i++)
    {
        var entry = document.createElement('article');
        entry.className = 'entry';
        var card = document.createElement('div');
        card.className = 'card';
        entry.appendChild(card);
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = entries[i].name;
        card.appendChild(cardheader);
        var cardbody = document.createElement('ul');
        cardbody.className = 'list-group list-group-flush';
        card.appendChild(cardbody);

        var cardentry1 = document.createElement('li');
        cardentry1.className = 'list-group-item';
        cardentry1.innerHTML = entries[i].username;
        cardbody.appendChild(cardentry1);

        var cardentry2 = document.createElement('li');
        cardentry2.className = 'list-group-item';
        cardentry2.innerHTML = entries[i].password;
        cardbody.appendChild(cardentry2);

        var cardentry3 = document.createElement('li');
        cardentry3.className = 'list-group-item';
        cardentry3.innerHTML = entries[i].notes;
        cardbody.appendChild(cardentry3);

        var content = document.getElementById('content');
        content.appendChild(entry);
}
}

function checkfavEntries() {
    var favEntries = [];
    console.log(categories);
    for(var i = 0; i< entries.length; i++)
    {
      if(element.isfavourite == true)
      {
        favEntries.push(element);
      }
    }
    console.log(favEntries);
    for(var i = 0; i < entries.length; i++)
    {
        var entry = document.createElement('article');
        entry.className = 'entry';
        var card = document.createElement('div');
        card.className = 'card';
        entry.appendChild(card);
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = favEntries[i].name;
        card.appendChild(cardheader);
        var cardbody = document.createElement('ul');
        cardbody.className = 'list-group list-group-flush';
        card.appendChild(cardbody);

        var cardentry1 = document.createElement('li');
        cardentry1.className = 'list-group-item';
        cardentry1.innerHTML = favEntries[i].username;
        cardbody.appendChild(cardentry1);

        var cardentry2 = document.createElement('li');
        cardentry2.className = 'list-group-item';
        cardentry2.innerHTML = favEntries[i].password;
        cardbody.appendChild(cardentry2);

        var cardentry3 = document.createElement('li');
        cardentry3.className = 'list-group-item';
        cardentry3.innerHTML = favEntries[i].notes;
        cardbody.appendChild(cardentry3);

        var content = document.getElementById('content');
        content.appendChild(entry);
}

}


function getEntries() {
getCategories();
console.log(categories);
for(var i = 0; i < categories.length; i++)
{

  var _catname = categories[i].name;
  console.log(_catname);
  $.get("http://10.0.0.21:3005/"+_catname+"/entries?token="+getCookie("token"), function(data){
    console.log(data);
    window.entries.push(data);
    console.log(entries);
});
}
domEntries();
checkfavEntries();
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


function checkFavCat(){
  var favEntries;
  for(var i = 0; i<categories.length; i++)
  {

    {
      favCategories.push
    }
  }
}
