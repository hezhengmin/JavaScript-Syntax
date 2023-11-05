<template lang="">
    <span>Fallthrough attribute: {{ $attrs }}</span>
</template>
<script setup>
import { useAttrs, onMounted } from "vue";

const attrs = useAttrs();
onMounted(() => {
    console.log(attrs);
});
</script>
<style lang=""></style>
