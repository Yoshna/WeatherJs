class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.dec = document.getElementById("w-dec");
    this.string = document.getElementById("w-string");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feelslike = document.getElementById("w-feelslike");
    this.wind = document.getElementById("w-wind");
  }

  showLocation(weather) {
    console.log(weather);
    this.location.textContent = weather.name;
    this.dec.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.dewpoint.textContent = `Visibility: ${weather.visibility}`;
    this.feelslike.textContent = `Feels like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
