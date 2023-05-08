// Thông số product
let detail = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n' +
    '                        Labore animi voluptatum, odio sed libero ipsa?'
let iphone14_256 = new Apple('Iphone 14 256GB', detail, '$999', 'img/t_m_12.png');
let iphone14_128 = new Apple('Iphone 14 128GB', detail, '$899', 'img/v_ng_20.png');
let iphone13_128 = new Apple('Iphone 13 128GB', detail, '$799', 'img/14_1_9_2_9.jpg');
let iphone12_128 = new Apple('Iphone 12 128GB', detail, '$699', 'img/t_m_12.png');
let arrProduct = [iphone14_256, iphone14_128, iphone13_128, iphone12_128];

// Hàm xuất product lên HTML
function ShowProduct() {
    let data = '';
    for (let i = 0; i < arrProduct.length; i++) {
        data += `<div class="item" data-key="${i + 1}">
                <div class="img">
                    <img src="${arrProduct[i].img}" alt="">
                </div>
                <div class="content">
                    <div class="title">${arrProduct[i].name}</div>
                    <div class="des">
                        ${arrProduct[i].detail}
                    </div>
                    <div class="price">${arrProduct[i].price} <span class="countproduct"></span></div>
                    <button class="add" onclick="Add(${i + 1})">Add to cart</button>
                    <button class="remove" onclick="Remove(${i + 1})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`;
    }
    document.getElementById('listID').innerHTML = data;
}


// Hàm Add item vào CART
function Add(key) {
    let item = document.querySelectorAll('.item')[key-1];
    let itemNew = item.cloneNode(true);

    let count = 0;
    let checkIphone = false;
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(cart => {
        // Cập nhật count khi trùng item trong cart
        if (cart.getAttribute('data-key') === itemNew.getAttribute('data-key')) {
            checkIphone = true;
            let cartCount = parseInt(cart.getAttribute('data-count'));
            cart.setAttribute('data-count', cartCount + 1);
            count = cart.getAttribute('data-count');
            cart.querySelector('.countproduct').innerHTML = `x${count}`;
        }
    });
    if (!checkIphone) {
        //Thêm attribute data-count đếm số lượng
        itemNew.setAttribute('data-count', 1);
        document.querySelector('.listCart').appendChild(itemNew);
    }
    Total();
}

// Hàm Remove item trong CART
function Remove(key) {
    let listCart = document.querySelectorAll('.listCart .item');
    listCart.forEach(item => {
        if (item.getAttribute('data-key') == key) {
            item.remove();
            Total();
            return;
        }
    });
}

// Hàm tính tổng tiền
function Total() {
    let sum = 0;
    let list = document.querySelectorAll('.listCart .item');
    //Khi không còn item trong list
    if (list.length === 0) {
        return document.querySelector('#total').innerHTML = "$0";
    }

    list.forEach(item => {
        let productPrice = parseInt(item.querySelector('.price').textContent.replace('$', ''));
        let count = parseInt(item.getAttribute('data-count'));
        sum += productPrice * count;
        document.querySelector('#total').innerHTML = "$" + sum;
    })
}

// Hàm check login
function LoginCheck() {
    let username = document.getElementById('username');
    let loginBtn = document.getElementById("login");
    let logoutBtn = document.getElementById("logout");
    if(localStorage.getItem("username")){
        username.innerHTML = "Hello, " + localStorage.getItem("username");
        logoutBtn.style.display = 'inline-block';
        loginBtn.style.display = 'none';
    }else {
        loginBtn.style.display = 'inline-block';
        username.style.display = 'none';
        logoutBtn.style.display = 'none';
    }

}
function Logout() {
    let username = document.getElementById('username');
    let loginBtn = document.getElementById("login");
    let logoutBtn = document.getElementById("logout");
    localStorage.removeItem('username');
    localStorage.removeItem('pass');
    loginBtn.style.display = 'inline-block';
    username.style.display = 'none';
    logoutBtn.style.display = 'none';
}

// Hàm pop-up thanh toán
function Pay() {
    let loginBtn = document.getElementById("login");
    if(loginBtn.style.display == 'inline-block'){
        alert("Bạn chưa đăng nhập!!!");
        return;
    }
    let popup = document.getElementById('popup');
    let overlay = document.getElementById('overlay');
    let total = document.getElementById('total').innerHTML;
    // console.log(total);
    document.getElementById('total_pay').innerHTML = total;

    popup.classList.add("popup_open");
    overlay.classList.add("overlay_open");

}
// Thoát pop-up
function ClosePay() {
    let popup = document.getElementById('popup');
    let overlay = document.getElementById('overlay');
    popup.classList.remove("popup_open");
    overlay.classList.remove("overlay_open");
}