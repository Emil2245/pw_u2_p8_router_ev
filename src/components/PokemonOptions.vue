<template>
  <!-- <h1>Pokemon Options</h1> -->
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
  export default {};
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
