<template>
  <div id="app">
   
    <div id="nav">
      <router-link :to="{name: 'Pets'}">Home</router-link> |
      <router-link :to="{name: 'AddPets'}">Add Pets</router-link> |
      <router-link :to="{name: 'About'}">About</router-link>
    </div>

    <!-- Router-view
      1) It's loading different component dynamically
      2) It can pass props/ listen for events like other components
      3) See router/index.js to know which components are recieving props
     -->
    <router-view 
    :pets="pets" 
    @delete="deletePet"
    @addPet="createPet"/>
    <!-- Pets prop will be passed to our Pets.vue -->

  </div>
</template>
<script>
export default {
  data(){
    return {
      // Array of objects
      pets: [
        {
          name: 'Loli',
          type: 'cat'
        }
      ]
    }
  },
  methods: {
    // params will be passed automatically
    createPet(pet){
      this.pets.push(pet)
    },
    deletePet(index){
      this.pets.splice(index, 1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
