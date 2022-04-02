<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>性別：{{ gender }}</h2>
        <h2>年齡：{{ myAge }}</h2>
        <button @click="updateAge">Age++</button>
    </div>
</template>

<script>
export default {
    name: "StudentName",

    //1.簡單接收
    //props: ["name", "gender", "age"],
    /*
    2.限制類型
    props: {
        name: String,
        gender: String,
        age: Number,
    },
    */
    //3.限制類型+必要性的限制
    props: {
        name: {
            type: String,
            required: true, //姓名必填
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            default: 100, //沒填，直接設定100歲
        },
    },
    data() {
        return {
            msg: "我是一位學生",
            myAge: this.age,
        };
    },
    methods: {
        updateAge() {
            this.myAge++;
        },
    },
};
</script>

<style></style>
