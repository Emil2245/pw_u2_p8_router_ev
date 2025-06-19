<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/estudiante/444">Estudiante</router-link> |
      <router-link to="/estudiante-tabla">EstudianteTabla</router-link> |
      <router-link to="/contador">Contador</router-link> |
      <router-link to="/pregunta">Pregunta</router-link> |
      <router-link to="/carro">Carro</router-link> |
      <router-link to="/hola-mundo">HolaMundo</router-link> |
      <router-link to="/clima">Clima</router-link> |
      <router-link to="/pokemon">Pokemon</router-link> |
      <router-link to="/responsivo">Responsivo</router-link> |
    </nav>
  </div>
</template>
<script></script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
