const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=df068488d50806af9aa5c1257bb7128f&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";

    const url = "http://api.weatherstack.com/current?access_key=df068488d50806af9aa5c1257bb7128f&query=" + latitude + "," + longitude + "&units=f"

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          " It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;

