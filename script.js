// Assignment code here

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!#$%&*+/:;<=>?@^';
var passwordLength = 0;
var passwordWordPool = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  propmts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // resets passwordLength so new password can be generated
  passwordLength = 0;
}

var propmts = function () {
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt('How long do you want the password (please enter 8-128)');
    passwordLength = parseInt(passwordLength);
  }
  while (!passwordWordPool) {
    var includeUpper = window.confirm('Do you want to include upper case letters in the password? (Confirm for yes, cancel for no)');
    if (includeUpper) {
      passwordWordPool = passwordWordPool.concat(upperCase);
    }
    console.log(passwordWordPool);
    var includeLower = window.confirm('Do you want to include lower case letters in the password? (Confirm for yes, cancel for no)');
    if (includeLower) {
      passwordWordPool = passwordWordPool.concat(lowerCase);
    }
    console.log(passwordWordPool);
    var includeNumbers = window.confirm('Do you want to include numbers in the password? (Confirm for yes, cancel for no)');
    if (includeNumbers) {
      passwordWordPool = passwordWordPool.concat(numbers);
    }
    console.log(passwordWordPool);
    var includeSymbols = window.confirm('Do you wnat to include symbols in the password? (Confirm for yes, cancel for no)');
    if (includeSymbols) {
      passwordWordPool = passwordWordPool.concat(symbols);
    }
    console.log(passwordWordPool);
  }
}

var generatePassword = function() {
  password = "Test##45^7";
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
