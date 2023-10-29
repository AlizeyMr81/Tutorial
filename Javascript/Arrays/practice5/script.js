// یک پروژه فروشگاه آنلاین پیاده سازی کنید

// به این صورت که یک آرایه به عنوان سبد خرید کاربر در نظر بگیرید که 6 محصول به طور دیفالت دارد

// سیاست کاری فروشگاه به این شکل است که برای محصولاتی که بالای 100 هزار تومان باشند، از مشتری هزینه پست دریافت نمی شود

// اما محصولاتی که زیر 100 هزار تومان قیمت داشته باشند، برای هر کدام 1000 تومان هزینه ارسال (هزینه پست) دریافت میشه

// لطفا قیمت کل سبد خرید را همراه با هزینه پست محاسبه کرده و به کاربر نمایش دهید

let totalPrice = [];
let sum = 0;
let shoppingCart = [
  { id: 1, name: "iphone 13 pro max", price: 120000 },
  { id: 2, name: "Nick T-shirt", price: 80000 },
  { id: 3, name: "Adidas shoes", price: 50000 },
  { id: 4, name: "LG monitor", price: 175000 },
  { id: 5, name: "laptop", price: 2000000 },
  { id: 7, name: "Milk", price: 85000 },
];

let filteredPrice = shoppingCart.filter(function (product) {
  return product.price < 100000;
});

let whitPostage = filteredPrice.length * 1000;

shoppingCart.forEach(function (prices) {
  sum = sum + prices.price;
});

totalPrice = sum + whitPostage;

console.log(shoppingCart);
console.log(
  "The total price of your shopping cart whit postage : ",
  totalPrice
);
