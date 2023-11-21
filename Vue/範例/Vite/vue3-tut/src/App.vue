<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-08-24 23:03:31
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-11-21 23:01:41
 * @FilePath: \JavaScript-Syntax\Vue\範例\Vite\vue3-tut\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <router-view />
</template>

<script setup>
import { provide } from 'vue'
provide(/* 注入名 */ 'message', /* 值 */ 'hello!')

</script>

<style scoped></style>
