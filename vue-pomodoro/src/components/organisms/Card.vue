<template>
  <div class="card">
      <p>{{mode}}</p>
      <h1>{{ getMinutes }}:{{ getSeconds }}</h1>
      <button-play v-on:play="play()"></button-play>
      <button-pause v-on:pause="pause()"></button-pause>
  </div>
</template>

<script>
import ButtonPause from '../atoms/ButtonPause'
import ButtonPlay from '../atoms/ButtonPlay'
export default {
    components: {
        'button-pause': ButtonPause,
        'button-play': ButtonPlay
    },
    data(){
        return {
            // isPaused: false,
            mode: 'work',
            counter: null,
            countdown: null, // 60
            workTime: 25, // in minutes
            breakTime: 5 // in minutes
        }
    },
    watch: {
        countdown: function(){
            if (this.countdown == 0){
                clearInterval(this.counter)
                // if work is done start break session
                if (this.mode == 'work'){
                    this.startBreak()
                // if break is done restart (one cycle completed)
                }else if(this.mode == 'break'){
                    this.startWork()
                    this.$emit('incrementCycle')
                }
            }
        }
    },
    computed: {
        getMinutes(){
            let int = parseInt(this.countdown / 60, 10)
            if (int < 10){
                return '0' + int
            }
            return int
        },
        getSeconds(){
            let int = parseInt(this.countdown % 60, 10)
            if (int < 10){
                return '0' + int
            }
            return int
        }
    },
    methods: {
        play(){
            clearInterval(this.counter)
            if (this.mode == 'work'){
                this.startWork()
            }else if (this.mode == 'break'){
                this.startBreak()
            }
        },
        pause(){
            // this.isPaused = true
            clearInterval(this.counter)
        },
        startWork(){
            this.mode = 'work'
            // if there's no countdown or countdown is null, set the timer
            if (!this.countdown){
                this.countdown = this.workTime * 60
            }
            this.counter = setInterval(() => {
                this.countdown--;
            }, 1000);
        },
        startBreak(){
            this.mode = 'break'
            // if there's no countdown or countdown is null, set the timer
            if (!this.countdown){
                this.countdown = this.breakTime * 60
            }
            this.counter = setInterval(() => {
                this.countdown--;
            }, 1000);
        }
    }
}
</script>

<style scoped>
.card{
    border: 1px solid #b10046;
    border-radius: 20px;
    width: fit-content;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    margin: 0;
    color: black;
}
</style>