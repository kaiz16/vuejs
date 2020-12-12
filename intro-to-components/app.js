let minusButton = {
    template: `<button v-on:click="decrement">-</button>`,
    props: ['number-from-parent'],
    methods: {
        decrement(){
            if (this.numberFromParent == 10){
                this.$emit('divide')
            }else{
                this.$emit('minus')
            }
        }
    }
}

var plusButton = {
    template: `<button v-on:click="increment">+</button>`,
    props: {
        numberFromParent: {
            type: Number,
            required: true
        }
    },
    methods: {
        increment(){
            if (this.numberFromParent == 10){
                this.$emit('multiply')
            }else{
                this.$emit('add')
            }
        }
    }
}

var app = new Vue({
    el: '#app',
    components: {
        'plus-button': plusButton,
        'minus-button': minusButton
    },
    data: {
        number: 1
    },
})