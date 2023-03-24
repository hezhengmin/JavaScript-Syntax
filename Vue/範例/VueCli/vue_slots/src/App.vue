<template>
    <div id="app" class="container">
        <MyCategory title="教學">
            <img src="@/assets/logo.png" alt="" />
        </MyCategory>
        <MyCategory title="美食">
            <ul>
                <li v-for="(item, index) in foods" :key="index">{{ item }}</li>
            </ul>
        </MyCategory>
        <MyCategory title="電影">
            <video controls src=""></video>
        </MyCategory>

        <MyCategory title=""></MyCategory>
    </div>
</template>

<script>
import MyCategory from "./components/MyCategory";

export default {
    name: "App",
    components: {
        MyCategory,
    },
    data() {
        return {
            foods: ["炒飯", "水餃", "火鍋"],
        };
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
}
</style>
