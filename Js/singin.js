var Name_input = document.getElementById('Name');
var Email_input = document.getElementById('Email');
var Password_input = document.getElementById('Password');
var button_sing = document.querySelector('.button button');
var alretMessage = document.getElementById('alretMessage');

var users;
if (localStorage.getItem('USER') != null) {
    users = JSON.parse(localStorage.getItem('USER'));
}
else {
    users = [];
}

function creatUser() {
    if (Name_input.value == '' || Email_input.value == '' || Password_input.value == '') {
        alretMessage.innerHTML = 'All inputs is required';
        alretMessage.style.color = 'red';
    }

    else {
        if (regex() == true) {
            var creatUser = {
                Name: Name_input.value,
                Email: Email_input.value,
                Passwoed: Password_input.value,
            }
            if (checkEmail() == true) {
                alretMessage.innerHTML = 'email already exists';
                alretMessage.style.color = 'red';
            }
            else {
                alretMessage.innerHTML = 'Successful';
                alretMessage.style.color = 'green';
                users.push(creatUser);
                localStorage.setItem('USER', JSON.stringify(users));
            }
        }
        else {
            alretMessage.innerHTML = 'Enter your password, email, and name correctly';
            alretMessage.style.color = 'red';
        }
    }
    clearForm();
}

button_sing.addEventListener('click', function (e) {
    creatUser();
})

function checkEmail() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].Email == Email_input.value)
            return true;
    }
}

function regex() {
    var re = {
        reName: /^\w{3,15}\s?\w{0,15}/,
        reEmail: /^\w{5,20}@gmail.com/,
        rePasword: /^\w{8,25}/,
    }
    if (re.reName.test(Name_input.value) == true && re.reEmail.test(Email_input.value) == true && re.rePasword.test(Password_input.value) == true)
        return true;
    else
        return false;

}


function clearForm() {
    Password_input.value = '';
    Email_input.value = '';
    Name_input.value = '';
}