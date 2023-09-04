<template>
    <h1>watch 及 watchEffect 監聽</h1>
    <input type="text" v-model="inputWatch" />
    <br />
    <hr />
    name:
    <input type="text" v-model="inputWatchEffect.name" :style="inputStyles" />
    age:
    <input type="number" v-model="inputWatchEffect.age" />
    <br />
    <hr />
    inputDeepWatch: 地點:
    <input type="text" v-model="inputDeepWatch.country.region" />
    天氣:
    <input type="text" v-model="inputDeepWatch.weather" />
    <hr />
</template>

<script setup>
import { watch, watchEffect, ref, reactive } from "vue";
const inputWatch = ref("first");

const inputDeepWatch = ref({
    country: {
        region: "台中市",
    },
    weather: "下雨",
});

//reactive裡面一定要塞物件
const inputWatchEffect = reactive({
    name: "ming",
    gender: "male",
    age: 27,
});

const inputStyles = reactive({
    color: "red",
    fontSize: "14px",
});

watch(inputWatch, (newValue, oldValue) => {
    console.log(`inputWatch`, newValue);
});

// watch(
//     () => inputDeepWatch.value.country.region,
//     (newValue, oldValue) => {
//         console.log(`inputDeepWatch`, newValue, oldValue);
//     }
//     //{ deep: true } //要加上的deep，才能監控物件的第二層
// );

watch(
    [() => inputDeepWatch.value.weather, () => inputDeepWatch.value.country.region],
    (newValue, oldValue) => {
        console.log(`inputDeepWatch兩個元素`, newValue, oldValue);
    },
    { deep: true, immediate: true }
);

const stop = watchEffect(() => {
    console.log(`watchEffect 監控物件`, inputWatchEffect.age);

    //如果輸入-1停止監聽
    if (inputWatchEffect.age === -1) {
        console.log("==========停止監聽==========");
        stop();
    }

    //如果是偶數長度，切換字體顏色
    if (inputWatchEffect.name.length % 2 === 0) {
        inputStyles.color = "blue";
    } else {
        inputStyles.color = "red";
    }
});
</script>

<style scoped></style>
