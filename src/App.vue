<template>
  <img alt="logo" class="logoimg" src="./assets/logo2r.png">
  <sign />

</template>

<script>
import sign from './components/signUp.vue'

export default {
  name: 'App',
  components: {
    sign

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
