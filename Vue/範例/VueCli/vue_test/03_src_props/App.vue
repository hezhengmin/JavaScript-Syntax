<template>
    <div>
        <Student name="MingHe" gender="男" :age="25" />
    </div>
</template>

<script>
//引入school組件
import Student from "./components/Student";
export default {
    name: "App",
    data() {
        return {
            msg: "Message",
        };
    },
    components: {
        Student,
    },
    methods: {},
};
</script>

<style></style>
