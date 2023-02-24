// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var uppercase = confirm ("Use uppercase characters?");
  var lowercase = confirm ("Use lowercase characters?");
  var length = prompt ("Number of characters in the password");
  var numeric = confirm ("Use number characters?");
  var specialCharacters = confirm ("Use special characters?");
  if (uppercase === false && lowercase === false && numeric === false && specialCharacters === false){
    alert ("You must select one")
    return
  }
  
var upperChar = "ABC";
var lowerChar = "abc";
var numberChar = "123";
var specialChar = "%$#@";
var characters = "";
if (uppercase === true) {
  characters = characters + upperChar;
};
if (lowercase === true) {
  characters = characters + lowerChar;
};

if (numeric === true) {
  characters = characters + numberChar;
};

if (specialCharacters === true) {
  characters = characters + specialChar;
};

var password = ""
for (var i=0; i < length; i++) {
  var randomNum = Math.floor(Math.random() *characters.length) 
  var randomChar = characters [randomNum] 
  password = password + randomChar
}

return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
