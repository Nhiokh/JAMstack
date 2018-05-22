<template>
  <div class="slide">
    <img width="800" src="../assets/jamstack-logo.svg" />
    <h1>Welcome to a new web</h1>
  </div>
</template>

<script>
export default {
  name: 'Slide1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  overflow: hidden;
}
</style>
