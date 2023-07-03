<template>
    <div id="app">
        <child-component ref="childRef"></child-component>
        <button @click="callChildMethod">Call child method</button>
    </div>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";

export default {
    name: "App",
    components: {
        ChildComponent,
    },
    methods: {
        async callChildMethod() {
            const sec = await this.$refs.childRef.resolveAfterNumberSeconds(5);
            console.log(`父組件得到的sec為: ${sec}`);
            this.$refs.childRef.childMethod();
        },
    },
};
</script>

<style></style>
