<template lang="">
    <button @click="open = true">Open Modal</button>
    <!-- 
        部分模板「傳送」到該組件的 DOM 結構外層的位置去
     -->
    <Teleport to="body">
        <div v-if="open" class="modal">
            <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>
</template>
<script setup>
import { ref } from "vue";
import modal from "../components/Modal.vue";

const open = ref(false);
</script>
<style lang=""></style>
