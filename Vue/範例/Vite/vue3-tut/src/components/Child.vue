<template lang="">{{ props.data }},字數:{{ txtLength }}</template>

<script setup>
import { ref, computed, watch } from "vue";

const emits = defineEmits(["update", "submit"]);

const props = defineProps({
    data: {
        type: String,
        default: "",
    },
});

const txtLength = computed(() => {
    return props.data.length;
});

watch(txtLength, (newValue) => {
    emits("update", `來自Child.vue，字數: ${newValue}`);
});
</script>
<style lang=""></style>
