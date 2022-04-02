<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">showDOM</button>
        <School ref="sch" />
    </div>
</template>

<script>
//引入school組件
import School from "./components/School";
export default {
    name: "App",
    data() {
        return {
            msg: "Message",
        };
    },
    components: {
        School,
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title);
            console.log(this.$refs.btn);
            console.log(this.$refs.sch); //VueComponent組件實例對象
        },
    },
};
</script>

<style></style>
