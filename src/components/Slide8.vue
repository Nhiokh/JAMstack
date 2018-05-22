<template>
  <div class="slide">
    <h1>IT'S CHEAP (FREE*) <span>*almost?</span></h1>
    <iframe src="https://giphy.com/embed/8RxCFgu88jUbe" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Slide8',
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

  span {
    font-size: 14px;
  }
</style>
