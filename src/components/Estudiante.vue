<template>
    <div class="container">
        <label for="id_nombre">Nombre:</label>
        <!-- Directiva v-model: input se vincula a la propiedad reactiva -->
        <!-- MVC: el modelo es el texto, y el controlador es el JS -->
        <!-- sale del input (V), (el texto)(M), va al JS y este actualiza el input (C) -->
        <input v-model="nuevoNombre" id="id_nombre" type="text">
        <label for="id_apellido">Apellido:</label>
        <input v-model="nuevoApellido" id="id_apellido" type="text">

        <div class="double_input">
            <div>

                <label for="id_edad">Edad:</label>
                <input v-model="nuevaEdad" id="id_edad" type="number">
            </div>
            <div>

                <label for="id_genero">Genero:</label>
                <input v-model="nuevoGenero" id="id_genero" type="text">
            </div>
        </div>

        <label for="id_mascota">Mascota:</label>
        <input v-model="nuevaMascota" id="id_mascota" type="text">

        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
        <h2>
            {{ nuevaCedula }}
            {{ nuevoAnio }}
            {{ nuevoMes }}

        </h2>
        <p>
            {{ nuevoNombre }}
            {{ nuevoApellido }}
            {{ nuevoGenero }}
            {{ nuevaEdad }}
            {{ nuevaMascota }}

        </p>
        <ul>
            <li v-for="{ nombre, apellido, genero, edad, mascota } in lista" :key="nombre">{{ nombre }} - {{ apellido }}
                - {{ genero }} - {{ edad }} - {{ mascota }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nuevoNombre: 'Emil',
            nuevoApellido: 'Verkade',
            nuevoGenero: 'Masculino',
            nuevaEdad: 23,
            nuevaMascota: 'clotilda la gallina',
            nuevaCedula: 'cedula',
            nuevoAnio: '',
            nuevoMes: '',
            lista: [
                { nombre: 'Emil', apellido: 'Verkade', edad: 23, genero: 'Masculino', mascota: 'Cevichocho' },
                { nombre: 'Mat', apellido: 'Gomez', edad: 23, genero: 'Masculino', mascota: 'Cevichocho' },
                { nombre: 'Ren', apellido: 'Parra', edad: 23, genero: 'Masculino', mascota: 'Cevichocho' },
                { nombre: 'Kev', apellido: 'Andrade', edad: 23, genero: 'Masculino', mascota: 'Cevichocho' },
                { nombre: 'Jos', apellido: 'Teran', edad: 23, genero: 'Masculino', mascota: 'Cevichocho' },

            ],
        }
    },
    mounted() {
        this.obtenerPathVariable()
    }
    ,

    methods: {
        agregarEstudiante() {
            const nuevo = {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                edad: this.nuevaEdad,
                genero: this.nuevoGenero,
                mascota: this.nuevaMascota,
            }
            this.lista.unshift(nuevo);
            this.obtenerPathVariable()
        },
        obtenerPathVariable() {
            const cedula = this.$route.params.cedula;
            this.nuevaCedula = cedula

            const requestParam = this.$route.query.anio;
            const requestParam2 = this.$route.query.mes;
            this.nuevoAnio = requestParam
            this.nuevoMes = requestParam2

            console.log(requestParam)
            console.log(requestParam2)

        }

    }

}
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

ul {
    list-style: none;
    margin-top: 30px;
}

li {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 5px;
    color: #333;
    font-size: small;
    font-weight: bolder;

}
</style>
