class Weather {
  constructor(city, state) {
    this.key = "e4d6a5fcf104c6df3bf69f492262b98c";
    this.city = city;
    this.state = state;
  }

  async getLocation() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
