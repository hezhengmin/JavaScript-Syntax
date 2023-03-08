<template lang="">
    <div>
        <input type="text" v-model="newTodo" placeholder="Add a new todo" />
        <button v-on:click="addTodo">Add</button>
    </div>
</template>
<script>
export default {
    name: "TodoHeader",
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
    },
}
</script>
<style lang=""></style>
