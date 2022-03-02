function validate() {
  let firstName = document.myForm.fName;
  let lastName = document.myForm.lName;
  let Password = document.myForm.password;
  let Cpassword = document.myForm.cofirmPassword;
  let Gender = document.myForm.gender;
  let Skills = document.myForm.skills;
  let Qualification = document.myForm.qualification;
  let Address = document.myForm.address;
  let Picture = document.myForm.pic;

  if(firstName.value.length < 3){
    alert("First name should be more than 3 characters!");
    firstName.focus();
    return false;
  }
    
  if(lastName.value.length < 1){
    alert("Last name should be  more than 1 characters!");
    lastName.focus();
    return false;
  }

  if(Password.value.length < 3){
    alert("Password should be more than 3 characters!");
    Password.focus();
    return false;
  }

  if(Cpassword.value != Password.value){
    alert("Confirm Password should be same as above!");
    Cpassword.focus();
    return false;
  }

  if(Gender.value.length <= 0){
    alert("Select one!");
    return false;
  }

  var check = false;
  for (var i = Skills.length - 1; i >= 0; i--) {
    if(Skills[i].checked){
      check = true;
    }
  }
  if(check == false){
    alert("Select atleat one!");
    return false;
  }

  if(Qualification.value == "Select"){
    alert("Heighest Qualification!");
    Qualification.focus();
    return false;
  }

  if(Address.value.length <= 0){
    alert("Give a proper address!");
    Address.focus();
    return false;
  }

  if(Picture.value.length <= 0){
    alert("Choose a picture!");
    Picture.focus();
    return false;
  }else{
    return true;
  }

}


