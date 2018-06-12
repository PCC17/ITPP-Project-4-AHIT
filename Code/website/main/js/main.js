var categories = [];
var entries = [];
var searching = false;
var searchchanging = false;
var entryNames = [];
var list = document.getElementById('sortable');
var currentcatname = "";
var entryObject = [];

$(document).ready(function () {
    checkToken();
    getCategories();
    getEntries();
    $("#entryModal").on("shown.bs.modal", function () {
      var bodyel = document.body;
      bodyel.className = "modal-open";
      console.log(bodyel);
    });

    document.getElementById("favorites").click();

    $.get(url+"/user?token="+getCookie("token"), function(data){
user = JSON.parse(data);
document.getElementById("helloUser").innerHTML += user.firstname;
});
});

function getCategories()
{
  /*
  console.log("getcategoires");
$.get(url+"/categories?token="+getCookie("token"), function(data){
categories = Object.keys(JSON.parse(data)).map(function (key) { return JSON.parse(data)[key];});
console.log(categories);
for(var i = 0; i < categories.length; i++)
{
  for(var j = 0; j < categories[i].passEntry.length; j++)
  {
    categories[i].passEntry[j].password = decryptValue(categories[i].passEntry[j].password, getCookie("password_local"));
  }
}
domCategories();
domEntries();
});
*/
jQuery.ajax({
        url: url+"/categories?token="+getCookie("token"),
        success: function (data) {
          categories = Object.keys(JSON.parse(data)).map(function (key) { return JSON.parse(data)[key];});
          console.log(categories);
          for(var i = 0; i < categories.length; i++)
          {
            for(var j = 0; j < categories[i].passEntry.length; j++)
            {
              categories[i].passEntry[j].password = decryptValue(categories[i].passEntry[j].password, getCookie("password_local"));
            }
          }
          domCategories();
          domEntries();
        },
        async: false
    });
}

function getEntries() {
  /*console.log("getEntries");
for(var i = 0; i < categories.length; i++)
{
  var _catname = categories[i].name;
  $.get(url+_catname+"/entries?token="+getCookie("token"), function(data) {
    console.log(data)
  });
}*/
//domEntries();
//checkfavEntries();
}

function checkfavEntries() {
    var favEntries = [];
}

function domCategories(){
  categories.reverse();
    var t = document.getElementById("sortable");
    //var sidebardiv = document.createElement("div");
    //sortable.appendChild(sidebardiv);
    t.innerHTML="";
    console.log(JSON.stringify(categories[0]));
    for(var i = 0; i < categories.length; i++)
    {

        var catname = document.createElement('li');
        catname.className = 'nav-item navy my-nav-left';
        var sidebar = document.getElementById("sidebar");
        //if(categories[i].name != "Favorites"){
          list.appendChild(catname);
        //}
        //else{
        //  catname.setAttribute("id", "favoriteCatElement");
        //  list.appendChild(catname);
        //}
        var catnameChild = document.createElement('a');
        catnameChild.className = 'nav-link';
        catnameChild.setAttribute("data-toggle", "pill");
        catnameChild.setAttribute("role", "tab");

        catnameChild.setAttribute("onclick","checkMobile();");
        catnameChild.href = "#" + "a"+categories[i]._id;

        catnameChild.innerHTML = categories[i].name;
        catname.appendChild(catnameChild);
        if(categories[i].name != "Favorites"){
		catnameChild.setAttribute("id", "b"+categories[i]._id);
        var delicon = document.createElement('i');
        delicon.setAttribute("data-toggle", "modal");
        delicon.setAttribute("href", "#deleteCategoryModal");
        delicon.setAttribute("onclick", "checkDeleteCategory('"+categories[i].name+"');")
        delicon.className = 'fa fa-trash icon-sidebar';
        catnameChild.appendChild(delicon);

        var editicon = document.createElement('i');
        editicon.setAttribute("data-toggle", "modal");
        editicon.setAttribute("href", "#categoryModal");
        editicon.setAttribute("onclick", "checkEditCategory('"+categories[i].name+"');");
        editicon.className = 'fa fa-edit icon-sidebar';
        catnameChild.appendChild(editicon);
        }
        else{
		catnameChild.setAttribute("id", "favorites");
          var favicon = document.createElement('i');
          favicon.className = 'fa fa-star icon-sidebar';
          catnameChild.appendChild(favicon);
        }
    }
}

