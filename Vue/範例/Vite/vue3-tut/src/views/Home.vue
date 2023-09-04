<template lang="">
    <div>
        <router-link :to="{ name: 'WatchAndWatchEffect' }">WatchAndWatchEffect</router-link>
        <router-link :to="{ name: 'Parent' }">Parent</router-link>
        <router-view />
    </div>
</template>

<script setup>
import ComponentA from "../components/ComponentA.vue";
</script>
<style lang=""></style>
