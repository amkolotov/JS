'use strict'

function Product (name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price / 100 * 25);
}

class NewProduct {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price = this.price - (this.price /100 * 25);
    }
}

const product = new Product('product', 100);
console.log(product.name + ': ' + product.price);
product.make25PercentDiscount();
console.log(product.name + ': ' + product.price);

const newProduct = new NewProduct('newProduct', 200);
console.log(newProduct.name + ': ' + newProduct.price);
newProduct.make25PercentDiscount();
console.log(newProduct.name + ': ' + newProduct.price);