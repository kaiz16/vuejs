<template>
  <div>
      <p>{{cat.name}}</p>
      <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="120" height="auto">
      <br>
      <button v-on:click="$emit('delete')">Delete</button>
  </div>
</template>

<script>
export default {
    props: ['cat']
}
</script>

<style>

</style>