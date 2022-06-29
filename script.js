// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var lowerCase = false;
  var upperCase = false;
  var number = false;
  var specialCharacters = false;
  var passwordLength = 0;
  var generatedPassword = [];
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()";
  var numbers = "1234567890";
  function getUserSelection() {
    function input () {
      passwordLength = prompt ("Your password must be between 8 characters and 128 characters");
      lowerCase = confirm ("Do you want Lower Case letters in your password?");
      upperCase = confirm ("Do you want Upper Case in your password?");
      specialCharacters = confirm ("do you want Spcecial Characters in your Password?");
      number = confirm(" Do you want numbers in your pass Word");
    }
    input();
    while(lowerCase == false && upperCase == false && specialCharacters == false && number){
      var proceed = confirm ("Select One category.");
      if (proceed) {
        input();
      }
      else
      return;
    }
  }
  getUserSelection();
    console.log(generatedPassword);
    var index = 0
    while(generatedPassword.length < passwordLength) {
      if (upperCase == true && generatedPassword.length < passwordLength){
        console.log("test upper");
        function upper() {
            const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          generatedPassword[index] = upper[Math.floor(Math.random() * upper.length)];
          console.log(generatedPassword[index]);
          index++
        }
        upper();
      }
      if(specialCharacters == true && generatedPassword.length < passwordLength) {
        console.log("test special");
        function special(){
            const special = "!@#$%^&*()"
          generatedPassword[index] = special[Math.floor(Math.random() * special.length)];
          console.log(generatedPassword[index]);
          index++
        }
        special();
      }
      if(number == true && generatedPassword.length < passwordLength) {
        console.log("test numbers");
        function numbers() {
          const numbers = "1234567890"
          generatedPassword[index] = numbers[Math.floor(Math.random() * numbers.length)];
          console.log(generatedPassword[index]);
          index++
        }
        numbers();
      }
      if (lowerCase == true && generatedPassword.length < passwordLength) {
        console.log("lowercase");
        function lowerCase() {
          const lowerCase = "abcdefghijklmnopqrstuvwxyz"
          generatedPassword[index] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
          console.log(generatedPassword[index]);
          index++
        }
        lowerCase();
      }
    }
    var x = 0;
    x = generatedPassword.join("");
     console.log(x);
   return x;
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












