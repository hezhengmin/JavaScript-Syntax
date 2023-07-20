<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-07-19 22:42:58
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-07-20 23:27:54
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_scoped_slots\src\components\LightBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="">
    <div>
        <slot :moneyLangString="moneyString[lang]"></slot>
        <slot name="lightBoxSlotName" :selectLangString="langString[lang]"></slot>
    </div>
</template>
<script>
export default {
    name: "LightBox",
    props: {
        lang: {
            type: String,
            default: "tw",
        },
    },
    data() {
        return {
            langString: {
                tw: "你好",
                jp: "こんにちは",
                en: "Hello",
            },
            moneyString: {
                tw: "TWD",
                jp: "JPY",
                en: "USD",
            },
        };
    },
};
</script>
<style lang=""></style>
