var passwordLength;
var lowercase;
var uppercase;
var numeric;
var specialChar;
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=",">", "?", "@", "[", "\\","]","^","_", "`", "{","|","}","~"];
var combinedCharArray = [];
var generatedPassword = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt user to write how many characters the password should contain.  If they choose a number
  //between 8 and 128, continue with that number stored in passwordLength variable.
  //if they choose a number that does NOT fit these criteria, alert them that they must choose an appropriate 
  //number of characters, and prompt them to choose again.  (Cannot move forward until they choose an appropriate number)
  passwordLength = prompt("How many characters should your password contain?  Password must be between 8 and 128 characters.");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must contain at least 8 characters, and be no larger than 128 characters.  Please choose again.");
    passwordLength = prompt("How many characters should your password contain?  Password must be between 8 and 128 characters.");
  }

  function chooseCharType() {
    lowercase = confirm("Should the password include lowercase letters?");
    uppercase = confirm("Should the password include uppercase letters?");
    numeric = confirm("Should the password include numbers?");
    specialChar = confirm("Should the password include special characters?");

  }
  chooseCharType();
//if the user doesn't select ANY character type, they must repeat until they select at least one.
  while (!lowercase && !uppercase && !numeric && !specialChar) {
    alert("You must select at least one character type.  Please try again.");
    chooseCharType();
  }

  //The empty combinedCharArray will add in each type of character the user selected to use by concatenating in the 
  //array(s) which contain that character type.
  if (lowercase) {
    combinedCharArray = combinedCharArray.concat(lowercaseLetters);
  } 
  if (uppercase) {
    combinedCharArray = combinedCharArray.concat(uppercaseLetters);
  }
  if (numeric) {
    combinedCharArray = combinedCharArray.concat(numbers);
  }
  if (specialChar) {
    combinedCharArray = combinedCharArray.concat(symbols);
  }


  //for each of the password's expected characters, generate a random character from the character types selected
  //by the user
  for (i=0; i < passwordLength; i++) {
    //generate a random character by choosing a random index of the array of possible characters
    //the newest character will then be added as the next character in the password string.
    var index = Math.floor (Math.random() * combinedCharArray.length);
    var newChar = combinedCharArray[index];
    generatedPassword = generatedPassword + newChar;
  }
return generatedPassword;
}

// Write password to the #password input
//the new var password will be set to whatever my generatePassword function returns
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

