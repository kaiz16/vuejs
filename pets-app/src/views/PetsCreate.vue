<template>
  <div class="add-pets">
    <input type="text" 
    v-model="name"
    required
    placeholder="Name of your pet"/>
    <label for="type">Choose a type:

        <select id="type" v-model="type" required>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
        </select>
    </label>
    <button @click="addPet">Submit</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name: null,
            type: 'cat'
        }
    },
    methods: {
        addPet(){
            // data validation
            if (!this.name || !this.type){
                return
            }
            // emitting an event to our parent (App.vue)
            // we can pass params when emitting
            this.$emit('addPet', {
                name: this.name,
                type: this.type
            })
            // then redirect to our root route
            this.$router.push('/')
        }
    }
    
}
</script>

<style scoped>
.add-pets{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.add-pets > *{
    margin: 5px
}

</style>