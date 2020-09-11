


// GET ALL DATA
function getFormData() {
  var formData = {};
  formData["name"] = document.registrationForm.name.value;
  formData["email"] = document.registrationForm.email.value;
  formData["mobile"] = document.registrationForm.mobile.value;
  formData["country"] = document.registrationForm.country.value;
  formData["gender"] = document.registrationForm.gender.value;
  return formData;
}

// SAVE ALL DATA
function userDatabase(user) {
  var table = document.getElementById("userlist").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = user.name;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = user.email;

  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = user.mobile;

  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = user.country;

  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = user.gender;

}


// FORM RESET
function resetForm() {
    var name = document.registrationForm.name.value = "";;
    var email = document.registrationForm.email.value = "";;
    var mobile = document.registrationForm.mobile.value = "";;
    var country = document.registrationForm.country.value = "";
    
    // var gender = document.registrationForm.gender.value = "";

    var male = document.getElementById("genderm").value = "";
    var female = document.getElementById("genderf").value = "";
}




// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.registrationForm.name.value;
    var email = document.registrationForm.email.value;
    var mobile = document.registrationForm.mobile.value;
    var country = document.registrationForm.country.value;
    var gender = document.registrationForm.gender.value;

    
  // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        return true;
    }
};


function onFormSubmit() {
    var formData = getFormData();
    if(validateForm() == true ){
      userDatabase(formData);
      resetForm();
    }else null;
    
}