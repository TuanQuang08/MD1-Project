const checkEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
    {
        return true;
    }
    return false;
};
function checkPhoneNumber(number) {
    let validRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (number.match(validRegex))
    {
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
function register() {
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let confirm = document.getElementById('confirmpassword').value;

    if(username !== '' || pass !== '' || confirm !== ''){
        if(checkEmail(username) || checkPhoneNumber(username)){
            if (checkPass(pass)){
                if(pass === confirm){
                    localStorage.setItem('username',username);
                    localStorage.setItem('pass',pass);
                    alert("Đăng kí thành công!!!");
                    window.location.href = "login.html";
                }else {
                    alert("Xác nhận mật khẩu không đúng.")
                }
            }else{
                alert("Mật khẩu không đúng");
            }
        }else{
            alert("Tên đăng nhập không phù hợp");
        }
    }
}