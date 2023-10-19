<template lang="">
    {{ count }}
</template>
<script setup>
import { inject } from "vue";

const count = inject("key");
</script>
<style lang=""></style>
