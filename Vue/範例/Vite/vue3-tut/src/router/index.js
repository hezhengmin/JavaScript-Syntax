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
                meta: { requiresAuth: true },
            },

            {
                path: "Computed",
                name: "Computed",
                component: () => import("../components/Computed.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "WatchAndWatchEffect",
                name: "WatchAndWatchEffect",
                component: () => import("../components/WatchAndWatchEffect.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "Parent",
                name: "Parent",
                component: () => import("../components/Parent.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "SlotTutorial",
                name: "SlotTutorial",
                component: () => import("../components/SlotTutorial.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "ChangePassword",
                name: "ChangePassword",
                component: () => import("../components/ChangePassword.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "InjectPage",
                name: "InjectPage",
                component: () => import("../components/InjectPage.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "ComposablesPage",
                name: "ComposablesPage",
                component: () => import("../components/ComposablesPage.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "DirectivePage",
                name: "DirectivePage",
                component: () => import("../components/DirectivePage.vue"),
                meta: { requiresAuth: true },
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
    { path: "/TeleportPage", component: () => import("../views/TeleportPage.vue") },
    { path: "/AttrPage", component: () => import("../views/AttrPage.vue") },
    { path: "/Login", component: () => import("../views/Login.vue") },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

const auth = {
    isLoggedIn: () => {
        // 在这里编写检查用户是否已登录的逻辑
        // 返回 true 表示已登录，返回 false 表示未登录
        // 你可以根据你的实际情况来实现这个逻辑
        // 例如，你可以检查用户的登录状态或令牌是否存在
        // 并根据结果返回 true 或 false
        // 这里只是一个示例，实际情况可能会更复杂
        return true;
    },
};

//TODO:路由判斷
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !auth.isLoggedIn()) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: "/Login",
            // 保存我们所在的位置，以便以后再来
            query: { redirect: to.fullPath },
        };
    }
});

export default router;
