<template>
    <div id="app" class="container">
        <MyCategory title="教學">
            <img slot="center" src="@/assets/logo.png" alt="" />
            <a slot="footer" href="https://hezhengmin.github.io/">網站連結</a>
        </MyCategory>
        <MyCategory title="美食">
            <ul slot="center">
                <li v-for="(item, index) in foods" :key="index">{{ item }}</li>
            </ul>
            <div class="footer" slot="footer">
                <a href="https://hezhengmin.github.io/">雞排連結</a>
                <a href="https://hezhengmin.github.io/">熱狗連結</a>
            </div>
        </MyCategory>
        <MyCategory title="電影">
            <video slot="center" controls src=""></video>
            <!-- 兩種寫法 slot="footer"、v-slot:footer -->
            <template v-slot:footer>
                <div class="footer">
                    <a href="https://hezhengmin.github.io/">經典</a>
                    <a href="https://hezhengmin.github.io/">動作</a>
                    <a href="https://hezhengmin.github.io/">動作</a>
                </div>
                <h4>歡迎收看</h4>
            </template>
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
.container,
.footer {
    display: flex;
    justify-content: space-around;
}
</style>
