// 引入Vue
import Vue from "vue";

// 引入App
import App from "./App.vue";
import { hunhe, hunhe2 } from "./mixin";

Vue.config.productionTip = false;

//全局混入
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
