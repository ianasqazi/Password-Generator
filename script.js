
// Generate Random Password based on User Input using JavaScript

  window.alert("Please choose minimum 1 option of character set from the following prompt windows");
  var lenPwd = prompt("How many characters do you want in the password ? (8 - 120 range");

  var confirmSplChars = confirm("Do you want to include Special characters ? ");
  var confirmNumChars = confirm("Do you want to include Numeric characters ? ");
  var confirmSmlChars = confirm("Do you want to include Lower Case characters ? ");
  var confirmUprChars = confirm("Do you want to include Upper Case characters ? ");

//Function to check if num of characters for Password matches our requirement
function validateNumChar(){
  if ((lenPwd>=8) && (lenPwd<=120)){
    validateCharSets();
  } 
  else{
    alert ("Choose between the range of 8-120 characters !!!")
  }
}

// Function to check if one of the charactersets have been selected for input

function validateCharSets(){
  if((confirmSplChars || confirmNumChars || confirmSmlChars || confirmUprChars) == true){
      genPwd(lenPwd);
  }
  else{
    alert ("Please select one character set minimum !!!")
  }
}

genSubmit.addEventListener("click",function(e){
  
  var pwd = '';

  (confirmSplChars.TRUE) ? pwd +=confirmSplChars : '';
  (confirmNumChars.TRUE) ? pwd +=confirmNumChars : '';
  (confirmSmlChars.TRUE) ? pwd +=confirmSmlChars : '';
  (confirmUprChars.TRUE) ? pwd +=confirmUprChars : '';

  document.getElementById("generatedPassword").innerHTML = genPwd(lenPwd,pwd) ;
});

//Function to generate Random Password 
function genPwd (lenPwd,pwd){
 var pwd = '';
 for (var i=0; i<lenPwd; i++){
   pwd += characters.charAt(Math.floor(Math.random() * pwd.length));
 }
 return pwd;
}


console.log()