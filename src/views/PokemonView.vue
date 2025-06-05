<template>
  <h1>Selecciona el Pokemon</h1>
  <PokemonImage :pokemonId="4" :mostrarImagen="false" />
  <PokemonOptions :pokemons="this.vectorPokemon" />
</template>

<script>
import { obtenerOpcionesFachada } from '@/clients/PokemonClient'

import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

export default {
  data() {
    return{
      vectorPokemon: []
    }
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      this.vectorPokemon = await obtenerOpcionesFachada(4)
      // console.log(opciones)
    }
  },
  mounted() {
    this.iniciarJuego();
  }
};
</script>

<style></style>
