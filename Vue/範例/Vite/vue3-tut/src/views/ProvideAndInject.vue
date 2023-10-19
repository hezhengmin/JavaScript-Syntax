<template lang="">
    <Child />
    <button @click="count++">Count++</button>
</template>
<script setup>
import Child from "../components/ProvideAndInjectChild.vue";
import { ref, provide } from "vue";

const count = ref(0);
//provide(注入名，值)
provide("key", count);
</script>
<style lang=""></style>
