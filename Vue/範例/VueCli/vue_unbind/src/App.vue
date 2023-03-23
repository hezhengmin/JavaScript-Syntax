<template>
    <div id="app">
        <!-- 給子組件函數類型的props，子給父傳遞數據 -->
        <School :getSchoolName="getSchoolName" />
        <hr />
        <!-- 綁定一個自訂義事件，子給父傳遞數據，使用v-on或@ -->
        <Student name="MingHe" gender="男" :age="25" @showStudentName="getStudentName" @demo="m1" />
        <!-- 綁定一個自訂義事件，子給父傳遞數據，使用ref-->
        <Student name="MingHe" gender="男" :age="25" ref="student" />
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: {
        Student,
        School,
    },
    methods: {
        getSchoolName(name) {
            console.log(name);
        },
        getStudentName(name) {
            console.log(name);
        },
        m1() {
            console.log("m1");
        },
    },
    mounted() {
        //靈活
        setTimeout(() => {
            this.$refs.student.$on("showStudentName", this.getStudentName);
        }, 3000);
    },
};
</script>

<style scoped>
#app {
    padding: 20px;
    background: rgb(139, 139, 205);
}
</style>
