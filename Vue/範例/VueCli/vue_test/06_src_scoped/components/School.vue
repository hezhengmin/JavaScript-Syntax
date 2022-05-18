<template>
    <div class="demo">
        <h2 class="name">學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
    </div>
    <!-- 
    使用
    npm install sass-loader node-sass --save-dev 
     -->
</template>

<script>
export default {
    name: "SchoolName",
    data() {
        return {
            name: "國立臺中科技大學",
            address: "台中市",
        };
    },
    methods: {},
    mounted() {
        console.log("School.vue");
    },
};
</script>

<style lang="scss">
.demo {
    background-color: orange;
    .name {
        font-size: 40px;
    }
}
</style>
