<template>
    <h1>watch 及 watchEffect 監聽</h1>
    <input type="text" v-model="inputWatch" />
    <br />
    name:
    <input type="text" v-model="inputWatchEffect.name" />
    age:
    <input type="number" v-model="inputWatchEffect.age" />
</template>

<script setup>
import { watch, watchEffect, ref, reactive } from "vue";
const inputWatch = ref("first");
const inputWatchEffect = reactive({
    name: "ming",
    gender: "male",
    age: 27,
});

watch(inputWatch, (newValue, oldValue) => {
    console.log(newValue, oldValue);
});

watchEffect(() => {
    console.log(`watchEffect 監控物件`, inputWatchEffect.age);
});
</script>

<style scoped></style>
