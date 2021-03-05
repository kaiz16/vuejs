<template>
    <div>
        <img v-bind:src="pet.type === 'cat' ? catImg : dogImg"/>
        <p>{{ pet.name }}</p>
        <button v-on:click="del()">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        pet: {
            type: Object
        }
    },
    data(){
        return {
            catImg: 'https://i.pinimg.com/originals/24/37/bd/2437bd9758a684862c11aa9e8f20341a.jpg',
            dogImg: 'https://i.pinimg.com/originals/79/ff/00/79ff00f7e84d5246a08e74c8d0e8e115.jpg'
        }
    },
    methods: {
        del(){
            this.$emit('deletePet')
        }
    }
}
</script>

<style>
img{
    height: 100px;
    width: 100px;
}
</style>