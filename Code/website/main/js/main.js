var categories = [];
var entries = [];
var searching = false;
var searchchanging = false;
var entryNames = [];
var list = document.getElementById('sortable');

function getCategories()
{
$.get(url+"/categories?token="+getCookie("token"), function(data){
console.log(data);
categories = Object.keys(JSON.parse(data)).map(function (key) { return JSON.parse(data)[key];});
for(var i = 0; i < categories.length; i++)
{
  for(var j = 0; j < categories[i].passEntry.length; j++)
  {
    categories[i].passEntry[j].password = decryptValue(categories[i].passEntry[j].password, getCookie("password_local"));
  }
}
var categoriesArrey = Object.keys(categories).map(function (key) { return categories[key]; });
var test3 = Object.entries(JSON.parse(data));
console.log(test3);
console.log(categories);

domCategories();
getEntries();
});
}

$(document).ready(function () {
    checkToken();
    getCategories();
});

function addCategory(name){
  var order = categories.length + 1;
  $.ajax({
      dataType: 'json',
      type: 'POST',
      url: url+"/category?token="+getCookie("token"),
      data: {"name": name,
              "order": order},
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

  })
}

function addCatgoryWithEntry(name,order,peName,peOrder,peLink, peImage, peUsername, pePassword, peNotes, cfKey, cfValue, peIsFavourite){

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

$.post(url+"/category?token="+getCookie("token"), {"name": "ASDF","order": 0,"passEntry": [{"name": "google","order": 0,"link": "apple.com","image": "bilduno","username": "hans","password":"hans2","notes": "herbert","customFields": [{"key": "1","value": "dflklg"}],"isfavourite": "false"}]})

}

function domCategories(){
    var t = document.getElementById("sortable");
    t.innerHTML="";
    for(var i = 0; i < categories.length; i++)
    {
        var catname = document.createElement('li');
        catname.className = 'nav-item navy my-nav-left';
        list.appendChild(catname);
        var catnameChild = document.createElement('a');
        catnameChild.className = 'nav-link';
        catnameChild.setAttribute("data-toggle", "pill");
        catnameChild.setAttribute("role", "tab");
        catnameChild.href = "#" + categories[i].name;
        catnameChild.innerHTML = categories[i].name;
        catname.appendChild(catnameChild);

        var editicon = document.createElement('i');
        editicon.setAttribute("data-toggle", "modal");
        editicon.setAttribute("href", "#categoryModal");
        editicon.setAttribute("onclick", "checkAddEdit(0);");
        editicon.className = 'fa fa-edit icon-sidebar';
        //editicon.href = "#categoryModal";
        catnameChild.appendChild(editicon);
    }
}

function domEntries() {
  var t = document.getElementById("content")
  var tabcontent = document.createElement('div');
  tabcontent.className = 'tab-content';
  tabcontent.innerHTML = "";
  tabcontent.id = "tab-content";
  t.appendChild(tabcontent);
  for (var j = 0; j < categories.length; j++) {
    var tabpane = document.createElement('div');
    tabpane.className = 'tab-pane fade';
    tabpane.id = categories[j].name;
    tabcontent.appendChild(tabpane);

    var entries = categories[j].passEntry;
    for(var i = 0; i < entries.length; i++)
    {
      console.log(entries[i]);
        var entry = document.createElement('article');
        entry.className = 'entry';
        var card = document.createElement('div');
        card.className = 'card mycard';
        entry.appendChild(card);
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = entries[i].name;
        card.appendChild(cardheader);
        var cardbody = document.createElement('ul');
        cardbody.className = 'list-group list-group-flush';
        card.appendChild(cardbody);

        var cardentryurl = document.createElement('li');
        cardentryurl.className = 'list-group-item';
        cardentryurl.innerHTML = "<b>URL:</b><br>";
        var cardentrya = document.createElement('a');
        cardentrya.href = entries[i].link;
        cardentrya.innerHTML = entries[i].link;
        cardentryurl.appendChild(cardentrya);
        cardbody.appendChild(cardentryurl);

        var cardentryuser = document.createElement('li');
        cardentryuser.className = 'list-group-item';
        cardentryuser.innerHTML = "<b>Username:</b><br>" + entries[i].username;
        var cardentryusercopy = document.createElement('i');
        cardentryusercopy.className = 'fa fa-copy';
        cardentryusercopy.setAttribute("onclick", "copyEntryUsername();")
        cardentryuser.appendChild(cardentryusercopy);
        cardbody.appendChild(cardentryuser);

        var cardentrypw = document.createElement('li');
        cardentrypw.className = 'list-group-item';
        cardentrypw.innerHTML = "<b>Password:</b><br>" + entries[i].password;
        cardbody.appendChild(cardentrypw);

        var cardentrynotes = document.createElement('li');
        cardentrynotes.className = 'list-group-item';
        cardentrynotes.innerHTML = "<b>Notes:</b><br>" + entries[i].notes;
        cardbody.appendChild(cardentrynotes);

        var content = document.getElementById('content');
        tabpane.appendChild(entry);
      }
    }
}

