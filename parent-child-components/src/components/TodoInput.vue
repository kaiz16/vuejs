<template>
    <div class="child border">
        <code>Child of Todos.vue</code>
        <p>TodoInput.vue</p>
        <code>
        Add todos here. Hit Enter
        <input type="text" 
            v-on:keyup.enter="emitToParent" 
            v-model="todotitle"/>
        </code>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todotitle: null
        }
    },
    methods: {
        emitToParent(){
            // Data validation
            if (!this.todotitle){
                alert('eh, no falsy value ok ?')
                
                return
            }
            alert('I will now emit an action to my parent.')
            
            // we can also pass in params when emitting to parent
            this.$emit('add-todo', this.todotitle)
            this.todotitle = null
        }
    }
}
</script>

<style>

</style>