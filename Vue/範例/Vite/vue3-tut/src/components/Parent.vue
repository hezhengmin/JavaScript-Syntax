<template lang="">
    <h1>Parent</h1>
    <input type="text" v-model="txt" />
    <Child :data="txt" @update="updateHandler"></Child>
</template>

<script setup>
import Child from "../components/Child.vue";
import { ref } from "vue";
const txt = ref("hello");

const updateHandler = (data) => {
    console.log(data);
};
</script>
<style lang=""></style>
