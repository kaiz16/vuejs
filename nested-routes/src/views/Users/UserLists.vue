<template>
  <div class="user-lists">
      <ul>
        <li 
            v-for="(user, index) in users" 
            v-bind:key="index"
        >
        <!-- 
            v-on:mouseover="hoveringItem = index"
            hovering on the element
            will set the index of the hovered item.
            So we can bind class based on that value to show different style -->

        <!-- Add the active class 
            if the index is equal to hoveringItem -->
            <p 
                v-bind:class="{ 'active': hoveringItem == index}"
                v-on:mouseover="hoveringItem = index"
                v-on:click="takeMeToUserPage(user.id)">
                {{user.name}}
            </p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            hoveringItem: null,
            users: [
                {
                    name: 'Person 1',
                    id: 1,
                },
                {
                    name: 'Person 2',
                    id: 2,
                },
                {
                    name: 'Person 3',
                    id: 3,
                },
                {
                    name: 'Person 4',
                    id: 4,
                },
                {
                    name: 'Person 5',
                    id: 5,
                }
            ]
        }
    },
    methods: {
        takeMeToUserPage(user_id){
            this.$router.push({
                name: 'User',
                // since this is a dynamic route 
                // and it takes id as a parameter. 
                // We are passing user_id as a parameter to the route
                params: {
                    id: user_id
                }
            })
        }
    }
}
</script>

<style scoped>
.user-lists ul li{
    list-style-type: none;
}

.active {
    text-decoration: underline;
}
</style>