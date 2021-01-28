<template>
    <div>
        <div v-for="(pet, index) in pets" v-bind:key="index">
            <cat v-if="pet.type == 'Cat'" v-bind:cat="pet"></cat>
            <dog v-else v-bind:dog="pet" v-on:delete="$emit('delete', index)"></dog>
        </div>
    </div>
</template>

<script>
import Cat from '../components/Cat.vue'
import Dog from '../components/Dog.vue'
export default {
    props: ['pets'],
    components: {
        'cat': Cat,
        'dog': Dog
    }
}
</script>

<style>

</style>