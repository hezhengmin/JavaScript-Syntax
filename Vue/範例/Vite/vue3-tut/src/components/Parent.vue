<template lang="">
    <h1>Parent</h1>
    <input type="text" v-model="txt" />
    <Child :data="txt" @update="updateHandler"></Child>
    <h1>组件 v-model</h1>
    <CustomInput v-model="message" />
    {{ message }}
    <br />
    <!--<CustomInput v-model="message" /> 等同於下方 -->
    <CustomInput :modelValue="message" @update:modelValue="message = $event" />
</template>

<script setup>
import Child from "../components/Child.vue";
import CustomInput from "../components/CustomInput.vue";

import { ref } from "vue";
const txt = ref("hello");

const updateHandler = (data) => {
    console.log(data);
};

const message = ref("自訂組件");
</script>
<style lang=""></style>
