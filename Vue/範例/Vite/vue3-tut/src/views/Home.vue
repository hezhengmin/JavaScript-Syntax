<template lang="">
    <el-row class="tac">
        <el-col :span="24"></el-col>
    </el-row>
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
        counter:{{ counter }}
        <button @click="increment()">counter++</button>
    </div>
</template>

<script setup>
import ComponentA from "../components/ComponentA.vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const { counter } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>
<style lang=""></style>
