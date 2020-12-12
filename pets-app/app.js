Vue.component('pets-component', {
    template: '#pets-component-template',
    props: ['pets']
})
Vue.component('pet-component', {
    template: '#pet-component-template',
    props: ['pet'],
    computed: {
        petImage(){
            if (this.pet.type == 'cat'){
                return 'https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg'
            }else if(this.pet.type == 'dog'){
                return 'https://i.dailymail.co.uk/1s/2020/06/29/22/30198268-8472445-image-a-4_1593464962804.jpg'
            }
        }
    }
})

Vue.component('add-pet-component', {
    template: '#add-pet-component-template',
    data(){
        return {
            type: 'cat',
            name: ''
        }
    },
    methods: {
        emitToParent(){
            this.$emit('add-pet', this.type, this.name)
        }
    }
})

var app = new Vue({
    el: "#app",
    data(){
        return {
            pets: [
                {
                    type: 'cat',
                    name: 'Lollipop'
                }
            ],
            activeComponent: 'pets-component'
        }
    },
    methods: {
        switchToPets(){
            this.activeComponent = 'pets-component'
        },
        switchToAddPet(){
            this.activeComponent = 'add-pet-component'
        },
        addPet(type, name){
            this.pets.push({
                type: type,
                name: name
            })
        }
    }
})

