<template>
<!-- html -->
  <div id="app">
    <h1>Todo App</h1>
    <todo-input v-on:todoInserted="addTodo"></todo-input>
    <todo-item v-for="(j, i) in todos" v-bind:key="i" v-bind:todo="j"> 

    </todo-item>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
// javascript
export default {
  name: 'App',
  components: {
    'todo-input': TodoInput,
    'todo-item': TodoItem
  },
  data() {
    return {
      todos: ['Todo 3', 'Todo 3', 'Todo 3'],
    }
  },
  methods: {
    addTodo(todo){
      this.todos.push(todo)
    }
  }
}
</script>

<style>
/* css */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
