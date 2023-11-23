<template lang="">滑鼠位置位於 x: {{ x }} , y: {{ y }}</template>
<script setup>
import { useMouse } from "../composables/mouse.js";
const { x, y } = useMouse();
</script>
<style lang=""></style>
