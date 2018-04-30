

function hashPasswordForLocal(password)
{
  var hashWordArray = CryptoJS.SHA512(password);
  return hashWordArray.toString(CryptoJS.enc.Base64);
}

function hashPasswordForSignin(password)
{
  var hashWordArray = CryptoJS.SHA256(password);
  return hashWordArray.toString(CryptoJS.enc.Base64);
}

function decryptValue(str, password)
{
  return CryptoJS.AES.decrypt(str,password).toString(CryptoJS.enc.Utf8);
}

function encryptValue(str, password)
{
  return CryptoJS.AES.encrypt(str, password).toString();
}
