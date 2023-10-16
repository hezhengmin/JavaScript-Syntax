<template lang="">
    不能變動的數值：{{ obj.num }}
    <button @click="obj.num++">num新增</button>
    <button @click="changeObjNumValue">num變更999</button>
    <hr />
    {{ user }}
    <br />
    薪資:{{ user.job.salary }}
    <button @click="user.name = 'zhengmin'">更改姓名</button>
    <button @click="user.job.salary++">新增薪資++</button>
</template>
<script setup>
import { reactive, ref, shallowRef, shallowReactive } from "vue";

//shallowRef:只處理基本資料類型的響應式, 不進行物件的響應式處理
const obj = shallowRef({ num: 100 });
console.log(`shallowRef的`, obj);
//整個替換調會變更數值
const changeObjNumValue = () => {
    obj.value = { num: 999 };
};

//shallowReactive:淺層能改，深層例如user.job.salary不能更動
const user = shallowReactive({
    name: "ming",
    job: {
        salary: 1000,
    },
});

console.log(user);
</script>
<style lang=""></style>