function checkfavEntries() {
    var favEntries = [];
}

function getEntries() {
for(var i = 0; i < categories.length; i++)
{
  var _catname = categories[i].name;
  $.get(url+_catname+"/entries?token="+getCookie("token"), function(data) {
    console.log(data)
  });
}
domEntries();
checkfavEntries();
}

function addEntry(category, name, link, username, password, notes, isFavourite, cfKey, cfValue) {
//addEntry("546", "entriy12", 1, "www.ahdjd,com", "coolesImage", "UserNamen", "SicheresPassword", "notizen", "Liste", "InhaltderListe", "true");

var _category = category;
var _peName = name;
var _peOrder = entries.length + 1;
var _peLink = link;
var _peImage = null;
var _peUsername = username;
var _pePassword = encryptValue(password, getCookie("password_local"));
var _peNotes = notes;
var _cfKey = cfKey;
var _cfValue= cfValue;
var _peIsFavourite = isFavourite;
$.ajax({

    dataType: 'json',
    type: 'POST',
    url: url+"/"+_category+"/entry?token="+getCookie("token"),
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
    url: url+ '/category?token='+getCookie("token"),
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
    url: url +'/category?token='+getCookie("token"),
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
    url: url +'/category?token='+getCookie("token"),
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

function getCategoryOptions() {
  var select = document.getElementById("inputSelect");
  select.innerHTML="";
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = categories[i].name;
    select.appendChild(option);
  }
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

function checkAddEdit(numb)
{
  console.log("rwar");
  var aeEntry = document.getElementById("AddEditEntry");
  var aeCat = document.getElementById("AddEditCat");
  if(numb == 0)
    {aeEntry.innerHTML = "Edit";
    aeCat.innerHTML = "Edit";
  console.log("2");}
  if(numb == 1)
    {aeEntry.innerHTML = "Add";
    aeCat.innerHTML = "Add";
  console.log("rwar");}
}

function copyEntryUsername() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("Copy");
}

function copyEntryPassword() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("Copy");
}

function searchChanged() {

  if(searching == true)
  {
    var input = document.getElementById("searchBar").value;

    console.log(input.split(''));

    for(var i = 0; i < entries.length; i++)
    {
      console.log(entries[i]);
    }

    if(input.length == 1)
    {
      for(var i = 0; i < entryNames.length; i++)
      {
        if(entryNames[i].includes(input))
        console.log("nur ein char in input");
      }
    }
    for(var i = 0; i < entryNames.length; i++)
    {
      if (entryNames[i].includes(input))
      {
        console.log(entryNames[i]);
      }
    }

  }
}
function getEntryNames() {

    for(var i = 0; i < categories.length; i++)
    {
      var entries = categories[i].passEntry;

      for(var j = 0; i< entries.length; i++)
      {
      entryNames.push(entries[i].name);
      }

    }
    console.log(entryNames);


}

function searchStart() {

  getEntryNames();

  if(searching == false)
  {
    searching = true;
      var catname = document.createElement('li');
      catname.className = 'nav-item navy my-nav-left';
      catname.id = "searchedCat";
      list.appendChild(catname);
      var catnameChild = document.createElement('a');
      catnameChild.className = 'nav-link';
      catnameChild.setAttribute("data-toggle", "pill");
      catnameChild.setAttribute("role", "tab");
      catnameChild.href = "#" + "search";
      catnameChild.innerHTML = "search";
      catname.appendChild(catnameChild);

      var editicon = document.createElement('i');
      editicon.setAttribute("data-toggle", "modal");
      editicon.setAttribute("href", "#categoryModal");
      editicon.setAttribute("onclick", "checkAddEdit(0);")
      editicon.className = 'fa fa-edit icon-sidebar';
      //editicon.href = "#categoryModal";
      catnameChild.appendChild(editicon);

      var tabcontent = document.getElementById("tab-content");

/*
      var tabpane = document.createElement('div');
      tabpane.className = 'tab-pane fade';
      tabpane.id = categories[j].name;
      tabcontent.appendChild(tabpane);
*/

/*
var entry = document.createElement('article');
entry.className = 'entry';
var card = document.createElement('div');
card.className = 'card mycard';
entry.appendChild(card);
var cardheader = document.createElement('div');
cardheader.className = 'card-header';
cardheader.innerHTML = entries[i].name;
card.appendChild(cardheader);
var cardbody = document.createElement('ul');
cardbody.className = 'list-group list-group-flush';
card.appendChild(cardbody);

var cardentryurl = document.createElement('li');
cardentryurl.className = 'list-group-item';
cardentryurl.innerHTML = "<b>URL:</b><br>";
var cardentrya = document.createElement('a');
cardentrya.href = entries[i].link;
cardentrya.innerHTML = entries[i].link;
cardentryurl.appendChild(cardentrya);
cardbody.appendChild(cardentryurl);

var cardentryuser = document.createElement('li');
cardentryuser.className = 'list-group-item';
cardentryuser.innerHTML = "<b>Username:</b><br>" + entries[i].username;
var cardentryusercopy = document.createElement('i');
cardentryusercopy.className = 'fa fa-copy';
cardentryusercopy.setAttribute("onclick", "copyEntryUsername();")
cardentryuser.appendChild(cardentryusercopy);
cardbody.appendChild(cardentryuser);

var cardentrypw = document.createElement('li');
cardentrypw.className = 'list-group-item';
cardentrypw.innerHTML = "<b>Password:</b><br>" + entries[i].password;
cardbody.appendChild(cardentrypw);

var cardentrynotes = document.createElement('li');
cardentrynotes.className = 'list-group-item';
cardentrynotes.innerHTML = "<b>Notes:</b><br>" + entries[i].notes;
cardbody.appendChild(cardentrynotes);

var content = document.getElementById('content');
tabpane.appendChild(entry);
*/


    }
      var x = document.getElementById("searchBar");
      searchInput = x.innerHTML;

}

function searchIconchange(){
  searchchanging = true;
  var y = document.getElementById("searchicon");

  if(y.className == "searchicon fa fa-times fa-2x nav-icon" && searchchanging == true)
  {
    console.log("adw");
    y.className = "searchicon fa fa-search fa-2x nav-icon";
    var x = document.getElementById("searchedCat");
    list.removeChild(x);
    searchchanging = false;
  }
  if(y.className =="searchicon fa fa-search fa-2x nav-icon" && searchchanging == true)
  {
    console.log(2);
    y.className = "searchicon fa fa-times fa-2x nav-icon";
    searchchanging = false;
  }
}
