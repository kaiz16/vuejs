<!-- child of PetSingular.vue  -->
<template>
  <img :src="image"/>
</template>

<script>
export default {
    // here, we are also receiving an image source as a prop
    props: {
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
img{
    width: 200px;
    height: 200px;
}
</style>