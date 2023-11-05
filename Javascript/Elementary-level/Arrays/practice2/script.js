// یک فروشگاه آنلاین پیاده سازی کنید

// به این شکل که محصولات فروشگاه خود را در دیتابیسی ذخیره کرده (آرایه) و آرایه ای برای سبد خرید کاربر داشته باشید
// و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد ، دریافت کنید

// اگر محصول درخواستی کاربر در انبار فروشگاه شما موجود بود، آن را به سبد خرید کاربر اضافه کنید
// و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
// و در غیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید

// :نکات قابل توجه
// بعد از اضافه محصول به سبد خرید کاربر، سبد را در کنسول نمایش دهید
// به طور دیفالت 3 محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد

let userProducts = prompt("Enter your products : ");
let sum = 0;

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

let productsInventory = storeProducts.some(function (item) {
  if (item.name == userProducts) {
    shoppingCart.push(item);
    console.log(shoppingCart);
    return true;
  }
});

shoppingCart.forEach(function (prices) {
  sum = sum + Number(prices.price);
});

if (productsInventory) {
  console.log(sum);
} else {
  console.log("End of inventory of the desired item");
}
