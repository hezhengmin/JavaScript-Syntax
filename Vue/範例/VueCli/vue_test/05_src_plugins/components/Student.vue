<template>
    <div>
        <h2>學生姓名：{{ name }}</h2>
        <h2>學生性別：{{ gender }}</h2>
        <!-- v-fbind 自動獲取焦點 -->
        <input type="text" v-fbind:value="name" />
    </div>
</template>

<script>
// import { hunhe, hunhe2 } from "../mixin";

export default {
    name: "StudentName",
    props: {
        name: {
            type: String,
            required: true, //姓名必填
        },
        gender: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
    // mixins: [hunhe, hunhe2],
    mounted() {
        console.log("Student.vue");
    },
};
</script>
