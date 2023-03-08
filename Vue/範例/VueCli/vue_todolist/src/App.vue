<template>
    <div id="app">
        <h1>Todo List</h1>
        <TodoHeader />
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
import TodoHeader from "./components/TodoHeader.vue"
export default {
    name: "App",
    components: { TodoHeader },
    data() {
        return {
            newTodo: "",
            todos: [],
        }
    },
    methods: {
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
