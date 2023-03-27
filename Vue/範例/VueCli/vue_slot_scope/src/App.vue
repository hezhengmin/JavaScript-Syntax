<template>
    <div id="app" class="container">
        <!-- 讓父組件向子組件指定位置插入html結構 -->
        <MyCategory title="遊戲">
            <template scope="array">
                {{ array }}
            </template>
        </MyCategory>
        <MyCategory title="遊戲">
            <template scope="{games}">
                <ul>
                    <li v-for="(item, index) in games" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </template>
        </MyCategory>

        <MyCategory title="遊戲">
            <template scope="{games,msg}">
                <ol>
                    <li v-for="(item, index) in games" :key="index">
                        {{ item }}
                    </li>
                </ol>
                <h4>{{ msg }}</h4>
            </template>
        </MyCategory>

        <MyCategory title="遊戲">
            <template slot-scope="{ games }">
                <h4 v-for="(item, index) in games" :key="index">
                    {{ item }}
                </h4>
            </template>
        </MyCategory>
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
