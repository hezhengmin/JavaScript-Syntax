<template>
    <div>
        <h2>學校名稱：{{ name | mySlice }}</h2>
        <h2>學校地址：{{ address }}</h2>
        <button @click="alertTest">按鈕</button>
    </div>
</template>

<script>
// import { hunhe, hunhe2 } from "../mixin";

export default {
    name: "SchoolName",
    data() {
        return {
            name: "國立臺中科技大學",
            address: "台中市",
        };
    },
    methods: {
        alertTest() {
            this.hello();
        },
    },
    // mixins: [hunhe, hunhe2],
    mounted() {
        console.log("School.vue");
    },
};
</script>
