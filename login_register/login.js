function login(){
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    if(username !== '' || pass !== ''){
        if(username === localStorage.getItem('username') && pass === localStorage.getItem('pass')){
            window.location.href = '../index.html';
        }else{
            alert("Sai tên tài khoản hoặc mật khẩu");
        }
    }
}