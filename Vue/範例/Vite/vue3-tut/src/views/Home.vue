<template lang="">
    <div>
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'tut-vmodel' }">tut-vmodel</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Computed' }">Computed</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'WatchAndWatchEffect' }">WatchAndWatchEffect</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Parent' }">Parent</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'SlotTutorial' }">SlotTutorial</router-link>
            </li>

            <li>
                <router-link :to="{ name: 'ChangePassword' }">ChangePassword</router-link>
            </li>
        </ul>
        <router-view />
        <!-- counter:{{ counter }}
        <button @click="increment()">counter++</button>
        <br />
        <button @click="notify">Notify !</button> -->
    </div>
</template>

<script setup>
import ComponentA from "../components/ComponentA.vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import { toast } from "vue3-toastify";

const { counter } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};

const notify = () => {
    toast("Wow so easy !", {
        autoClose: 1000,
        position: toast.POSITION.BOTTOM_RIGHT,
    });
};


</script>
<style lang=""></style>
