import Vue from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app = "";
const config = {
    apiKey: "AIzaSyBqqfd1I5eSOfmiw4_CluJl4J_VOvSIMhQ",
    authDomain: "mingproject-73721.firebaseapp.com",
    projectId: "mingproject-73721",
    storageBucket: "mingproject-73721.appspot.com",
    messagingSenderId: "399810438066",
    appId: "1:399810438066:web:ecb160e91a3b9f5e7d3aab",
    measurementId: "G-1YB9HTP99S",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        /* eslint-disable no-new */
        app = new Vue({
            router,
            render: (h) => h(App),
        }).$mount("#app");
    }
});
