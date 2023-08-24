<template>
    <h1>Hello World</h1>
    <!-- 單向綁定 -->
    <p>{{ data }}</p>
    <!-- 雙向綁定 -->
    <input type="text" v-model="data2" />
    <p>{{ data2 }}</p>
</template>

<script setup>
import { ref } from "vue";

const data = "feature";
const data2 = ref("test");
</script>

<style scoped></style>
