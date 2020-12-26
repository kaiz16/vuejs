<template>
  <div class="pets">
      <!-- 
          1) We are looping over our pet array ( props )
          2) We are passing singular pet as a prop to our child (PetSingular.vue)
          3) We are listening for a delete event from our child (PetSingular.vue)
          4) From step 3, when an action is received
             we emit an event to our parent (App.vue)

          ***
            Never directly modify a prop
            https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
            Since our parent (App.vue) is the owner of this pets array, 
            mutation should be done there
          ***
       -->
      <pet-singular 
      :pet="pet"
      v-for="(pet, index) in pets" 
      @delete="$emit('delete', index)"
      v-bind:key="index"/>

        <!-- If there are no pets -->
      <div v-if="pets.length == 0">
          <p>You don't have pets</p>
          <button v-on:click="changeRoute">Click here to add</button>
      </div>
  </div>
</template>

<script>
// @ is an alias for src folder
import PetSingular from '@/components/PetSingular'
export default {
    props: {
        // receiving it as an array 
        pets: {
            type: Array
        }
    },
    components: {
        PetSingular
    },
    methods: {
        changeRoute(){
            // a route can be changed via router-link or this.$router
            this.$router.push({
                name: 'AddPets'
            })
        }
    }
}
</script>

<style>
.pets{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
</style>