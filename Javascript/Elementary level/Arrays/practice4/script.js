// پروژه فروشگاه را در نظر بگیرید

// محصولات فروشگاه را داخل آرایه ای ذخیره کرده و آرایه ای برای سبد خرید در نظر بگیرید
// و داخل سبد خرید 3 محصول بطور دیفالت قرار دهید

// منویی را به کاربر نمایش دهید که شامل 2 گزینه است
// گزینه ای برای حذف محصول از سبد خرید
// و گزینه ای برای اضافه کردن محصول به سبد خرید

// عملیات لازم برای هر گزینه را پیاده سازی کنید

alert(`
1. Remove product
2. Add product`);
let userOption = +prompt("Enter your option");
let productIndex = 0;
let checkProducts = 0;

let storeProducts = [
  { id: 1, name: "iphone 13 pro max", price: "120000" },
  { id: 2, name: "Nick T-shirt", price: "80000" },
  { id: 3, name: "Adidas shoes", price: "50000" },
  { id: 4, name: "LG monitor", price: "175000" },
  { id: 5, name: "laptop", price: "2000000" },
  { id: 6, name: "Bicycle", price: "500000" },
  { id: 7, name: "PS5", price: "2500000" },
];
let shoppingCart = [
  { id: 1, name: "iphone 13 pro max", price: "120000" },
  { id: 2, name: "Nick T-shirt", price: "80000" },
  { id: 3, name: "Adidas shoes", price: "50000" },
];

// if (userOption === 1) {
//   let productRemove = prompt("Write your product name for remove");
//   productIndex = shoppingCart.findIndex(function (product) {
//     return product.name === productRemove;
//   });
//   if (productIndex === -1) {
//     alert("There is no such product in your shopping cart");
//   } else {
//     shoppingCart.splice(productIndex, 1);
//     console.log(shoppingCart);
//   }
// } else if (userOption === 2) {
//   let productAdd = prompt("Write your product name for add");
//   productIndex = storeProducts.findIndex(function (newProduct) {
//     return newProduct.name === productAdd;
//   });
//   checkProducts = storeProducts.some(function (checkProduct) {
//     if (checkProduct === storeProducts[productIndex]) {
//       shoppingCart.splice(3, 0, checkProduct);
//       console.log(shoppingCart);
//       return true;
//     }
//   });
// } else {
//   alert("Please enter correct option");
// }
// if (checkProducts === false) {
//   alert("End of inventory of the product you need");
// }

switch (userOption) {
  case 1:
    let productRemove = prompt("Write your product name for remove");
    productIndex = shoppingCart.findIndex(function (product) {
      return product.name === productRemove;
    });
    if (productIndex === -1) {
      alert("There is no such product in your shopping cart");
    } else {
      shoppingCart.splice(productIndex, 1);
      console.log(shoppingCart);
    }
    break;
  case 2:
    let productAdd = prompt("Write your product name for add");
    productIndex = storeProducts.findIndex(function (newProduct) {
      return newProduct.name === productAdd;
    });
    checkProducts = storeProducts.some(function (checkProduct) {
      if (checkProduct === storeProducts[productIndex]) {
        shoppingCart.splice(3, 0, checkProduct);
        console.log(shoppingCart);
        return true;
      }
    });
    break;
  default:
    alert("Please enter correct option");
}

switch (checkProducts) {
  case false:
    alert("End of inventory of the product you need");
}
