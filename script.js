// Assignment Code
var generateBtn = document.querySelector("#generate");

//ASCII charcode
let upperCase = generateCharCode(65, 91);
let lowerCase = generateCharCode(97, 123);
let numbers = generateCharCode(48, 58);
let specialChar1 = generateCharCode(33, 48);
let specialChar2 = generateCharCode(58, 65);
let specialChar3 = generateCharCode(91, 97);
let specialChar4 = generateCharCode(123, 127);
let allSpecialChar = specialChar1.concat(
  specialChar2,
  specialChar3,
  specialChar4
);

//Collect length requirement from user
function generatePassword() {
    let length = window.prompt("Type a value for the length of the password between 8 and 128");

    if (length >=8 && length <=128) {
        return randomPassword();
     // Verify if there is a value within the prompt
    } else if (!length) {
        alert("Error. Value entered is invalid")
            return;
      
    // Verify if the value is a number
    } else if (isNaN(length)) {
        alert("Error. Value must be a number!")
            return;
    // Verify if value is a decimal
    } else if (length % 1 != 0) {
        alert("Error. Value is a float. Must be an int!");
            return;
    }
       else {
            generatePassword();
        }   
}
 //Password requirements analysis
 function randomPassword () {
    let hasLower;
    let hasUpper;
    let hasNumber;
    let hasSpecialCharacter;
    let allArrays = []
    let password = '';

    hasLower = window.confirm("Do you wish to have lowercase letters?");
    hasUpper = window.confirm("Do you wish to have uppercase letters?");
    hasSpecialCharacter = window.confirm("Do you wish to have special characters?");
    hasNumber = window.confirm("Do you wish to have numbers?");
    
    if (hasLower) {
        allArrays = allArrays.concat(lowerCase);
      }
      if (hasUpper) {
        allArrays = allArrays.concat(upperCase);
      }
      if (hasSpecialCharacter) {
        allArrays = allArrays.concat(allSpecialChar);
      }
      if (hasNumber) {
        allArrays = allArrays.concat(numbers);
      }
    
      for (let i = 0; i < length; i++) {
        password = password.concat(
          allArrays[Math.floor(Math.random() * allArrays.length)]
        );
      }
      return password;
    }
//ASCII into an array

    function generateCharCode(startIndex, endIndex) {
        let charArray = [];
        for (let i = startIndex; i < endIndex; i++) {
          charArray.push(String.fromCharCode(i));
        }
        return charArray;
      }
//Write password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);
    