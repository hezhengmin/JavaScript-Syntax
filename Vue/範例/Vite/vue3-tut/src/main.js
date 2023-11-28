import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import "vue3-toastify/dist/index.css";

const pinia = createPinia();
const app = createApp(App);

app.directive("focus", {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el) {
        // 聚焦元素
        el.focus();

        // 鼠標懸停時的事件
        el.addEventListener("mouseover", () => {
            el.style.backgroundColor = "red";
        });

        // 鼠標離開時的事件
        el.addEventListener("mouseout", () => {
            el.style.backgroundColor = ""; // 恢復原來的背景顏色
        });
    },
});

app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount("#app");
