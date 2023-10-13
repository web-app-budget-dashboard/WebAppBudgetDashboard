var passwordd = document.getElementById('password1');
var email = document.getElementById('email');

var verif=false
function verifyUser(){
    if(email.value===localStorage.getItem("email")){
        if (passwordd.value === localStorage.getItem("password")) {
            alert("welcome back ")
            verif=true
        }
        else{
            alert ("wrong password")
        }
        }
        else{
            alert("this user is not registered");
        }
    }

$("#bt1").on("click",function (event) {
    event.preventDefault()
    verifyUser()
    if(verif){
        window.location.href="./padject.html"
    }
})