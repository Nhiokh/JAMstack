<template>
  <div class="slide">
    <h1>What is the JAMstack?</h1>
    <img width="1000" src="../assets/jamstack01.jpg" alt="Jamstack vs Oldstack">
  </div>
</template>

<script>
export default {
  name: 'Slide3',
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
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
}
</style>
