<template>
    <div id="app">
        <h1>Todo List</h1>
        <input type="text" v-model="newTodo" placeholder="Add a new todo" />
        <button v-on:click="addTodo">Add</button>
        <ul>
            <li v-for="(todo, index) in todos" v-bind:class="{ done: todo.done }">
                <span>{{ todo.text }}</span>
                <button v-on:click="removeTodo(index)">X</button>
                <button v-on:click="toggleDone(index)">{{ todo.done ? "Undone" : "Done" }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            newTodo: "",
            todos: [],
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.trim() !== "") {
                this.todos.push({
                    text: this.newTodo,
                    done: false,
                })
                this.newTodo = ""
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        toggleDone: function (index) {
            this.todos[index].done = !this.todos[index].done
        },
    },
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
