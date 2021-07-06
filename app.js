const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener("DOMContentLoaded", getWeather);
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  getWeather();
  $("#locModal").modal("hide");
});
// weather.changeLocation("Agra", "Uttar Pradesh");
function getWeather() {
  weather
    .getLocation()
    .then((data) => {
      ui.showLocation(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
