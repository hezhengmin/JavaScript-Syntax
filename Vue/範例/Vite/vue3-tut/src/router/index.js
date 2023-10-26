import { createRouter, createWebHashHistory } from "vue-router";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        children: [
            {
                path: "tut-vmodel",
                name: "tut-vmodel",
                component: () => import("../components/ComponentA.vue"),
            },

            {
                path: "Computed",
                name: "Computed",
                component: () => import("../components/Computed.vue"),
            },
            {
                path: "WatchAndWatchEffect",
                name: "WatchAndWatchEffect",
                component: () => import("../components/WatchAndWatchEffect.vue"),
            },
            {
                path: "Parent",
                name: "Parent",
                component: () => import("../components/Parent.vue"),
            },
            {
                path: "SlotTutorial",
                name: "SlotTutorial",
                component: () => import("../components/SlotTutorial.vue"),
            },
        ],
    },
    { path: "/KeyPage", component: () => import("../views/KeyPage.vue") },
    { path: "/RefAndToRef", component: () => import("../views/RefAndToRef.vue") },
    { path: "/ShallowRefAndShallowReactive", component: () => import("../views/ShallowRefAndShallowReactive.vue") },
    { path: "/DefinePropsAndDefineEmits", component: () => import("../views/DefinePropsAndDefineEmits.vue") },
    { path: "/ProvideAndInject", component: () => import("../views/ProvideAndInject.vue") },
    { path: "/SuspensePage", component: () => import("../views/SuspensePage.vue") },
    { path: "/ComputedPage", component: () => import("../views/ComputedPage.vue") },
    { path: "/WatchPage", component: () => import("../views/WatchPage.vue") },
    { path: "/RefPage", component: () => import("../views/RefPage.vue") },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;
