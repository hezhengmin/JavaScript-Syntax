<template lang="">
    <p>產品Id:{{ props.productId }}</p>
    <p>產品名稱:{{ props.productName }}</p>
    <input type="text" v-model="newProductName" />
    <button @click="ChangeProductName">更新產品名字</button>
</template>
<script setup>
import { reactive, ref } from "vue";

const newProductName = ref("");
const props = defineProps({
    productId: Number,
    productName: String,
});

const emits = defineEmits(["update", "submit"]);

const ChangeProductName = () => {
    emits("update", newProductName.value);
};
</script>
<style lang=""></style>
