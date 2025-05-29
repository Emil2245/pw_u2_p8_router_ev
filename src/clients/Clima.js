import axios from "axios";

const countriesNowBase = "https://countriesnow.space/api/v0.1/countries";
const weatherApiBase = "https://api.open-meteo.com/v1/forecast";
const nominatimBase = "https://nominatim.openstreetmap.org/search";

export const consultarPaises = async () =>
  await axios
    .get(`${countriesNowBase}/positions`)
    .then((response) => response.data.data.map((country) => country.name))
    .catch((error) => console.log(error));

export const consultarCiudadesPorPais = async (country) =>
  await axios
    .post(`${countriesNowBase}/cities`, {
      country,
    })
    .then((response) => response.data.data)
    .catch((error) => console.log(error));

export const consultarClimaPorCoordenadas = async (lat, lon) =>
  await axios
    .get(`${weatherApiBase}`, {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
      },
    })
    .then((response) => response.data.current_weather)
    .catch((error) => console.log(error));

export const consultarCoordsPorCiudad = async (city) =>
  await axios
    .get(`${nominatimBase}`, {
      params: {
        q: city,
        format: "json",
        limit: 1,
      },
    })
    .then((response) => {
      if (response.data.length > 0) {
        return {
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        };
      }
      return null;
    })
    .catch((error) => console.log(error));
