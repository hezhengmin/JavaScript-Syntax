<template lang="">
    <AttrChild :message="msg" @click="onClick"></AttrChild>
</template>
<script setup>
import AttrChild from "../components/AttrChild.vue";
import { ref } from "vue";
defineOptions({
    inheritAttrs: false,
});
const onClick = () => {
    alert("onClick");
};
const msg = ref("this is a message");
</script>
<style lang=""></style>
