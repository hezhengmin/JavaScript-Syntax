<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-07-19 22:42:58
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-07-19 23:20:42
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_scoped_slots\src\components\LightBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="">
    <div>
        <slot name="test" :options="langOptions"></slot>
    </div>
</template>
<script>
export default {
    name: "LightBox",
    data() {
        return {
            langOptions: [
                { name: "繁體中文", val: "tw" },
                { name: "日本語", val: "jp" },
                { name: "English", val: "en" },
            ],
        };
    },
};
</script>
<style lang=""></style>
