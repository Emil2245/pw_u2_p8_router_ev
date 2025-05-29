<template>
  <div class="container">
    <h1 class="title">Consulta el Clima</h1>
    <p class="subtitle">
      Selecciona un país y una ciudad para ver el clima actual.
    </p>
    <label>País:</label>
    <select v-model="pais" @change="onCountryChange">
      <option disabled value="">Selecciona un país</option>
      <option v-for="country in listaPaises" :key="country" :value="country">
        {{ country }}
      </option>
    </select>

    <label>Ciudad:</label>
    <select v-model="ciudad">
      <option disabled value="">Selecciona una ciudad</option>
      <option v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </option>
    </select>

    <button @click="getWeather" :disabled="!ciudad">Buscar Clima</button>

    <div v-if="clima">
      <h2>Clima en {{ ciudad }}</h2>
      <p>Temperatura: {{ clima.temperature }} °C</p>
      <p>Viento: {{ clima.windspeed }} km/h</p>
    </div>
  </div>
</template>

<script>
  import {
    consultarPaises,
    consultarCiudadesPorPais,
    consultarCoordsPorCiudad,
    consultarClimaPorCoordenadas,
  } from "@/clients/Clima.js";

  export default {
    data() {
      return {
        listaPaises: [],
        cities: [],
        pais: "",
        ciudad: "",
        clima: null,
      };
    },
    async mounted() {
      this.listaPaises = await consultarPaises();
    },
    methods: {
      async onCountryChange() {
        this.ciudad = "";
        this.cities = await consultarCiudadesPorPais(this.pais);
      },
      async getWeather() {
        const coords = await consultarCoordsPorCiudad(
          `${this.ciudad}, ${this.pais}`
        );
        if (!coords) {
          return;
        }
        this.clima = await consultarClimaPorCoordenadas(coords.lat, coords.lon);
      },
    },
  };
</script>
<style scoped>
  .container {
    max-width: 50%;
    margin: 10% auto;
    padding: 10%;
    background-color: #eee;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 0px;
    color: black;
  }

  label {
    display: block;
    /* margin: 1rem 0 0.5rem; */
    margin: 8px 0;
    font-weight: bold;
    color: darkslategray;
  }

  select {
    width: 100%;
    padding: 0.6rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    transition: border-color 0.3s;
  }

  select:focus {
    border-color: #007bff;
    outline: none;
  }

  button {
    margin-top: 16px;
    width: 100%;
    padding: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    font-size: large;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  button:hover:enabled {
    background-color: #0056b3;
  }

  h2 {
    margin-top: 2rem;
    color: #333;
    font-size: 1.4rem;
  }

  p {
    margin: 8px 0;
    color: #444;
  }
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
