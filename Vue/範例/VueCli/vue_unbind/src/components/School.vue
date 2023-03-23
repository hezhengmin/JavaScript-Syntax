<template>
    <div class="school">
        <h2>學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
        <button @click="showSchoolName">給APP學校名</button>
    </div>
</template>

<script>
export default {
    name: "SchoolName",
    props: ["getSchoolName"],
    data() {
        return {
            name: "中科大",
            address: "台中市",
        };
    },
    mounted() {},
    methods: {
        showSchoolName() {
            this.getSchoolName(this.name);
        },
    },
};
</script>
<style scoped>
.school {
    padding: 20px;
    background: rgb(211, 151, 29);
}
</style>
