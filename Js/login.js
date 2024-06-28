var Email_input = document.getElementById('Email');
var Password_input = document.getElementById('Password');
var alretMessage = document.getElementById('alretMessage');
var button_login = document.querySelector('.button');



var users = JSON.parse(localStorage.getItem('USER'));

button_login.addEventListener('click', function () {
    if (Email_input.value == '' || Password_input.value == '') {
        alretMessage.innerHTML = 'All inputs is required';
        alretMessage.style.color = 'red';
    }
    else if (users == null) {
        alretMessage.innerHTML = "You don't have an account";
        alretMessage.style.color = 'red';
    }
    else {
        if (checkEmailAndPassword() == true) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].Email == Email_input.value && users[i].Passwoed == Password_input.value) {
                    console.log(users[i].Email);
                    var userName = users[i].Name;
                    localStorage.setItem('userName', userName);
                    window.location.href = 'home.html';
                    console.log(true);
                }
            }
        }
        else {
            alretMessage.innerHTML = 'incorrect email or password';
            alretMessage.style.color = 'red';
            console.log(false);
        }
    }
    clearForm();
})

function regex() {
    var re = {
        reEmail: /^\w{5,20}@gmail.com/,
        rePasword: /^\w{8,25}/,
    }
    if (re.reEmail.test(Email_input.value) == true && re.rePasword.test(Password_input.value) == true)
        return true;
    else
        return false;
}

function checkEmailAndPassword() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].Email == Email_input.value && users[i].Passwoed == Password_input.value)
            return true
    }
}
function clearForm() {
    Password_input.value = '';
    Email_input.value = '';
}