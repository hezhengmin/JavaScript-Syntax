<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-08-17 20:27:59
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-08-17 21:25:03
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_firebase\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld,
    },
    methods: {
        logout: function () {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("login");
                });
        },
    },
};
</script>
