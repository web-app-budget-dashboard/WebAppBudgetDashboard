var passwordd = document.getElementById("password1");
var passwordValid = document.getElementById("password2");
var email = document.getElementById("email");
var names = document.getElementById("name");
var bottn = document.getElementById("bt");

var noEmpty = false;
var passconfirm = false;
function checkLog() {
  noEmpty = form.checkValidity();
  if (!noEmpty) {
    alert("Please fill out all fields.");
    return;
  }
  if (passwordd.value === passwordValid.value) {
    passconfirm = true;
  } else {
    passconfirm = false;
    alert("Make sure passwords match");
    passwordd.style.borderColor = "red";
    passwordValid.style.borderColor = "red";
    return;
  }
  if (noEmpty && passconfirm) {
    alert("Successfully Registered!");
  }
}

$("#bt").on("click", function (event) {
  event.preventDefault()
  checkLog();
  if (noEmpty && passconfirm) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", passwordd.value);
    localStorage.setItem("name", names.value);
    window.location.href="./padject.html"
  }
});
