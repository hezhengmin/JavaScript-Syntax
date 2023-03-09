<template>
    <div id="app">
        <h1>Todo List</h1>
        <TodoHeader @addTodo="addTodo" />
        <TodoList />
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default {
    name: "App",
    components: { TodoHeader, TodoList },
    data() {
        return {
            newTodo: "",
            todos: [],
        };
    },
    methods: {
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        },
        toggleDone: function (index) {
            this.todos[index].done = !this.todos[index].done;
        },
    },
};
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
