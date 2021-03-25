// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// Global variables for user input, possible password array, and eventual password array.
var userInput;
var possArr = [];
var secrPassArr = [];

function generatePassword() {
  // Resets the password arrays
  possArr = [];
  secrPassArr = [];

  // Prompts user to enter password length
  userInput = prompt("Please enter password length:", "Password Length");

  // Tests to see if length is acceptable
  if (userInput >= 8 && userInput <= 128) {

    // If it is, it will prompt user for different types they would like in password
      if (confirm("Would you like to include uppercase letters?")) {

        // If they choose uppercase, for example, it will iterate through uppercase variable and push all characters into the possible characters array.
        var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 0; i < upperCharacters.length; i++ ) {
          possArr += upperCharacters.charAt(i);
        }
      } 
      if (confirm("Would you like to include lowercase letters?")) {
        var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < lowerCharacters.length; i++ ) {
          possArr += lowerCharacters.charAt(i);
        }
      }
      if (confirm("Would you like to include numbers?")) {
        var numList = '0123456789';
        for (var i = 0; i < numList.length; i++ ) {
          possArr += numList.charAt(i);
        }
      }
      if (confirm("Would you like to include special characters?")) {
        var specCharacters = '!@#$%^&*()';
        for (var i = 0; i < specCharacters.length; i++ ) {
          possArr += specCharacters.charAt(i);
        }
      }
      // This shows the possible characters in the console.
      console.log(possArr);

      // If user does not choose any types, they will be prompted to choose one, and the generation starts over.
      if (possArr.length === 0) {
        alert('You must select at least one character type for your password');
        generatePassword();
      }

  // If user cancels initial prompt, it will exit out of function.    
  } else if (userInput === null) {
      return;

  // If the user enters a value too low, will be prompted to enter a higher value.
  } else if (userInput < 8) {
    alert("Number too low. Password must be at least 8 characters.")
    generatePassword();

  } else if (userInput > 128) {
    alert("Number too high. Password cannot be more than 128 characters.")
    generatePassword();

  // If user enters anything other than acceptable number value, will be prompted to enter valid input.
  } else {
    alert("Please enter a valid character.");
    generatePassword();
  }
  // Finally, function will iterate over possible character array and add at random the specified number of characters to a password array.
  for (i = 0; i < userInput; i++) {
    secrPassArr += possArr.charAt(Math.floor(Math.random() * possArr.length))
  }
  // Function will return the generated password.
  return secrPassArr;
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  if (password === undefined) {
    passwordText.value = 'Oh come on. Make a password. Your grandma might see your nudes.'
    return;
  }
  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
