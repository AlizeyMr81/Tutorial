let $ = document;
let srcBgi = [
  'url("../../images/sky.jpg")',
  'url("../../images/AQLQZUCO3FKSTHLXOSYDHJ2NHE.avif")',
  'url("../../images/ASpot_Weather.jpg")',
  'url("../../images/best_camera_settings_for_snowy_landscapes.jpg")',
  'url("../../images/fortuneindia_2022-05_b0f5f71c-ef41-4c8d-bd2c-bf369fdd11ba_gettyimages_1240881480_594x594.webp")',
];
let divLoadingElem = $.querySelector(".loading");
let divContentElem = $.querySelector(".content");
let btn = $.querySelector(".btn");
let input = $.querySelector(".input");
let spanAlert = $.querySelector(".alert");
let weatherData = [
  {
    city: "Tehran",
    degree: 45,
    icon: "<i class='bi bi-cloud-fog2'></i>",
    status: "Windy",
    humidity: "24%",
    windS: "32km/h",
  },
  {
    city: "Shiraz",
    degree: 31,
    icon: "<i class='bi bi-brightness-high'></i>",
    status: "Sunny",
    humidity: "14%",
    windS: "15km/h",
  },
  {
    city: "Kerman",
    degree: 18,
    icon: "<i class='bi bi-cloud-sun'></i>",
    status: "Cloudy",
    humidity: "34%",
    windS: "10km/h",
  },
  {
    city: "Rasht",
    degree: 10,
    icon: "<i class='bi bi-cloud-drizzle'></i>",
    status: "Rainy",
    humidity: "37%",
    windS: "15km/h",
  },
  {
    city: "Mashhad",
    degree: 5,
    icon: "<i class='bi bi-cloud-snow'></i>",
    status: "Snowy",
    humidity: "32%",
    windS: "18km/h",
  },
  {
    city: "Elam",
    degree: 26,
    icon: "<i class='bi bi-cloud-fog2'></i>",
    status: "windy",
    humidity: "15%",
    windS: "45km/h",
  },
  {
    city: "Tabriz",
    degree: -5,
    icon: "<i class='bi bi-cloud-snow'></i>",
    status: "Snowy",
    humidity: "22%",
    windS: "13km/h",
  },
  {
    city: "Yazd",
    degree: 28,
    icon: "<i class='bi bi-brightness-high'></i>",
    status: "Sunny",
    humidity: "29%",
    windS: "17km/h",
  },
];

btn.addEventListener("click", function () {
  let index = Math.trunc(Math.random() * 6);
  $.body.style.backgroundImage = srcBgi[index];
  divLoadingElem.style.display = "none";
  divContentElem.style.display = "flex";
  spanAlert.style.display = "none";
  let objCity = weatherData.find(function (obj) {
    return obj.city === input.value;
  });
  if (objCity) {
    $.querySelector(".title").innerHTML = "Weather in" + " " + objCity.city;
    $.querySelector(".degree").innerHTML = objCity.degree + "C";
    $.querySelector(".status").innerHTML = objCity.icon + objCity.status;
    $.querySelector(".humidity").innerHTML = "Humidity : " + objCity.humidity;
    $.querySelector(".wind").innerHTML = "Wind speed : " + objCity.windS;
  } else {
    divContentElem.style.display = "none";
    spanAlert.style.display = "block";
  }
});
