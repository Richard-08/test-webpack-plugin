<template>
  <div id="app">
    <h1>Hello!</h1>
    
    <ImagesList />
  </div>
</template>

<script>
import ImagesList from './components/ImagesList.vue';

export default {
  name: 'App',
  components: {
    ImagesList
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
