<template>
    <div>
        <h1>Vue 3 Suspense 示例</h1>
        <Suspense>
            <template #default>
                <AsyncComponent />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(() => import("../components/AsyncComponent.vue"));
import Loading from "../components/Loading.vue";
</script>
