<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="doble_fila">
            <div>
                <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado() }}</p>

            </div>
            <div>
                <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>
                <p>{{ numero }}<sup>2</sup>={{ calCuadrado }}</p>

            </div>
        </div>
        <!--
        directivas permiten gestionar eventos en la pagina web
        comienzan con 'v-' -->
        <div>
            <button v-on:click="incrementar()">+1</button>
            <button @click="decrementar()">-1</button>
        </div>
        <!-- <p>{{ numero }}<sup>2</sup>={{calc}}</p> -->

        <!-- representacion declarativa -->
        <p>
            1+1
        </p>
        <p>
            {{ 1 + 1 }}
        </p>
        <p>
            {{ false ? 'hola' : 'Joel, porque es falso' }}
        </p>

        <!-- Prog. reactiva, observa cambios en los componentes y permite realizar cambios de manera reactiva -->
        <!-- Option API data -->
        <p>
            {{ numero + 66 }}
        </p>
        <p>{{ joel }}</p>
        <p>{{ usr }}</p>
        <p>{{ arreglo }}</p>

    </div>
</template>

<script>
export default {
    //Definicion de Props 1:
    //     props: [
    //     'title', 'value'
    //   ],
    //Definicion de Props 2:
    //Tipos de props
    // props: {
    //     title: String,
    //     value: Number,
    //     p1: Boolean,
    //     p2: Array,
    //     p3: Object,
    //     p4: Function,
    //     p5: Date,
    //     p6: Symbol,
    // },
    //Definicion de Props 2:
    props: {
        title: String,
        value: {
            type: Number,
            required: false,
            default: 80,
            validator(value) {
                return value>0;
            }
        },
    },
    // option Api data()
    data() {
        return {
            numero: this.value,
            titulo: 'Contador',
            joel: false,
            usr: {
                nombre: 'Emil',
                edad: 23,
                genero: 'M'
            },
            arreglo: ['blanc', 'jaune', 'rouge'],
            calc: () => numero ** 2
        };
    },
    methods: {
        calcularCuadrado() {
            console.log('entra al metodo');
            return this.numero ** 2;
        },
        incrementar() {
            this.numero++;

        },
        decrementar() {
            this.numero--;
        }
    },
    // propiedades computadas: es una ESPECIE de metodo, no es un METODO, guarda propiedades en cache, como ejecucion de metodos
    // en lugar de calcularlo, deuvleve el valor
    //  siempre y cuando no cambie el cuerpo o el resultado de la propiedad computada
    computed: {
        calCuadrado() {
            console.log('prop computada');
            return this.numero ** 2;
        }
    },
    created(){
        if(this.value>0) {
            console.log('Valor correcto')
        } else{
            throw new Error("Valor ingresado es incorrecto")
        }
    }
    // <!-- props, son parametros personalizados que permiten que 
    //  un componente hijo reciba valores definidos por un componnete padre -->


}
</script>

<style scoped>
.doble_fila {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 100px 100px;
}
</style>