function domEntries() {
  console.log("domEntries");
  var t = document.getElementById("content");
  t.innerHTML = "";
  var tabcontent = document.createElement('div');
  tabcontent.className = 'tab-content';
  tabcontent.innerHTML = "";
  tabcontent.id = "tab-content";
  t.appendChild(tabcontent);
  console.log("1");
  for (var j = 0; j < categories.length; j++) {
    console.log("2");
    var tabpane = document.createElement('div');
    tabpane.className = 'tab-pane fade';
    tabpane.id ="a"+categories[j]._id;
    tabcontent.appendChild(tabpane);

    var entries = categories[j].passEntry;
    for(var i = 0; i < entries.length; i++)
    {
      console.log("3");
        var entry = document.createElement('article');
        entry.className = 'entry';
        var card = document.createElement('div');
        card.className = 'card mycard';
        entry.appendChild(card);
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = entries[i].name;
        if(categories[j].name != "Favorites"){
        var cardentrydel = document.createElement('i');
        cardentrydel.className = 'fa fa-trash entry-icon';
        cardentrydel.setAttribute("href", "#deleteEntryModal");
        cardentrydel.setAttribute("data-toggle", "modal");
        cardentrydel.setAttribute("onclick", "checkDeleteEntry('"+entries[i].name+"', '"+categories[j].name+"');")
        cardheader.appendChild(cardentrydel);
        var cardentryedit = document.createElement('i');
        cardentryedit.className = 'fa fa-edit entry-icon';
        cardentryedit.setAttribute("href", "#entryModal");
        cardentryedit.setAttribute("data-toggle", "modal");
        cardentryedit.setAttribute("onclick", "checkEditEntry('"+JSON.stringify(entries[i])+"', '"+JSON.stringify(categories[j])+"');");
        cardheader.appendChild(cardentryedit);
      }
        card.appendChild(cardheader);
        var cardbody = document.createElement('ul');
        cardbody.className = 'list-group list-group-flush';
        card.appendChild(cardbody);

        var cardentryurl = document.createElement('li');
        cardentryurl.className = 'list-group-item';
        cardentryurl.innerHTML = "<b>URL:</b><br>";
        var cardentrya = document.createElement('a');
        cardentrya.href = checkLink(entries[i].link);
        cardentrya.innerHTML = checkLink(entries[i].link);
        cardentryurl.appendChild(cardentrya);
        cardbody.appendChild(cardentryurl);

        var cardentryuser = document.createElement('li');
        cardentryuser.className = 'list-group-item';
        if(categories[j].name != "Favorites"){
        cardentryuser.innerHTML = "<b>Username:</b><br><x id=\"cardEntryUser"+entries[i]._id+"\">" + entries[i].username;
      }
      else{
        cardentryuser.innerHTML = "<b>Username:</b><br><x id=\"cardFavEntryUser"+entries[i]._id+"\">" + entries[i].username;
      }
        var cardentryusercopy = document.createElement('i');
        cardentryusercopy.className = 'fa fa-copy entry-icon';
        if(categories[j].name != "Favorites"){
        cardentryusercopy.setAttribute("onclick", "copyEntryUsername(cardEntryUser"+entries[i]._id+");");
      }
      else{
        cardentryusercopy.setAttribute("onclick", "copyEntryUsername(cardFavEntryUser"+entries[i]._id+");");
      }
        cardentryuser.appendChild(cardentryusercopy);
        cardbody.appendChild(cardentryuser);

        var cardentrypw = document.createElement('li');
        cardentrypw.className = 'list-group-item';
        if(categories[j].name != "Favorites"){
        cardentrypw.innerHTML = "<b>Password:</b><br><x id=\"cardEntryPassword"+entries[i]._id+"\">" + entries[i].password;
      }
      else{
        cardentrypw.innerHTML = "<b>Password:</b><br><x id=\"cardFavEntryPassword"+entries[i]._id+"\">" + entries[i].password;
      }
        var cardentrypwcopy = document.createElement('i');
        cardentrypwcopy.className = 'fa fa-copy entry-icon';
        if(categories[j].name != "Favorites"){
        cardentrypwcopy.setAttribute("onclick", "copyEntryPassword(cardEntryPassword"+entries[i]._id+");");
      }
      else{
        cardentrypwcopy.setAttribute("onclick", "copyEntryPassword(cardFavEntryPassword"+entries[i]._id+");");
      }
        cardentrypw.appendChild(cardentrypwcopy);
        cardbody.appendChild(cardentrypw);

        var cardentrynotes = document.createElement('li');
        cardentrynotes.className = 'list-group-item';
        cardentrynotes.innerHTML = "<b>Notes:</b><br>" + entries[i].notes;
        cardbody.appendChild(cardentrynotes);

        var content = document.getElementById('content');
        tabpane.appendChild(entry);
      }
    }

    console.log("finish");
}

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

