
// Generate Random Password based on User Input using JavaScript

function fullExecute(){

var lenPwd = parseInt(prompt("How many characters do you want in the password ?","8-128 characters"));

var confirmSplChars = confirm("Do you want to include Special characters ? ");
var confirmNumChars = confirm("Do you want to include Numeric characters ? ");
var confirmSmlChars = confirm("Do you want to include Lower Case characters ? ");
var confirmUprChars = confirm("Do you want to include Upper Case characters ? ");

validateNumChar();

//Function to check if num of characters for Password matches our requirement
function validateNumChar(){
  if ((lenPwd>=8) && (lenPwd<=128)  && (lenPwd==Number)){
    validateCharSets();
  }
  else{
    alert ("Range Incorrect : 8-120 characters !!! \n \t OR \t\n NOT a number");
  }
}

// Function to check if one of the charactersets have been selected for input

function validateCharSets(){
  if((confirmSplChars || confirmNumChars || confirmSmlChars || confirmUprChars) == true){
   genPwd();
  }
  else{
    alert ("Please select one character set minimum !!!");
  }
}

//Function to generate Random Password 

function genPwd (){
  // Declaring Variables 
  var pwd = '';
  var finalPwd = '';
  var uprChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lwrChars = "abcdefghijklmnopqrstuvwxyz";
  var numChars = "0123456789";
  var splChars = "~!@#$%^&*()_+-=`";

  // Adding the selected charactersets to the the final PWD (temporary) variable 
  (confirmSplChars==true) ? pwd +=splChars : '';
  (confirmNumChars==true) ? pwd +=numChars : '';
  (confirmSmlChars==true) ? pwd +=lwrChars : '';
  (confirmUprChars==true) ? pwd +=uprChars : '';

  // Randomize the characters from selected Charsets  
  for (var i = 1; i <= lenPwd; i++){
    finalPwd += pwd.charAt(Math.floor(Math.random() * pwd.length ));
    document.getElementById("generatedPassword").innerText=finalPwd;
  };
  return finalPwd;
}
}

// End of Full Execute () 
// -------------------------------------

// Function to copy Password to Clip Board 

function CopyPwd(){
       document.getElementById("generatedPassword").select();
       document.execCommand('Copy');
       window.alert("Password copied to Clipboard !!! ")
   }