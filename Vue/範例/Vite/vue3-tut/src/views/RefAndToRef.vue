<template lang="">
    {{ obj.num }}
    {{ newNum }}
    <button @click="addNewNum">新增</button>
    <button @click="addNewNum2">新增2</button>
</template>
<script setup>
import { reactive, toRef, toRefs } from "vue";

const obj = reactive({
    Name: "Ming",
    num: 0,
});

/*
toRef: reactive 中特定屬性轉換成 ref
*/
const newNum = toRef(obj, "num");

console.log(newNum);

const addNewNum = () => {
    newNum.value++;
};

/*
toRefs: 新的 ref 物件形式
*/
const newObj = toRefs(obj);
console.log(newObj);
const addNewNum2 = () => {
    newObj.num.value++;
};
</script>
<style lang=""></style>
