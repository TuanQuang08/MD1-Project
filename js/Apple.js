class Apple {
    name;
    detail;
    price;
    img;
    constructor(name,detail,price,img) {
        this.name = name;
        this.detail = detail;
        this.price = price;
        this.img = img;
    }

    setName(name) {
        return this.name = name;
    }
    getName(){
        return this.name;
    }
    setDetail(detail) {
        return this.name = detail;
    }
    getDetail(){
        return this.detail;
    }
    setPrice(price) {
        return this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setImg(img) {
        return this.img = img;
    }
    getImg(){
        return this.img;
    }
}