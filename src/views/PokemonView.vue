<template>
  <h1>Selecciona el Pokemon</h1>
  <h1>{{ mensaje }}</h1>
  <!-- el v-if comprueba que existe un pokemon para crear la imagen -->
  <PokemonImage
    v-if="this.pokemon"
    :pokemonId="this.pokemon.id"
    :mostrarImagen="this.mostrar"
    ref="miHijo1"
  />
  <!-- el seleccionado es el nombre del $emit en el hijo -->
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="this.vectorPokemon"
    ref="miHijo2"
  />
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
  import {
    obtenerOpcionesFachada,
    obtenerAleatorioFachada,
  } from "@/clients/PokemonClient";

  import PokemonImage from "@/components/PokemonImage.vue";
  import PokemonOptions from "@/components/PokemonOptions.vue";

  export default {
    data() {
      return {
        vectorPokemon: [],
        pokemon: null,
        mostrar: false,
        mensaje: null,
      };
    },
    components: {
      PokemonImage,
      PokemonOptions,
    },
    methods: {
      async iniciarJuego() {
        this.vectorPokemon = await obtenerOpcionesFachada(5);
        console.log(this.vectorPokemon);

        //elegir un pokemon de los pedidos
        let idPokemonCorrecto = obtenerAleatorioFachada(
          0,
          this.vectorPokemon.length - 1
        );
        this.pokemon = this.vectorPokemon[idPokemonCorrecto];
        console.log(this.pokemon.nombre);
      },
      recibioPadre(objeto) {
        console.log("mensaje recibido desde hijo");
        console.log(objeto.id);
        this.validarRespuesta(objeto.id);
      },
      validarRespuesta(opcionSeleccionada) {
        if (opcionSeleccionada === this.pokemon.id) {
          this.mensaje = "Correcto!";
        } else {
          this.mensaje = "Perdiste! \n el correcto es: " + this.pokemon.nombre;
        }
        this.mostrar = true;
      },
      comunicarHijo() {
        console.log(this.$refs.miHijo1.mensaje1);
        this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

        console.log(this.$refs.miHijo2.mensaje2);
        this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
      },
    },
    mounted() {
      this.iniciarJuego();
    },
  };
</script>

<style></style>
