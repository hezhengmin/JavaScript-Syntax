<template>
    <h1>computed 計算屬性</h1>
    <input type="text" v-model="inputA" />
    {{ inputAFunc() }}
    <br />
    <input type="number" v-model="inputB" />
    {{ numFormat }}
</template>

<script setup>
import { computed, ref } from "vue";

const inputA = ref("inputA");
const inputB = ref(0.5);

const numFormat = computed(() => {
    console.log("inputB change");
    if (Number.isNaN(inputB.value)) return inputB.value;
    else return `${inputB.value * 100}%`;
});

// 這邊不用computed的話，其他輸入框inputB變動也會觸發此inputAFunc()
const inputAFunc = () => {
    console.log("inputA change");
    if (inputA.value.length > 0) {
        return inputA.value;
    }
};
</script>

<style scoped></style>
