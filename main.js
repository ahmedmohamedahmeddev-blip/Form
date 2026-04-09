function login(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var error = document.getElementById("error");
    var text = "";

    if (name.length < 3){
        text = "please enter valid username"
        error.innerHTML = text ;
        return false ;

    }else if(email.length < 10 || email.indexOf("@gmail.com")==-1){
        text = "please enter valid email";
        error.innerHTML = text ;
        return false;
    }else if(isNaN(phone) || phone.length != 11){
        text = "please enter valid phone";
        error.innerHTML = text ;
        return false;
    }else if(password.length < 8){
        text = "please enter valid password"
        error.innerHTML = text ;
        return false;
    }
    else if(password2 != password){
        text = "password do not match"
        error.innerHTML = text ;
        return false

    }else{
        alert("form submit successful");
    }
}