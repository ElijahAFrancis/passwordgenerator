var lowercaseChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercaseChar = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "?", "+", "=", "|", "<", ">"];
var possibleChar = [];
var guaranteedChar = [];
var passwordArr = [];
var passwordLength = 0;

var generateBtn = document.querySelector("#generate");

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function getRand(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getOptions() {
  possibleChar = [];
  guaranteedChar = [];

  // Asking for length
  passwordLength = parseInt(
    prompt("How many characters would you like your password to contain?"),
    10
    );

  // Checks that password length is valid
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128");
    return null;
  };

  // Asks for password criteria
  if(confirm("Include lowercase characters")) {
  possibleChar = possibleChar.concat(lowercaseChar);
  guaranteedChar.push(getRand(lowercaseChar));
  };
  if(confirm("Include uppercase characters")) {
    possibleChar = possibleChar.concat(uppercaseChar);
    guaranteedChar.push(getRand(uppercaseChar));
  };
  if(confirm("Include numbers")) {
    possibleChar = possibleChar.concat(numberChar);
    guaranteedChar.push(getRand(numberChar));
  };
  if(confirm("Include special characters")) {
    possibleChar = possibleChar.concat(specialChar);
    guaranteedChar.push(getRand(specialChar));
  };

  return generatePassword();
}

function generatePassword() {
  var passwordText = document.querySelector("#password");
  passwordArr = [];
  password = "";
  if (possibleChar.length > 0){
    for(var i = 0; i < passwordLength-guaranteedChar.length; i++) {
      passwordArr.push(getRand(possibleChar));
    };

    passwordArr = passwordArr.concat(guaranteedChar);

    password = shuffleArray(passwordArr).join("");

    passwordText.value = password;
  } else {
    alert ("No criteria for password");
    return null
   };
}

// Add event listener to generate button
generateBtn.addEventListener("click", getOptions);
