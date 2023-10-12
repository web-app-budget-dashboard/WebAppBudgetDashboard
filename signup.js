
var passwordd = document.getElementById('password1');
var passwordValid = document.getElementById('password2');
var email = document.getElementById('email');
var names = document.getElementById('name');
var bottn = document.getElementById('bt');

var noEmpty = false;
var passconfirm = false;
function checkLog() {
  noEmpty = form.checkValidity();
  if (!noEmpty) {
    alert('Please fill out all fields.');
    return;
  }
  if (passwordd.value === passwordValid.value) {
    passconfirm = true;
  } else {
    passconfirm = false;
    alert('Make sure passwords match');
    passwordd.style.borderColor = 'red';
    passwordValid.style.borderColor = 'red';
    return;
  }
  if (noEmpty && passconfirm) {
    alert('Successfully Registered!');
  }
}

var users=[]
function arrayUsers(na,em,pass) {
  var user = {
    name: na.value,
    email: em.value,
    password: pass.value,
  };
  users.push(user)
  console.log(user)
  return users;
}

bottn.onclick=function(){
  checkLog()
  if (noEmpty && passconfirm) {
    arrayUsers(names,email,passwordd);
  }
};