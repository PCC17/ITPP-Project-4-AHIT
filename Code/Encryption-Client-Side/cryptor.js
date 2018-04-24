

function hashPasswordForLocal(password)
{

}

function hashPasswordForSignin(password)
{

}
/*
function encryptValues(data, password)
{
  var encrypted = CryptoJS.AES.encrypt(data, password);
  document.write(encrypted);
}*/

function encryptValues(str, password)
{
  var  obj = JSON.parse(str);

  encryptValuesRecursive(obj, password);
  var a = JSON.stringify(obj);
  document.write(a);
  for (var k in obj)
  {
    document.write(k + ": " + obj[k]);
  }
}

function encryptValuesRecursive(obj, password)
{
  for (var k in obj)
  {
    if (typeof obj[k] == "object" && obj[k] !== null)
      eachRecursive(obj[k]);
    else
    {
      obj[k] = CryptoJS.AES.encrypt(obj[k], password);
    }
  }
}
