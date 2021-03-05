<template>
    <div>
        <Pet v-for="(i, idx) in pets" :key="idx" :pet="i" v-on:deletePet="deleteMe(idx)"></Pet>
    </div>
</template>

<script>
import Pet from './Pet.vue'
export default {
    data(){
        return {
            pets: [ 
                {
                    name: 'Pluto',
                    type: 'dog'
                },
                {
                    name: 'Cat',
                    type: 'cat'
                },
                 {
                    name: 'Cat',
                    type: 'cat'
                }
            ]
        }
    },
    components: {
        Pet
    },
    methods: {
        deleteMe(idx){
            this.pets.splice(idx, 1)
        }
    }
}
</script>

<style>

</style>