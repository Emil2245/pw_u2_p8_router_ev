<template>
  <div class="container">
    <!-- v-if construye el elemento -->
    <div v-if="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <!-- v-show lo oculta o lo muestra -->
    <div v-show="mostrar">
      <h2>Estudiante Guardado</h2>
    </div>

    <!-- Directiva v-model: input se vincula a la propiedad reactiva -->
    <!-- MVC: el modelo es el texto, y el controlador es el JS -->
    <!-- sale del input (V), (el texto)(M), va al JS y este actualiza el input (C) -->

    <label for="id_id">ID del Estudiante a consultar:</label>
    <input v-model="id" id="id_id" type="text" />

    <button v-on:click="consultarEstudianteId()">Consultar Estudiante</button>

    <div v-if="mostrar" class="resultado">
      <h3>Datos del Estudiante:</h3>
      <p><strong>Nombre:</strong> {{ nombre }}</p>
      <p><strong>Apellido:</strong> {{ apellido }}</p>
      <p><strong>Fecha de Nacimiento:</strong> {{ fechaNacimiento }}</p>
    </div>
  </div>
</template>

<script>
  import { consumirEstudiantePorIdFachada } from "@/clients/EstudianteClient.js";
  export default {
    data() {
      return {
        id: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        mostrar: false,
      };
    },
    methods: {
      async consultarEstudianteId() {
        try {
          const data = await consumirEstudiantePorIdFachada(this.id);
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.fechaNacimiento = data.fechaNacimiento?.split("T")[0] || "";
          this.mostrar = true;
        } catch (error) {
          console.error("Error al consultar estudiante:", error);
          this.mostrar = false;
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    background: #eee;
    border: 2px solid;
    border-radius: 12px;
    max-width: 800px;
    margin: 50px auto;
    /* fake center */
    padding: 30px;
  }

  label {
    display: block;
    color: #333;
    text-align: left;
    padding: 5px;
    font-size: large;
    font-weight: bold;
  }

  input {
    background: #4e91f9;
    color: white;
    border: border 1px #ddd;
    padding: 8px 15px;
    border-radius: 10px;
    width: auto;
    min-width: 85%;
    margin-bottom: 5px;
  }

  .double_input {
    display: grid;
    grid-template-columns: auto auto;
  }

  input:enabled {
    border: none;
  }

  * {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  button {
    background: lightseagreen;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    margin: 10px auto;
  }

  table {
    /* border-collapse: separate; */
    border-spacing: 0;
    list-style: none;
    margin-top: 30px;
    min-width: 80%;
    margin: auto auto;
  }

  thead {
    border: none;
    border-radius: 100px;
    margin-bottom: 5px;
    color: #333;
    font-size: normal;
    font-weight: bolder;
    border: #333;
  }

  th {
    border-radius: 20px;
    background-color: #ddd;
  }

  td {
    background: #f8f9fa;
    border-radius: 5px;
    border: 1px solid lightblue;
  }

  /* table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
 
thead {
  background-color: #f4f6f8;
}
 
thead th {
  text-align: left;
  padding: 15px;
  color: #333;
  font-weight: 600;
  border-bottom: 2px solid #e3e6ea;
}
 
tbody tr {
  transition: background-color 0.2s;
}
 
tbody tr:nth-child(even) {
  background-color: #f9fafb;
}
 
tbody tr:hover {
  background-color: #eef3f9;
}
 
tbody td {
  padding: 15px;
  border-bottom: 1px solid #e3e6ea;
  color: #444;
} */
</style>
