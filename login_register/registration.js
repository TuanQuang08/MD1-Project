let listUser = JSON.parse(localStorage.getItem('userList'));
let id;
console.log(listUser);
if (listUser == null){
    listUser = [];
    id = 1;
}else {
    id = listUser[listUser.length - 1].id + 1;
}
function register() {
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let confirm = document.getElementById('confirmpassword').value;

    if(username !== '' || pass !== '' || confirm !== ''){
        if(checkEmail(username) || checkPhoneNumber(username)){
            if (checkPass(pass)){
                if(pass === confirm){
                    // localStorage.setItem('username',username);
                    // localStorage.setItem('pass',pass);
                    let user = new User(id,username,pass);
                    listUser.push(user);
                    localStorage.setItem('userList',JSON.stringify(listUser));
                    alert("Successful Registration!!!");
                    window.location.href = "login.html";
                }else {
                    document.getElementById('validate_confirm_pass').innerHTML = 'Confirm password not match error!';
                }
            }else{
                document.getElementById('validate_password').innerHTML = 'Do not use this password!'
            }
        }else{
            alert("Do not use this username!");
        }
    }else{
        if(username == ''){
            document.getElementById('validate_user').innerHTML = 'The username is required!'
        }
        if(pass == ''){
            document.getElementById('validate_password').innerHTML = 'The password is required!'
        }
        if(confirm == ''){
            document.getElementById('validate_confirm_pass').innerHTML = 'The confirm password is required!'
        }
    }
}
const checkEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
    {
        for (let i = 0; i < listUser.length; i++) {
            if (email === listUser[i].username) {
                document.getElementById('validate_user').innerHTML = 'This account is already registered!';
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
    return false;
};
function checkPhoneNumber(number) {
    let validRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (number.match(validRegex))
    {
        for (let i = 0; i < listUser.length; i++) {
            if (number === listUser[i].username) {
                document.getElementById('validate_user').innerHTML = 'This account is already registered!';
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
    return false;
}
function checkPass(pass) {
    let validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (pass.match(validRegex))
    {
        return true;
    }
    return false;
}