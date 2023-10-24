<template lang="">
    書本數量：{{ count }}
    <button @click="addBook">新增書本</button>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const author = reactive({
    name: "John Doe",
    books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});

const count = computed(() => {
    return author.books.length;
});

const addBook = () => {
    author.books.push("Book");
};
</script>
<style lang=""></style>
