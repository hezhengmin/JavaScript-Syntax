<template lang="">
    <div>{{ obj.count }}</div>
    <button @click="obj.count++">增加</button>
</template>
<script setup>
import { ref, reactive, watch } from "vue";

const obj = reactive({ count: 0 });

//錯誤，reactive不能這樣，要 ()=> 物件.屬性
// watch(obj.count, (count) => {
//     console.log(`count is: ${count}`);
// });

// 提供一个 getter 函数
watch(
    () => obj.count,
    (count) => {
        console.log(`count is: ${count}`);
    }
);
</script>
<style lang=""></style>
