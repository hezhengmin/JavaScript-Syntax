<template>
    <div class="demo">
        <h2>學生姓名：{{ name }}</h2>
        <h2>學生性別：{{ gender }}</h2>
    </div>
</template>

<script>
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
    mounted() {},
};
</script>

<style scoped>
.demo {
    background-color: aquamarine;
}
</style>
