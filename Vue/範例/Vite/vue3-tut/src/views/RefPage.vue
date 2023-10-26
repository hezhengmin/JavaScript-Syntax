<template lang="">
    <input type="text" ref="input" />
</template>
<script setup>
import { ref, onMounted } from "vue";

//宣告跟上面ref=input同名，可以使用原生DOM
const input = ref(null);
onMounted(() => {
    input.value.focus();
});
</script>
<style lang=""></style>
