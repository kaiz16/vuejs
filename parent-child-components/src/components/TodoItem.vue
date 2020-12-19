<template>
    <div class="child border">
        <code>Child of Todos.vue</code>
        <p>TodoItem.vue</p>
        <code>
        <p>Todo Item : {{index}}</p>
        <p>{{todo}}</p>
        </code>
    </div>
    
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        todo: {
            type: String, 
            // type of props
            required: true 
            // is it required ? 
            //meaning a user must pass in todo props when using this component
        }
    }
}
</script>

<style scoped>
p:last-child {
    color: blueviolet;
}
</style>