<template>
  <div class="image-container">
    <img
      class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar el pokemon"
    />
    <img
      v-if="mostrarImagen"
      :src="imagenFuente"
      alt="No se puede renderizar el pokemon"
    />
  </div>
</template>

<script>
  export default {
    props: {
      pokemonId: {
        type: Number,
        required: true,
      },
      mostrarImagen: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    data() {
      return {
        mostrar: false,
      };
    },
    computed: {
      imagenFuente() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      },
    },
  };
</script>

<style>
  img {
    height: 200px;
    position: absolute;
    right: 32%;
  }
  .ocultar {
    filter: brightness(0);
  }
  .image-container {
    height: 200px;
  }
</style>
