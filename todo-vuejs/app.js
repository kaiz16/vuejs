var app = new Vue({
    el: "#app",
    data: {
        maxLength: 15,
        todoTitle: '',
        todoLists: [
            {
                todo: 'Walk my dog',
                done: true,
                isColoured: true,
            },
            {
                todo: 'feed my cat',
                done: false,
                isColoured: false,
            }
        ]
    },
    computed: {
        charCount: function(){
            return this.todoTitle.length
        } 
    },
    methods: {
        addTodo: function(){
            this.todoLists.push(
                {
                    todo: this.todoTitle,
                    done: false,
                    isColoured: false,
                }
            )
        },
        removeTodo: function(index){
            this.todoLists.splice(index, 1);
        },
        completeTodo: function(index){
            this.todoLists[index].done = !this.todoLists[index].done
        },
        changeColour: function(index){
            this.todoLists[index].isColoured = !this.todoLists[index].isColoured
        }
    }
})