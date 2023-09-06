<template lang="">
    <h1>SlotTutorial</h1>
    <SlotCustomTitle>
        <template #default="{ msg }">{{ msg }}自訂標題</template>

        <template #btn>
            <button>編輯</button>
            <button>刪除</button>
        </template>
    </SlotCustomTitle>
</template>
<script setup>
import SlotCustomTitle from "../components/SlotCustomTitle.vue";
</script>
<style lang=""></style>
