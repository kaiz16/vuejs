<template>
  <div id="app">
    <p>Let's understand how parents and children work together.</p>
    <p>All components are single file components in this project. 
    Read more about 
      <a 
      target="_blank"
      href="https://vuejs.org/v2/guide/single-file-components.html">Single File Components</a>
    </p>
    <p>Before we continue, I am from 
      <code>App.vue</code> so I am the parent component of all children.</p>
    <p>Below is a list of all my children and grandchildren</p>
    
    <div class="parent border">
      <code>Parent and Grandparent of all children</code> 
      <p>App.vue</p>
      <Todos v-on:add-todo="whatever"/>
    </div>
      
  </div>
</template>

<script>
import Todos from './components/Todos'
export default {
  name: 'App',
  components: {
    Todos
  },
  methods: {
    whatever(){
      console.log("Now i caught this event from todo input")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.parent{
  display: flex;
  flex-direction: column;
  width: 50%;
  /* // max-width: 300px; */
  margin: 0 auto;
}

.child{
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px auto;
}

.border{
  border: 1px solid red;
}

code{
  background: #eeeeee;
  padding: 10px;
  margin: 0 auto;
}
</style>
