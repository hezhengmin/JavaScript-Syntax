<template lang="">
    <h1>KeyPage</h1>
    <!--經過兩秒後pText更改文字敘述，綁定:key會把<p></p>元素刪除，
    重建一個，這樣就會吃到動畫效果  -->
    <p :key="pText" class="animate">{{ pText }}</p>
</template>
<script setup>
import { ref } from "vue";
const pText = ref("第一段文字");
setTimeout(() => {
    pText.value = "第二段文字";
}, 2000);
</script>
<style lang="scss" scoped>
.animate {
    animation: openIn 1s ease-in-out;
}

@keyframes openIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
