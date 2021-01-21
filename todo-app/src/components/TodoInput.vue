<template>
    <!-- Todo Input -->
    <div>
        <input type="text" v-model="todoTitle"/>
        <todo-add-button v-on:addTodo="notifyApp"></todo-add-button>
    </div>
</template>

<script>
import TodoAddButton from './TodoAddButton.vue'

export default {
    data(){
        return {
            todoTitle: ''
        }
    },
    components: {
        'todo-add-button': TodoAddButton
    },
    methods: {
        notifyApp(){
            this.$emit('todoInserted', this.todoTitle)
            this.todoTitle = ''
        }
    }
}
</script>

<style>

</style>