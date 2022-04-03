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

function generatePassword() {

  userPassword = ""

//add all possible characters

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()_+~-="
  var passwordCharacters = "";
  
//add window prompts
 
  var lowerConfirm = confirm("Add Uppercase Letters?")
  if (lowerConfirm) {
    passwordCharacters += lowerCase
  } else {
    passwordCharacters = passwordCharacters
  }

  var upperConfirm = confirm("Add Lowercase letters?")
  if (upperConfirm) {
    passwordCharacters += upperCase
  } else {
    passwordCharacters = passwordCharacters
  } 

  var numberConfirm = confirm("Add numbers?")
  if (numberConfirm) {
    passwordCharacters += numbers
  } else {
    passwordCharacters = passwordCharacters
  }

  var symbols = confirm("Add symbols?")
  if (specialConfirm) {
    passwordCharacters += symbols
  } else {
    passwordCharacters = passwordCharacters
  }

//prompt password length

  if (passwordCharacters.length > 1) {
    var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters long")
      return "Invalid criteria, generate again"
    } else if (passwordLength > 128){
      alert("Password cannot exceed 128 characters")
      return "Error, please try again!"
    } else {
        for (i = 0; i < passwordLength; i++) {
          userPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
        }
        return userPassword
    }
//add a catch to make sure user has selected at least one option

  } else {
    alert("You must include at least one type of character");
    return "Error, please try again!";
  }
}




