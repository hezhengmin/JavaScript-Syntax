<template>
    <div>
        <h2 @click="showName">學生姓名：{{ name }}</h2>
        <h2>學生性別：{{ gender }}</h2>
        <h2>{{ test }}</h2>
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
