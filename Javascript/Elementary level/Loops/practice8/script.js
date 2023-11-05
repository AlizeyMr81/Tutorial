// فرض کنید یک وب سایت فروشگاهی دارید که کاربر 5 محصول از فروشگاه را انتخاب کرده است

// قیمت 5 محصول را از کاربر گرفته و مجموع مبلغ کل سبد خرید رو نمایش دهید

// let totalPriceShoppingCart = 0;

// for (let price = 1; price < 6; price++) {
//   let shoppingCart = +prompt("Enter the price of your five purchases");

//   if (shoppingCart === 0) {
//     break;
//   } else {
//     totalPriceShoppingCart += shoppingCart;
//   }
// }

// alert("Total price shopping cart : " + totalPriceShoppingCart);

//////////////////////////////////////////////////////////////////////////////////

// از کاربر 5 عدد را دریافت کرده و میانگین آن ها را به کاربر نمایش دهید

let totalNumber = 0;

for (let average = 0; average < 5; average++) {
  totalNumber += +prompt("Enter your " + "number " + (average + 1));
}

let totalAverage = totalNumber / 5;

alert(totalAverage);

