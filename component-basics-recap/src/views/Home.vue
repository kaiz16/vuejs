<template>
  <div class="display">
    <display 
      :status="timer < 5 ? 'Less than 5' : 'Greater than 5'">
    </display>
    <p>{{timer}}</p>
    <div class="buttons">
      <button-play v-on:play="startTimer" v-if="showButtonPlay"></button-play>
      <button-restart v-on:restart="startTimer"></button-restart>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
let intervalTimer = null
import ButtonPlay from '../components/atoms/ButtonPlay.vue'
import ButtonRestart from '../components/atoms/ButtonRestart.vue'
import Display from '../components/atoms/Display.vue'
export default {
  name: 'Home',
  components: {
    'button-play': ButtonPlay,
    'button-restart': ButtonRestart,
    'display': Display
  },
  data(){
    return {
      timer: 10,
      showButtonPlay: true
    }
  },
  watch: {
    timer: function(newVal, oldVal){
      if (newVal == 0){
        clearInterval(intervalTimer)
      }
    }
  },
  methods: {
    startTimer(){
      this.timer = 10
      if (intervalTimer){
        clearInterval(intervalTimer)
      }
      intervalTimer = setInterval(() => {
        this.timer--;
      }, 1000);
    }
  }
}
</script>
