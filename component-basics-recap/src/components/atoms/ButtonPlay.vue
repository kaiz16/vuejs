<template>
  <button v-on:click="$emit('play')">Play</button>
</template>
<script>
export default {

}
</script>

<style scoped>
button{
    color: red;
}
</style>