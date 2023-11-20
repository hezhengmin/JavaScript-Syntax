<template><input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /></template>
<script setup>
//props 名稱必須是 modelValue
defineProps(["modelValue"]);
//emit 事件的名稱必須是 update:modelValue
defineEmits(["update:modelValue"]);
</script>
<style lang=""></style>
