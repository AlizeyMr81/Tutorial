let $ = document;
let countrySelect = $.querySelector("#country");
let citiesSelect = $.querySelector("#cities");

let ticketData = {
  Iran: ["Tehran", "Shiraz", "Mashhad", "Kerman", "Rasht"],
  USA: ["Athens", "Decatur", "California", "Hawaii", "New York"],
  Canada: ["Toronto", "Montréal", "Vancouver", "Ottawa"],
};

countrySelect.addEventListener("change", function () {
  if (countrySelect.value === "Please Select") {
    citiesSelect.innerHTML = "";
    citiesSelect.innerHTML += "<option>Select City ...</option>";
  } else {
    citiesSelect.innerHTML = "";
    ticketData[countrySelect.value].forEach(function (city) {
      citiesSelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
