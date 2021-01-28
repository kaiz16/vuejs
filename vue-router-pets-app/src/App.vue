<template>
  <div id="app">
    <div class="nav">
      <router-link v-bind:to="{
        name: 'HomePage',
        params: {
          pets: pets
        }
      }">Home</router-link>

      <router-link :to="{
          name: 'AboutPage'
        }">About</router-link>

      <router-link :to="{
          name: 'AddPage'
        }">Add</router-link>
    </div>

    <router-view v-bind:pets="pets" v-on:delete="deletePet"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pets: [
        {
          name: "Loli",
          type: "Dog"
        },
        {
          name: "Loli",
          type: "Cat"
        }
      ]
    };
  },
  methods: {
    deletePet(index){
      this.pets.splice(index, 1)
    }
  }
};
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

.nav a {
  margin: 10px;
}
</style>
