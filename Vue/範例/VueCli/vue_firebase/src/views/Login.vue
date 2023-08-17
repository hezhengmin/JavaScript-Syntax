<!--
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-08-17 20:27:59
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-08-17 22:03:41
 * @FilePath: \JavaScript-Syntax\Vue\範例\VueCli\vue_firebase\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Password" />
        <br />
        <button @click="login">Connection</button>
        <p>
            or Sign In with Google
            <br />
            <button @click="socialLogin" class="social-button">
                <img alt="Google Logo" src="../assets/google-logo.png" />
            </button>
        </p>
        <p>
            You don't have an account ? You can
            <router-link to="/sign-up">create one</router-link>
        </p>
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$router.replace("home");
                })
                .catch((err) => {
                    alert("Oops. " + err.message);
                });
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    console.log("成功登入", result.user);
                    this.$router.replace("home");
                })
                .catch((err) => {
                    console.error("登入失败", err);
                    alert("Oops. " + err.message);
                });
        },
    },
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
.social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    outline: 0;
    border: 0;
}
.social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
    width: 100%;
}
</style>
