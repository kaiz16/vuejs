<template>
  <button v-on:click="$emit('restart')">Restart</button>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
    color: blue;
}
</style>