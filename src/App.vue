<template>
  <div
    id="app"
    @keyup.left="previousSlide()"
    @keyup.right="nextSlide()"
    tabindex="-1"
  >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentRoute: 1
    }
  },
  methods: {
    nextSlide: function () {
      let newRoute = `/${++this.currentRoute}`;
      this.$router.push(newRoute)
    },
    previousSlide: function () {
      let newRoute = `/${--this.currentRoute}`;
      this.$router.push(newRoute)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
div {
  outline: none;
  height: 95vh;
}
</style>
