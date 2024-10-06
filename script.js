// Get Display Field and item selector by ID
const passwordBox = document.getElementById("random-password");
// const passwordLengthField = document.getElementById("lentgh-select");
const rangeFeild =  document.getElementById("length-range");

// All Charecter set
const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmopqrstuvwxyz";
const numbers = "1234567890";
const specialChar = "!@#$%^&*()_+-={}:<>?";
// const allChar = upperCase + lowerCase + numbers + specialChar;

function createPassword(){
    const passwordLength = parseInt(rangeFeild.value);
    let password = "";


    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowecase").checked;
    const includeNumber = document.getElementById("include-number").checked;
    const includeSpecialChar = document.getElementById("include-symbol").checked;


    let charSet = "";
    if(includeUppercase) charSet += upperCase ;
    if(includeLowercase) charSet += lowerCase ;
    if(includeNumber) charSet += numbers ;
    if(includeSpecialChar) charSet += specialChar ;
   
    
  if(charSet === "") {
        alert("Please select at least one character type for a secure password.");
        return;
    }



    if(includeUppercase) password += upperCase[Math.floor(Math.random() * upperCase.length)];
    if(includeLowercase)  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if(includeNumber) password += numbers[Math.floor(Math.random() * numbers.length)];
    if(includeSpecialChar) password += specialChar[Math.floor(Math.random() * specialChar.length)];
   
    while( passwordLength > password.length ){
    password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    passwordBox.value = password;
    }
function copyPassword (){
    passwordBox.select();
    document.execCommand("copy");

}    

function updateDisplaylength (){
    const LengthDisplay = document.getElementById("range-display-length");
    LengthDisplay.textContent = rangeFeild.value;
}



