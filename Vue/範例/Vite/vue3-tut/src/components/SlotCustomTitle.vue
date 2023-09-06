<template lang="">
    <section>
        <slot msg="hello">
            <h2>SlotCustomTitle</h2>
        </slot>
    </section>
    <section>
        <slot name="btn">
            <button>編輯</button>
        </slot>
    </section>
</template>
<script setup></script>
<style lang=""></style>
