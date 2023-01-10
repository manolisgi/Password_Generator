// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



let bigArray = [];
let lengthOfPassword = window.prompt("Please choose the length of your password. The length should be between 10 and 64 characters");

  if (lengthOfPassword < 64 && lengthOfPassword > 10) {
    let lowerCase = confirm("Do you wish to include lower case characters?")
    console.log(lowerCase)
    //concat this to big array
    if (lowerCase === true) {
      bigArray = bigArray.concat(lowerCasedCharacters)
    }
    let upperCase = confirm("Do you wish to include upper lower case characters?")
    console.log(upperCase)
    //concat this to big array
    if (upperCase === true) {
      bigArray = bigArray.concat(upperCasedCharacters)
    }
    let numericsQ = confirm("Do you wish to include Numbers?")
    console.log(numericsQ)
    //concat this to big array
    if (numericsQ === true) {
      bigArray = bigArray.concat(numericCharacters)
    }
    let specialsQ = confirm("Do you wish to include special characters?")
    console.log(specialsQ)
    //concat this to big array
    if (specialsQ === true) {
      bigArray = bigArray.concat(specialCharacters)
    }
  } else {
    window.alert("Wrong number of characters, please try again and make sure to have between 10 and 64 characters!")
  }



// Function to generate password with user input
function generatePassword() {


  let practicePassword = "";


  for (let i = 0; i < lengthOfPassword; i++) {

    let randomIndex = Math.floor(Math.random() * bigArray.length);
    practicePassword += bigArray[randomIndex];

  }



  return practicePassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);