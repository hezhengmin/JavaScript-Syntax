<template lang="">
    <div>
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
    name: "TodoList",
};
</script>
<style lang=""></style>
