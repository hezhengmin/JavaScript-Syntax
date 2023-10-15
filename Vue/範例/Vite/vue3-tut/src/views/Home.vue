<template lang="">
    <div>
        <ul>
            <li>
                <router-link :to="{ name: 'WatchAndWatchEffect' }">WatchAndWatchEffect</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Parent' }">Parent</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'SlotTutorial' }">SlotTutorial</router-link>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<script setup>
import ComponentA from "../components/ComponentA.vue";
</script>
<style lang=""></style>
