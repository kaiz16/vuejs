<template>
    <div class="parent child border">
        <code>Child of App.vue</code>
        <p>Todos.vue</p>
        <!-- Catch an event emitted by our todo input -->
        <TodoInput v-on:add-todo="addTodo"></TodoInput>

        <!-- A key must be a unique 
        so that vue can identify by their key -->
        <!-- passing in the singular todo 
            and unique index as props -->
        <TodoItem 
            v-for="(todo, index) in todos" 
            v-bind:key="index"
            :index="index + 1"
            :todo="todo"></TodoItem>
    </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
export default {
    components: {
        TodoInput,
        TodoItem
    },
    data(){
        return {
            todos: ['Walk my dog', 'What comes first chicken or egg ?']
        }
    },
    methods: {
        // a parameter or a payload passed by child can be used here
        addTodo(todo){
            this.$emit('add-todo')
            // console.log(todo)
            // adding the new item to our todos array
            this.todos.unshift(todo)
        }
    }
}
</script>
