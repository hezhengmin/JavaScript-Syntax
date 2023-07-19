<template>
    <div id="app">
        <LightBox v-slot:test="props">
            <ul>
                <li v-for="(item, index) in props.options">{{ item.name }}/{{ item.val }}</li>
            </ul>
        </LightBox>
    </div>
</template>

<script>
import LightBox from "./components/LightBox.vue";

export default {
    name: "App",
    components: {
        LightBox,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
