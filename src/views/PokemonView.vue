<template>
  <h1>Selecciona el Pokemon</h1>
  <PokemonImage :pokemonId="4" :mostrarImagen="true" />
  <PokemonOptions />
</template>

<script>
  import PokemonImage from "@/components/PokemonImage.vue";
  import PokemonOptions from "@/components/PokemonOptions.vue";
  export default {
    components: {
      PokemonImage,
      PokemonOptions,
    },
  };
</script>

<style></style>
