// Generate Random Password based on User Input
var numChars = prompt("How many characters do you want in the password ? ");
var confirmSplChars = confirm("Do you want to include Special characters ? ");
var confirmNumChars = confirm("Do you want to include Numeric characters ? ");
var confirmSmlChars = confirm("Do you want to include Lower Case characters ? ");
var confirmUprChars = confirm("Do you want to include Upper Case characters ? ");



function Generate(){
    // Pasword Length 
    // Special Characters 
    // CAPS YES/NO
    // Display Password
    document.getElementById("generated-password").value=password;
}

// Function to copy generated password to clipboard

function CopyPwd(){
    document.getElementById("generated-password").select();
    document.execCommand("Copy");
    alert("Password copied to Clipboard !!! ")
}

{/* <script type="text/javascript">

    var userName = prompt("What's your name?");
    var confirmCats = confirm("Do you like cats?");

    var petName = "Meeses";
    var petType = "Tuxedo Cat";
    var petAge = 5;
    var petIsCat = true;

    if (confirmCats === true ) {
      window.alert(petName + " " + petType + " " + petAge);
    }
    else {
      alert("You don't get my cat's information");
    }

    if (petIsCat) {
      alert("My pet is a cat");
    }
    else {
      alert("My pet is not a cat");
    }

    if (petAge !== 7) {
      alert("My pet is not 7 years old");
    }

    if (petAge === 5) {
      alert("My pet is 5 years old");
    }
    else if (petAge < 5) {
      alert("My pet is less than 5 years old");
    }
    else {
      alert("My pet is older than 5 years old");
    }

    // document.write() overwrites the entire page. We don't normally use this, but we will today for simplicity
    document.write("Welcome to our page " + userName);

    var catAge = prompt("How old is your cat?");

    // Won't work as expected
    alert(catAge + 2);

    // Works as expected
    alert(parseInt(catAge) + 2);

    console.log("The output is "+ confirmCats);
  </script> */}