
// Generate Random Password based on User Input using JavaScript

  

  // var confirmSplChars = true;
  // var confirmNumChars = false;
  // var confirmSmlChars = true;
  // var confirmUprChars = false;

//Function to check if num of characters for Password matches our requirement
function validateNumChar(){
  window.alert("Please choose minimum 1 option of character set from the following prompt windows");
  var lenPwd = prompt("How many characters do you want in the password ? (8 - 120 range");

  var confirmSplChars = confirm("Do you want to include Special characters ? ");
  var confirmNumChars = confirm("Do you want to include Numeric characters ? ");
  var confirmSmlChars = confirm("Do you want to include Lower Case characters ? ");
  var confirmUprChars = confirm("Do you want to include Upper Case characters ? ");
  
  if ((lenPwd>=8) && (lenPwd<=120)){
    this.validateCharSets();
  }
  else{
    alert ("Choose between the range of 8-120 characters !!!")
  }
}

// Function to check if one of the charactersets have been selected for input

function validateCharSets(){
  if((confirmSplChars || confirmNumChars || confirmSmlChars || confirmUprChars) == true){
   this.genPwd(lenPwd);
  }
  else{
    alert ("Please select one character set minimum !!!")
  }
}



//Function to generate Random Password 

function genPwd (lenPwd){
  var pwd = '';
  var finalPwd = '';
  var uprChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lwrChars = "abcdefghijklmnopqrstuvwxyz";
  var numChars = "0123456789";
  var splChars = "~!@#$%^&*()_+-=`";

  (confirmSplChars==true) ? pwd +=splChars : '';
  (confirmNumChars==true) ? pwd +=numChars : '';
  (confirmSmlChars==true) ? pwd +=lwrChars : '';
  (confirmUprChars==true) ? pwd +=uprChars : '';

 for (var i = 0; i < lenPwd; i++){
   finalPwd += pwd.charAt(Math.floor(Math.random() * lenPwd));
 };
 console.log(finalPwd);
 document.getElementById('generatedPassword').innerText = finalPwd;
//  return finalPwd;
}
