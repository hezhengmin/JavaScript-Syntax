<template>
    <div>
        <button @click="childMethod">Click me</button>
    </div>
</template>

<script>
export default {
    props: ["data"],
    methods: {
        childMethod() {
            console.log("Child method called");
        },
        resolveAfterNumberSeconds(sec) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`等${sec}秒時間到後~`);
                    resolve(sec);
                }, sec * 1000);
            });
        },
    },
};
</script>
