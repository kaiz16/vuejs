<template>
  <div id="app">
    <h1>{{ cycles }}</h1>
    <card v-on:incrementCycle="cycles++"/>
  </div>
</template>

<script>
import Card from './components/organisms/Card.vue'
export default {
  name: 'App',
  components: {
    'card': Card
  },
  data(){
    return {
      cycles: 0
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
h1 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, #00071f, #010823, #020a26, #030b2a, #040c2d, #101237, #1f1440, #2f1447, #511251, #730a54, #940050, #b10046) fixed;
  color: white;
}
</style>
