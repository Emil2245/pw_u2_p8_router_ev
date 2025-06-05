<template>
  <!-- <h1>Pokemon Options</h1> -->
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    }
  },
  
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

.options-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background-color: lightblue;
}
</style>
