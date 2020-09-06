<template>
  <div class="images">
    <div class="images__img">
      <img src="../assets/images/1.jpg" alt="">
    </div>
    <div class="images__img">
      <img src="../assets/images/2.jpg" alt="">
    </div>
    <div class="images__img">
      <img src="../assets/images/3.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'images-list',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.images__img {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
