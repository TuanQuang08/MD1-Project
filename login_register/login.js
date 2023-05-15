let listUser = JSON.parse(localStorage.getItem('userList'));
if(listUser==null){
    listUser = [];
}
function login(){
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let flag = false;
    if(username == ''){
        document.getElementById('validate_user').innerHTML = 'The username is required!'
    }
    if(pass == ''){
        document.getElementById('validate_password').innerHTML = 'The password is required!'
    }
    for (let i = 0; i<listUser.length;i++){
        if(username === listUser[i].username && pass === listUser[i].password){
            flag = true;
            localStorage.setItem('nameKey', listUser[i].username)
            window.location.href = '../index.html';
        }
    }
    if (!flag){
        alert("Wrong username or password!!!");
    }
}
function forgotPass() {
    let user = prompt("Enter Username: ");
    let flag = false;
    for (let i = 0; i<listUser.length;i++){
        if(user === listUser[i].username){
            let newPass = prompt("Enter New Password: ");
            listUser[i].password = newPass;
            localStorage.setItem('userList',JSON.stringify(listUser));
            alert("Successful!!!");
            flag = true;
        }
    }
    if(!flag){
        alert("Wrong Username!!!");
    }
}