<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-07-19 21:58:15
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-07-20 23:29:46
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_scoped_slots\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="app">
        <select v-model="lang">
            <option v-for="item in langOptions" :value="item.val">{{ item.name }}</option>
        </select>
        <LightBox :lang="lang">
            <!-- v-slot:default="slotProps" 或 v-slot="slotProps" 寫法都可以，不帶參數默認插槽 -->
            <template v-slot="slotProps">
                {{ slotProps.moneyLangString }}
            </template>
            <!-- 子元件透過 selectLangString 丟往父元件存取，類似prop 
            { selectLangString } <----ES6解構賦值
            -->
            <template v-slot:lightBoxSlotName="{ selectLangString }">
                {{ selectLangString }}
            </template>
        </LightBox>
    </div>
</template>

<script>
import LightBox from "./components/LightBox.vue";

export default {
    name: "App",
    components: {
        LightBox,
    },
    data() {
        return {
            langOptions: [
                { name: "繁體中文", val: "tw" },
                { name: "日本語", val: "jp" },
                { name: "English", val: "en" },
            ],
            lang: "tw",
        };
    },
};
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
