<template>
    <div class="container">
        <img v-if="imagen" :src="imagen" alt="No hubo ese placeholder" srcset="">
        <div class="container-2">

        </div>
        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
            <p>Recuerda terminar con el signo de pregunta '?'</p>
            <div v-if="esValida"></div>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
        </div>
    </div>
</template>

<script>
import { consultarFachada } from '@/clients/YesNoClient'

export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            imagen: null,
            esValida: null,
        }
    },
    watch: {
        pregunta(value, oldValue) {
            this.esValida = false;
            if (value.endsWith('?')) {
                console.log('Actual: ' + value)
                console.log('Old: ' + oldValue)
                console.log(this.consumirAPI())
            }
        }
    },
    methods: {
        async consumirAPI() {
            const resp = await consultarFachada();
            console.log(resp);
            console.log(resp.image);
            console.log(resp.test);
            console.log(resp.forced);
            this.respuesta = resp.answer;
            this.imagen = resp.image;
        }
    },
    // para consumir un api, hay que tener un cliente
    // UNA API POR DOMINIO DE NEGOCIO
    mounted() {

    }

}
</script>

<style scoped>
.container-2,
img {
    /* todo el ancho y todo el alto*/
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    /* como si fuera una marca de agua */
    position: fixed;
    left: 0px;
    top: 20%;
}

.container-2 {
    background-color: rgba(0, 0, 0, 0.5);

}

input {
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    width: 250px;
    margin-top: 30%;

}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: large;
}

h1,
h2 {
    color: #fff;
}

h2 {
    margin-top: 100px;
}

.pregunta-container {

    position: relative;
    /* color: #fff; */
}
</style>