<template>
  <div>
      <p>{{dog.name}}</p>
      <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="120" height="auto">
      <br>
      <button v-on:click="$emit('delete')">Delete</button>

  </div>
</template>

<script>
export default {
    props: ['dog']
}
</script>

<style>

</style>