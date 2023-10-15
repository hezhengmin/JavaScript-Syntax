<template lang="">
    不能變動的數值：{{ obj.num }}
    <button @click="obj.num++">num新增</button>
</template>
<script setup>
import { reactive, ref, shallowRef, shallowReactive } from "vue";

//shallowRef:只處理基本資料類型的響應式, 不進行物件的響應式處理
const obj = shallowRef({ num: 100 });
console.log(`shallowRef的`, obj);
</script>
<style lang=""></style>