function getCategoryId(name)
{
	for(var i = 0; i< categories.length; i++)
	{
		if(categories[i].name == name)
			return categories[i]._id;
	}
}

function addEntry(category, name, link, username, password, notes, isFavourite, cfKey, cfValue) {

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
async : false,
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
    async:false,
    success: function(data)
    {
        console.log(data);

        getCategories();
        getEntries();
		console.log(getCategoryId(category))
        console.log("select");
        document.getElementById("b"+getCategoryId(category)).click();
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
console.log(name + "       " + newname);
$.ajax({

    dataType: 'json',
    type: 'PUT',
    url: url +'/category?token='+getCookie("token"),
    data: {'name': _name, 'newname': _newName},
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

function getCategoryOptions() {
  console.log("getCategoryOptions");
  var select = document.getElementById("inputSelect");
  select.innerHTML="";
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = categories[i].name;
    if(categories[i].name != "Favorites")
    {
      select.appendChild(option);
    }
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

function checkEditCategory(catname)
{

  var aeCat = document.getElementById("AddEditCat");
  var catField = document.getElementById("categoryName");
  var submitBtn = document.getElementById("submitAddEditCategoryBtn");
    aeCat.innerHTML = "Edit";
    catField.setAttribute("value", catname);
    submitBtn.setAttribute("onclick", "updateCategoryName('"+catname+"', document.getElementById('categoryName').value)");
}

function checkAddCategory() {
  var aeCat = document.getElementById("AddEditCat");
  var submitBtn = document.getElementById("submitAddEditCategoryBtn");
  aeCat.innerHTML = "Add";
  submitBtn.setAttribute("onclick", "addCategory(document.getElementById('categoryName').value)");
}

function checkEditEntry(entrystr, catstr)
{
  var entry = JSON.parse(entrystr);
  var category = JSON.parse(catstr);
  console.log(entry);
  var aeEntry = document.getElementById("AddEditEntry");
  var submitBtn = document.getElementById("submitAddEditEntryBtn");
    aeEntry.innerHTML = "Edit";
    getCategoryOptions();
    var catSelect = document.getElementById("inputSelect");
    //var option = document.createElement('option');
    //option.innerHTML = category.name;
    catSelect.value = category.name;
    var entryName = document.getElementById("inputEntryName");
    entryName.value=entry.name;
    var entryURL = document.getElementById("inputURL");
    entryURL.setAttribute("value", entry.link);
    var entryUsername = document.getElementById("inputUsername");
    entryUsername.setAttribute("value", entry.username);
    var entryPassword = document.getElementById("inputPassword");
    entryPassword.setAttribute("value", entry.password);
    var entryNotes = document.getElementById("textNotes");
    entryNotes.setAttribute("value", entry.notes);
    var entryFavourite = document.getElementById("checkIsFavourite");
    console.log(entry);
    entryFavourite.checked = entry.isfavourite;
    submitBtn.setAttribute("onclick", "checkUpdateEntry('"+category.name+"', '"+entry.name+"');");
}

function checkUpdateEntry(oldcat, oldname) {
  updateEntry(oldcat, oldname,
  document.getElementById("inputSelect").value,
  document.getElementById("inputEntryName").value,
  document.getElementById("inputURL").value,
  document.getElementById("inputUsername").value,
  document.getElementById("inputPassword").value,
  document.getElementById("textNotes").value,
  document.getElementById("checkIsFavourite").value);
}

function updateEntry(oldcat, oldname, newcat, newname, link, username, password, notes, isFavourite) {
  console.log("update");
  console.log(newname);
  deleteEntry(oldcat, oldname);
  addEntry(newcat, newname, link, username, password, notes, isFavourite);
  //getEntries();
  //domEntries();
}

function checkAddEntry() {

  var catSelect = document.getElementById("inputSelect");
  getCategoryOptions();
  var aeEntry = document.getElementById("AddEditEntry");
  var submitBtn = document.getElementById("submitAddEditEntryBtn");
  aeEntry.innerHTML = "Add";
  submitBtn.setAttribute("onclick", "addEntry(document.getElementById('inputSelect').value, document.getElementById('inputEntryName').value, document.getElementById('inputURL').value, document.getElementById('inputUsername').value, document.getElementById('inputPassword').value, document.getElementById('textNotes').value, document.getElementById('checkIsFavourite').checked)");
  var modal = document.getElementById("entryModal").children;

  var catSelect = document.getElementById("inputSelect");
  catSelect.value = " ";
  var entryName = document.getElementById("inputEntryName");
  entryName.value="";
  var entryURL = document.getElementById("inputURL");
  entryURL.value= "";
  var entryUsername = document.getElementById("inputUsername");
  entryUsername.value = "";
  var entryPassword = document.getElementById("inputPassword");
  entryPassword.value = "";
  var entryNotes = document.getElementById("textNotes");
  entryNotes.value = "";
  var entryFavourite = document.getElementById("checkIsFavourite");
}

function copyEntryUsername(id) {
  console.log(id);
  var copytext = selectText(id);
  document.execCommand("copy");
}

function copyEntryPassword(id) {
  console.log(id);
  var copytext = selectText(id);
  document.execCommand("copy");
}

function checkDeleteCategory(name) {
    console.log("check");
  var catdelbtn = document.getElementById("deleteBtnCategoryModal");
  catdelbtn.setAttribute("onclick", "deleteCategory('"+name+"');");
}

function deleteCategory(name) {
  $.ajax({

      dataType: 'json',
      type: 'DELETE',
      url: url+ '/category?token='+getCookie("token"),
      data: {'name': name},
      success: function(data)
      {
        getCategories();
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

function checkDeleteEntry(entry, category) {
  console.log("check");
  var entrydelbtn = document.getElementById("deleteBtnEntryModal");
  console.log(category);
  console.log(entry);
  entrydelbtn.setAttribute("onclick", "deleteEntry('"+category+"', '"+entry+"');");
}

function deleteEntry(category, entryname) {
  $.ajax({
async : false,
      dataType: 'json',
      type: 'DELETE',
      url: url+ '/' + category + '/entry?token='+getCookie("token"),
      data: {'name': entryname},
      success: function(data)
      {
        getCategories();
        getEntries();
        console.log("select");
		console.log(category);
        document.getElementById("b"+getCategoryId(category)).click();
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


function selectText(element) {
  console.log(element);
  var doc = document;
  var text = doc.getElementById(element.id);
  var range, selection;

  if(doc.body.createTextRange){
   range = document.body.createTextRange();
   range.moveToElementText(text);
   range.select();
  }
  else if(window.getSelection){
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }

return range;
}

function searchChanged() {

  var tabpane = document.getElementById("search");
  tabpane.innerHTML = "";
  var searchedEntries = [];
  var searchedEntriesName = [];
  if(searching == true)
  {
    var input = document.getElementById("searchBar").value;

    if(input.length == 0)
    {
      tabpane.innerHTML = "";
    }
    else
    {
    for(var i = 0; i < entryNames.length; i++)
    {
      if (entryNames[i].includes(input))
      {
        searchedEntriesName.push(entryNames[i]);
      }
    }

    for(var j = 0; j < categories.length; j++)
    {

      if(categories[j].name != "Favorites")
      {
      var entries = categories[j].passEntry;

      for(var k = 0; k< entries.length; k++)
      {
        for (var i = 0; i < searchedEntriesName.length; i++) {
          if(entries[k].name == searchedEntriesName[i])
          {
            if(!searchedEntries.includes(entries[k]))
            {
              searchedEntries.push(entries[k]);
            }

          }
        }

      }
    }
  }
}

  }
  for (var i = 0; i < searchedEntries.length; i++) {
    var entry = document.createElement('article');
    entry.className = 'entry';
    var card = document.createElement('div');
    card.className = 'card mycard';
    entry.appendChild(card);
    var cardheader = document.createElement('div');
    cardheader.className = 'card-header';
    cardheader.innerHTML = searchedEntries[i].name;
    var cardentrydel = document.createElement('i');
    cardentrydel.className = 'entry-icon';
    cardentrydel.setAttribute("href", "#deleteEntryModal");
    cardentrydel.setAttribute("data-toggle", "modal");
    cardentrydel.setAttribute("onclick", "checkDeleteEntry('"+searchedEntries[i].name+"', search);")
    cardheader.appendChild(cardentrydel);
    var cardentryedit = document.createElement('i');
    cardentryedit.className = 'entry-icon';
    cardentryedit.setAttribute("href", "#entryModal");
    cardentryedit.setAttribute("data-toggle", "modal");
    cardentryedit.setAttribute("onclick", "checkEditEntry('"+JSON.stringify(searchedEntries[i])+"', '"+JSON.stringify("searchCat")+"');");
    cardheader.appendChild(cardentryedit);
    card.appendChild(cardheader);
    var cardbody = document.createElement('ul');
    cardbody.className = 'list-group list-group-flush';
    card.appendChild(cardbody);

    var cardentryurl = document.createElement('li');
    cardentryurl.className = 'list-group-item';
    cardentryurl.innerHTML = "<b>URL:</b><br>";
    var cardentrya = document.createElement('a');
    cardentrya.href = searchedEntries[i].link;
    cardentrya.innerHTML = searchedEntries[i].link;
    cardentryurl.appendChild(cardentrya);
    cardbody.appendChild(cardentryurl);

    var cardentryuser = document.createElement('li');
    cardentryuser.className = 'list-group-item';
    cardentryuser.innerHTML = "<b>Username:</b><br><x id=\"cardSearchEntryUser"+searchedEntries[i]._id+"\">"+searchedEntries[i].name;
    var cardentryusercopy = document.createElement('i');
    cardentryusercopy.className = 'fa fa-copy entry-icon';
    cardentryusercopy.setAttribute("onclick", "copyEntryUsername(cardSearchEntryUser"+searchedEntries[i]._id+");");
    cardentryuser.appendChild(cardentryusercopy);
    cardbody.appendChild(cardentryuser);

    var cardentrypw = document.createElement('li');
    cardentrypw.className = 'list-group-item';
    cardentrypw.innerHTML = "<b>Password:</b><br><x id=\"cardSearchEntryPassword"+ searchedEntries[i]._id+"\">"+searchedEntries[i].password ;
    var cardentrypwcopy = document.createElement('i');
    cardentrypwcopy.className = 'fa fa-copy entry-icon';
    cardentrypwcopy.setAttribute("onclick", "copyEntryPassword(cardSearchEntryPassword"+searchedEntries[i]._id+");")
    cardentrypw.appendChild(cardentrypwcopy);
    cardbody.appendChild(cardentrypw);

    var cardentrynotes = document.createElement('li');
    cardentrynotes.className = 'list-group-item';
    cardentrynotes.innerHTML = "<b>Notes:</b><br>" + searchedEntries[i].notes;
    cardbody.appendChild(cardentrynotes);

    var content = document.getElementById('content');
    tabpane.appendChild(entry);
  }

     document.getElementById("searchLink").click();

}
function getEntryNames() {
    entryNames = [];
    for(var i = 0; i < categories.length; i++)
    {
        if(categories[i].name!="Favorites")
        {
        var entries = categories[i].passEntry;
        for(var j = 0; j< entries.length; j++)
        {
          entryNames.push(entries[j].name);
        }
      }
    }
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
      catnameChild.innerHTML = "Search";
      catnameChild.id = "searchLink";
      catname.appendChild(catnameChild);

      var editicon = document.createElement('i');
      editicon.setAttribute("data-toggle", "modal");
      editicon.setAttribute("href", "#categoryModal");
      editicon.setAttribute("onclick", "checkAddEdit(0);")
      editicon.className = 'icon-sidebar';
      //editicon.href = "#categoryModal";
      catnameChild.appendChild(editicon);

      var tabcontent = document.getElementById("tab-content");

      var tabpane = document.createElement('div');
      tabpane.className = 'tab-pane fade';
      tabpane.id = "search";
      tabcontent.appendChild(tabpane);

    }
      var x = document.getElementById("searchBar");
      searchInput = x.innerHTML;

}

function searchIconchange(){
  searchchanging = true;
  var y = document.getElementById("searchicon");

  if(y.className == "searchicon fa fa-times fa-2x nav-icon" && searchchanging == true)
  {
    y.className = "searchicon fa fa-search fa-2x nav-icon";
    searchchanging = false;
  }
  if(y.className =="searchicon fa fa-search fa-2x nav-icon" && searchchanging == true)
  {

    y.className = "searchicon fa fa-times fa-2x nav-icon";
    searchchanging = false;
    searchStart();
    var link = document.getElementById("searchLink");
    link.setActive;
  }
}


//password
var stringCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringNumbers = "1234567890";
var stringSpecialCharacters = "!§$%@€,;.:--_~*+<>|`´`&/()=?²³{[}\\]}";
function generatePassword(characters, numbers, specialCharacters, length)
{
  var string = "";
  if(!(characters || numbers || specialCharacters))
    characters = true;

    if(characters)
      string += stringCharacters;
    if(numbers)
      string += stringNumbers;
    if(specialCharacters)
      string += stringSpecialCharacters;
    var pwd= generateSequence(string,length);
    var inputPassword = document.getElementById("inputPassword");
    inputPassword.value = "";
    inputPassword.value = pwd;
}

function generateSequence(characters, length)
{
  var charArray = characters.split('');
  var res = "";
  for(var i = 0; i < length; i++)
  {
    res += characters[Math.floor((Math.random() * charArray.length))];
  }
  //nur zum testen gleich hier der aufruf ob passwort sicher ist, sonst einfach by change oder dergleichen aufrufen
  checkPassword(res);
  //
  return res;
}

function checkPassword() {
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

  var inputPassword = document.getElementById("inputPassword");

  if (strongRegex.test(inputPassword.value) ||  inputPassword.value.length > 20 ){
    inputPassword.setAttribute("Style","Color: green;");
  }
  else if (mediumRegex.test(inputPassword.value) && inputPassword.value.length > 10) {
      inputPassword.setAttribute("Style","Color: orange;");
  }
  else {
    inputPassword.setAttribute("Style","Color: red;");
  }
}


function checkLink(link)
{
  if(!link.includes("https://") && !link.includes("http://"))
  {
    return "http://"+link;
  }
  else
    return link;


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
