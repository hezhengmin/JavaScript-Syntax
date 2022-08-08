import Vue from "vue";
import Router from "vue-router";

const Home = () => import(`./views/Home.vue`);
const About = () => import(`./views/About.vue`);

// layout應用和 vue-router
// https://ithelp.ithome.com.tw/articles/10197778
// https://codesandbox.io/s/mm2x15m8r9?file=/src/main.js:130-138
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
    ],
    mode: "history",
});
