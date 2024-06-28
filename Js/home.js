var logOut = document.getElementById('logOut');
var text = document.getElementById('text');
var navLogin = document.getElementById('nav-logout');
var logo = document.querySelector('.logo')

logOut.addEventListener('click', function () {
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
})

text.innerHTML = `${localStorage.getItem('userName')}`;























// if (navLogin.classList.contains('d-md-none')) {
//     logOut.classList.add('d-none');
//     navLogin.addEventListener('click', function () {
//         logo.classList.toggle('mb-5')
//         navLogin.classList.toggle('mb-5')
//         logOut.classList.toggle('d-none');
//         logOut.style.cssText = `
//         position: absolute;
//         top: 10%;
//         left:10%;
//         width:80%
//         `
//     })
// }
// else {
//     logOut.classList.remove('d-none');
// }
