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

    <label for="id_nombre">Nombre:</label>
    <!-- Directiva v-model: input se vincula a la propiedad reactiva -->
    <!-- MVC: el modelo es el texto, y el controlador es el JS -->
    <!-- sale del input (V), (el texto)(M), va al JS y este actualiza el input (C) -->
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <div class="double_input">
      <div>
        <label for="id_edad">Edad:</label>
        <input v-model="nuevaEdad" id="id_edad" type="number" />
      </div>
      <div>
        <label for="id_genero">Genero:</label>
        <input v-model="nuevoGenero" id="id_genero" type="text" />
      </div>
    </div>

    <label for="id_mascota">Mascota:</label>
    <input v-model="nuevaMascota" id="id_mascota" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
    <p>
      {{ nuevoNombre }}
      {{ nuevoApellido }}
      {{ nuevoGenero }}
      {{ nuevaEdad }}
      {{ nuevaMascota }}
    </p>
    <table>
      <thead>
        <tr id="table">
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Genero</th>
          <th>Edad</th>
          <th>Mascota</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, genero, edad, mascota } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ genero }}</td>
          <td>{{ edad }}</td>
          <td>{{ mascota }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nuevoNombre: "Emil",
        nuevoApellido: "Verkade",
        nuevoGenero: "Masculino",
        nuevaEdad: 23,
        nuevaMascota: "clotilda la gallina",
        lista: [
          {
            nombre: "Emil",
            apellido: "Verkade",
            edad: 23,
            genero: "Masculino",
            mascota: "Cevichocho",
          },
          {
            nombre: "Mat",
            apellido: "Gomez",
            edad: 23,
            genero: "Masculino",
            mascota: "Cevichocho",
          },
          {
            nombre: "Ren",
            apellido: "Parra",
            edad: 23,
            genero: "Masculino",
            mascota: "Cevichocho",
          },
          {
            nombre: "Kev",
            apellido: "Andrade",
            edad: 23,
            genero: "Masculino",
            mascota: "Cevichocho",
          },
          {
            nombre: "Jos",
            apellido: "Teran",
            edad: 23,
            genero: "Masculino",
            mascota: "Cevichocho",
          },
        ],
        mostrar: false,
      };
    },
    methods: {
      agregarEstudiante() {
        const nuevo = {
          nombre: this.nuevoNombre,
          apellido: this.nuevoApellido,
          edad: this.nuevaEdad,
          genero: this.nuevoGenero,
          mascota: this.nuevaMascota,
        };
        this.lista.unshift(nuevo);
        this.mostrar = true;
        // this.limpiar();
        setTimeout(() => {
          this.mostrar = false;
        }, 3000);
      },
      limpiar() {
        this.nuevoNombre = "";
        this.nuevoApellido = "";
        this.nuevaEdad = 0;
        this.nuevoGenero = "";
        this.nuevaMascota = "";
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
