// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  create password

function createPassword() {

  userPassword = ""

//add all possible characters

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  var passwordCharacters = "";
  
 
  var lowerConfirm = confirm("Include lowercase letters?")
  if (lowerConfirm) {
    passwordCharacters += lowerCase
  } else {
    passwordCharacters = passwordCharacters
  }

  var upperConfirm = confirm("Include uppercase letters?")
  if (upperConfirm) {
    passwordCharacters += upperCase
  } else {
    passwordCharacters = passwordCharacters
  } 

  var numberConfirm = confirm("Include numeric characters?")
  if (numberConfirm) {
    passwordCharacters += numbers
  } else {
    passwordCharacters = passwordCharacters
  }

  var symbols = confirm("Include special characters?")
  if (specialConfirm) {
    passwordCharacters += symbols
  } else {
    passwordCharacters = passwordCharacters
  }


}

var confirmUpperChar = confirm("Add Uppercase Letters?")
    if (confirmUpperChar == true) {
        selectedTypes = selectedTypes.concat(uppercase);
        else
    }

  passwordText.value = password;

}
