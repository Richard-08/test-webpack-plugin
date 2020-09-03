<template>
  <div id="app">
    <h1>Hello!</h1>
    <img :src="img" alt="">
  </div>
</template>

<script>

import img from './assets/test.jpg';

export default {
  name: "App",
  data() {
    return {
      img,
    };
  },
};
</script>

<style>

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>