// پروژه ای بنویسین که کد کپچای 5 رقمی به صورت تصادفی تولید کند

let randomNumber = Math.random() * 100000;

let captChaCode = Math.floor(randomNumber);

console.log("Your captcha code : " , captChaCode);
