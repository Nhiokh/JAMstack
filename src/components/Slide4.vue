<template>
  <div class="slide">
    <h1>BUT WHY WOULD WE DO THAT?</h1>
  </div>
</template>

<script>
export default {
  name: 'Slide4',
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
    font-size: 4em;
    font-weight: bold;
  }
</style>
