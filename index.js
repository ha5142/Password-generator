const btn = document.querySelector(".action");
const displayVal = document.querySelector("#password");





const passwordLenth = 10;
const includeUpper  = true;
const includeLower = true;
const includeSymbol = true;
const includeNumbers = true;



function generatePassword(length, includeLower, includeUpper, includeSymbol, includeNumbers) {
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
// const symbolChar = "!@#$%^&*()_+=";

let allowedChar = "";
let password = "";


allowedChar += includeUpper ? uppercaseChar : "";
allowedChar += includeLower ? lowercaseChar : "";
allowedChar += includeNumbers ? numberChar : "";
// allowedChar += includeSymbol ? symbolChar : "";


if(length <= 0) {
   return `(password length at least 1)`;
}
if (allowedChar.length == 0) {
    return `(at least 1 set of chharter nedded)`;
}

    for(let i = 0; i<length; i++) {
        const randomIdx = Math.floor(Math.random() * allowedChar.length); // generte rdm no. according char length
        console.log(randomIdx);
        password +=  allowedChar[randomIdx];  // passing the index of randomidx in allowedchar

}

return password;
}


btn.addEventListener("click" ,  (e) => {
  e.preventDefault();
  
const password = generatePassword(passwordLenth, includeLower, includeUpper, includeSymbol, includeNumbers);
displayVal.value = password;

// console.log(`generate password: ${password}`);

});
