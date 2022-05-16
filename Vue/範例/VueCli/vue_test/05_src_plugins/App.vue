<template>
    <div>
        <Student name="MingHe" gender="男" :age="25" />
        <hr />
        <School />
    </div>
</template>

<script>
//引入school組件
import Student from "./components/Student";
import School from "./components/School";

export default {
    name: "App",
    data() {
        return {
            msg: "Message",
        };
    },
    components: {
        Student,
        School,
    },
};
</script>

<style></style>
