// 引入Vue
import Vue from "vue";

// 引入App 05_src_plugins
import App from "./App.vue";
// 引入plugins
import plugins from "./plugins";

Vue.config.productionTip = false;

//使用插件
Vue.use(plugins, 1, 2, 3);
//npm run build、npm run serve
new Vue({
    el: "#app",
    render: (h) => h(App),
});
