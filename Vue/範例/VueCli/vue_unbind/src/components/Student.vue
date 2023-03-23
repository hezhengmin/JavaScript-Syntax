<template>
    <div class="student">
        <h2>學生姓名：{{ name }}</h2>
        <h2>學生性別：{{ gender }}</h2>
        <h2>數字累加：{{ number }}</h2>
        <button @click="add">數字++</button>
        <button @click="sendStudentName">給APP學生名</button>
        <button @click="unBindStudentName">解綁給APP學生名</button>
        <button @click="death">銷毀student組件</button>
    </div>
</template>

<script>
export default {
    name: "StudentName",
    props: {
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            number: 0,
        };
    },
    mounted() {},
    methods: {
        add() {
            console.log("add methods");
            this.number++;
        },
        sendStudentName() {
            this.$emit("showStudentName", this.name);
            this.$emit("demo");
        },
        unBindStudentName() {
            this.$off("showStudentName"); //解綁單個事件
            //this.$off(["demo", "showStudentName"]); //解綁2個事件
            //this.$off(); //解綁全部事件
        },
        death() {
            this.$destroy();
        },
    },
};
</script>

<style scoped>
.student {
    padding: 20px;
    background: yellow;
}
</style>
