<template lang="">
    <div>APP.vue Provide(提供)的: {{ message }}</div>
</template>
<script setup>
import { inject } from "vue";
const message = inject("message");
</script>
<style lang=""></style>
