// 引入Vue
import Vue from "vue";

// 引入App 05_src_plugins
import App from "./App.vue";

Vue.config.productionTip = false;


//npm run build、npm run serve
new Vue({
    el: "#app",
    render: (h) => h(App),
});
