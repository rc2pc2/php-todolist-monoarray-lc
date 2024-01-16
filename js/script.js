const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: './server.php',
            todoList : [],
        }
    },

    methods: {
        getTodoList(){
            axios.get(this.apiUrl).then((response) =>{
                this.todoList = response.data;

                console.log(response.data);
            });
        }
    },

    created(){
        this.getTodoList();
    }

}).mount('#app')