// Assignment code here

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numb = '0123456789';
var symbol = '!#$%&*+/:;<=>?@^';
var passwordLength = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  propmts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var propmts = function () {
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt('How long do you want the password (please enter 8-128)');
    passwordLength = parseInt(passwordLength);
  }
  var includeUpper = window.confirm('Do you want to include upper case letters in the password? (Confirm for yes, cancel for no)');
  var includeLower = window.confirm('Do you want to include lower case letters in the password? (Confirm for yes, cancel for no)');
  var includeNumbers = window.confirm('Do you want to include numbers in the password? (Confirm for yes, cancel for no)');
  var includeSymbols = window.confirm('Do you wnat to include symbols in the password? (Confirm for yes, cancel for no)');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
