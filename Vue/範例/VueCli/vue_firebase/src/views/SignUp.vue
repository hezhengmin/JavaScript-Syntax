<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-08-17 20:27:59
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-08-17 21:34:35
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_firebase\src\views\SignUp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Password" />
        <br />
        <button @click="signUp">Sign Up</button>
        <span>
            or go back to
            <router-link to="/login">login</router-link>
            .
        </span>
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    name: "signUp",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        signUp: function () {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace("home");
                    },
                    (err) => {
                        alert("Oops. " + err.message);
                    }
                );
        },
    },
};
</script>

<style scoped>
.sign-up {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
