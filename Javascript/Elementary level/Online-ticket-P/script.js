// یک سامانه فروش بلیط آنلاین پیاده سازی کنید

// به این صورت که مبدا سفر (استان) را از کاربر دریافت کرده و سپس شهر های استان وارد شده را در کنسول نمایش دهید

// ساختار پروژه و ذخیره سازی اطلاعات بر عهده شما

let userCity = prompt("Enter your  City : ");
let province = {
  Tehran: ["Vramin", "Eslam-Shahr", "Rey"],
  Esfahan: ["Kashan", "Shahr-Reza", "Golpayegan"],
  Kerman: ["Bam", "Baft", "Rafsanjan"],
  Araq: ["Saveh", "Khimain", "Delijan"],
  Elam: ["Evan", "Mehran", "Badre"],
};

let citiesProvince = province[userCity];

citiesProvince.forEach(function (province) {
  console.log(province);
});
