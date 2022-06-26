/// Assignment code here
window.alert ("Click button for password!!!");

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberstEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


 const randomFunc = {
   lower: getRandonLower,
   upper: getRandomUpper,
   number: getRandomNumber,
   Symbol: getRandomSymbol
 };

generateEl.addEventListener('click' , () =>{
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resuleEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    length
  );

});

function generatePassword(lower, upper, number, symbol, length) {

  let generatedPassword = '';

  const typeCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }];

  if (typesCount == 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = object.keys(type)[0];
      
      generatedPassword += randomFunc[funcName]();

    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;



}

// copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    
  }
})

// Generator functions
function getRandonLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

function getRandomSymbol() {
  const Symbols = '!@#$%^&*()=<>/+-.'
  return Symbols = [Math.floor(Math.random() * Symbol.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = document.getElementById("password");
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 9;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
