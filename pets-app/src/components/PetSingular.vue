<template>
  <div class="pet">
    <pet-image :image="petImage"/>
    <p>{{pet.name}}</p>
    <!-- Never modify props directly,
     https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
     Grandparent of this component (App.vue) is the owner of Pets array
     We have to keep emitting until we reach to root parent -->
    <delete-button v-on:delete="$emit('delete')"/>
  </div>
</template>

<script>
import PetImage from '../components/PetImage'
import DeleteButton from '../components/DeleteButton'
export default {
    props: {
      // this component is receiving pet object as a prop 
        pet: {
            type: Object,
            required: true
        },
    },
    components: {
        PetImage,
        DeleteButton
    },
    data(){
      return {
        petImage: null
      }
    },
    // Life cycle hook
    created(){
      // when this component has been created, set the image for our pet type
      // Then when it's mounted, this.petImage will be passed as a prop to PetImage.vue
      if (this.pet.type == 'cat'){
        this.petImage = 'https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg'
      }else if(this.pet.type == 'dog'){
        this.petImage = 'https://i.dailymail.co.uk/1s/2020/06/29/22/30198268-8472445-image-a-4_1593464962804.jpg'
      }
    }
}
</script>

<style>
.pet{
  margin: 20px
}
</style>