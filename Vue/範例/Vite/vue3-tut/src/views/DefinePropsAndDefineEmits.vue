<template lang="">
    <ChildProduct :productId="777" :productName="productName" @update="updateProductName"></ChildProduct>
</template>
<script setup>
import { reactive, ref } from "vue";
import ChildProduct from "../components/ChildProduct.vue";
const productName = ref("蘋果汁");
const productId = ref(777);

const updateProductName = (newProductName) => {
    console.log(newProductName);
    productName.value = newProductName;
};
</script>
<style lang=""></style>
