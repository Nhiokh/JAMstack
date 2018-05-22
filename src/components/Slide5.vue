<template>
  <div class="slide">
    <h1>BUT WHY WOULD WE DO THAT?</h1>
    <iframe src="https://giphy.com/embed/TlK63EMNzHXbNBF8g9y" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><h2>BECAUSE IT'S THE FUTURE!</h2>
  </div>
</template>

<script>
export default {
  name: 'Slide5',
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
