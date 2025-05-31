<template>
  <!--
  modelo
  anio
  marca
  color
  kilometraje
    -->
  <div class="container">
    <div class="form-container">
      <h1 class="form-title">Nuevo Auto</h1>
      <h1 class="form-title" v-if="mensajeFinal">{{ mensajeFinal }}</h1>
      <div class="form-item">
        <label for="id_modelo">Modelo:</label>
        <span v-if="mensaje.modelo">{{ mensaje.modelo }}</span>
        <input v-model="modelo" id="id_modelo" type="text" />
      </div>

      <div class="form-item">
        <label for="id_anio">Año:</label>
        <span v-if="mensaje.anio">{{ mensaje.anio }}</span>
        <input v-model="anio" id="id_anio" type="number" />
      </div>

      <div class="form-item">
        <label for="id_marca">Marca:</label>
        <input v-model="marca" id="id_marca" type="text" />
      </div>

      <div class="form-item">
        <label for="id_color">Color:</label>
        <input v-model="color" id="id_color" type="text" />
      </div>

      <div class="form-item">
        <label for="id_kilometraje">Kilometraje:</label>
        <input v-model="kilometraje" id="id_kilometraje" type="number" />
      </div>
      <div></div>
      <div class="button-container">
        <button @click="enlistarCarro()">Agregar</button>
      </div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Año</th>
            <th>Marca</th>
            <th>Color</th>
            <th>Kilometraje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="carro in listaCarros" :key="carro.modelo">
            <td>{{ carro.modelo }}</td>
            <td>{{ carro.anio }}</td>
            <td>{{ carro.marca }}</td>
            <td>{{ carro.color }}</td>
            <td>{{ carro.kilometraje }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelo: null,
      anio: null,
      marca: "Toyota",
      color: "Rojo",
      kilometraje: 0,
      anioMensaje: false,
      modeloMensaje: false,
      mensajeFinal: null,
      mensaje: {
        modelo: null,
        anio: null
      },
      listaCarros: [
        {
          modelo: "Sentra",
          anio: 2018,
          marca: "Nissan",
          color: "Vino",
          kilometraje: 80000,
        },
      ],
    };
  },
  methods: {
    enlistarCarro() {
      if (this.validarEntrada() === 0) {
        this.listaCarros.push({
          modelo: this.modelo,
          anio: this.anio,
          marca: this.marca,
          color: this.color,
          kilometraje: this.kilometraje,
        });
        this.limpiarPagina();
      }
    }, limpiarPagina() {
      this.modelo = null;
      this.anio = null;
      this.marca = null;
      this.color = null;
      this.kilometraje = null;
    },
    validarEntrada() {
      try {
        // let a = this.mendfgdfgdfgsaje.gdsfgsdf;
        let num = 2;
        if (this.modelo === null) {
          this.mensaje.modelo = 'Nombre es obligatorio'
          num--;
        }
        if (this.anio === null) {
          this.mensaje.anio = 'Anio es obligatorio'
          num--;
        }
        return (num === 0);

      } catch (error) {
        console.log('Ha ocurrido un problema')
        this.mensajeFinal = 'Ha ocurrido un error'
      } 
    }
  },
  computed: {
    botonDeshabilitado() {
      return !this.modelo || !this.anio;
    }
  }
};
</script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 80%;
}

table {
  width: 100%;
  border-spacing: 0;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  border: solid 1px lightseagreen;
}

thead {
  background-color: lightseagreen;
}

th {
  padding: 4px;
  color: aliceblue;
}

td {
  padding: 4px;
}

.form-title {
  /* display: grid; */
  grid-column: span 2;
}

span {
  background-color: darkred;
  color: aliceblue;
  border-radius: 20px;
  padding: 5px;
  margin: 4px;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 20px;
  border-radius: 50px;
  border: solid 2px lightseagreen;
}

h1 {
  color: darkcyan;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form-item {
  display: block;
  justify-content: left;
  margin-bottom: 12px;
  padding: 8px;
}

label {
  display: block;
  text-align: left;
  padding: 8px;
  font-size: large;
  font-weight: bold;
}

input {
  display: flex;
  margin-bottom: 12px;
  padding: 8px 16px;
  border-radius: 12px;
  border: solid 2px lightseagreen;
  font-size: medium;
}

.button-container {
  display: grid;
  grid-column: span 2;
  justify-content: center;
}

button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

button {
  background: darkcyan;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: larger;
  font-weight: bold;
  padding: 20px 40px;
  /* max-width: 50%; */
}

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
