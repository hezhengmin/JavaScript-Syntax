<template>
    <h1>{{ title }}</h1>
</template>
<script setup>
import { ref } from "vue";

const title = ref("");
const fetchData = async () => {
    const delay = 3000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    }).then(() => {
        title.value = "載入資料成功";
        console.log(title.value);
    });
};

await fetchData();
</script>
<style>
.async-component {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
}
</style>
