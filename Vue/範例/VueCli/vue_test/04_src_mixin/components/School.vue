<template>
    <div>
        <h2 @click="showName">學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
    </div>
</template>

<script>
// import { hunhe, hunhe2 } from "../mixin";

export default {
    name: "SchoolName",
    data() {
        return {
            name: "中科大",
            address: "台中市",
            test: "School,測試", //衝突，已School.vue為主
        };
    },
    // mixins: [hunhe, hunhe2],
    mounted() {
        console.log("School.vue");
    },
};
</script>
