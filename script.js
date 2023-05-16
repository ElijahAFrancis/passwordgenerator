var lowercaseChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercaseChar = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "?", "+", "=", "|", "<", ">"];
var possibleChar = [];
var length = 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain"),
    10
  );


  // Checks that password length is valid
  if (Number.isNaN(length)) {
    alert("Password length must be a number between 8 and 128");
    return null;
  } else if (length < 8) {
    alert("Password length must be a number between 8 and 128");
    return null;
  } else if (length > 128) {
    alert("Password length must be a number between 8 and 128");
    return null;
  }

  // Asks for password criteria
  if (confirm("Include lowercase characters")) {
  possibleChar = possibleChar.concat(lowercaseChar);
  }

  if (confirm("Include uppercase characters")) {
    possibleChar = possibleChar.concat(uppercaseChar);
  }

  if(confirm("Include numbers")) {
    possibleChar = possibleChar.concat(numberChar);
  }

  if(confirm("Include special characters")) {
    possibleChar = possibleChar.concat(specialChar);
  }

}

function generatePassword() {
  var options = getOptions();

  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    possibleChar[randomIndex];
  }

  if (!options) return null;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
