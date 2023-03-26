<template lang="">
    <div class="category">
        <h2>{{ title }}</h2>
        <slot name="center">默認插槽slot，沒寫回顯示這段文字</slot>
        <slot name="footer">默認插槽slot，沒寫回顯示這段文字</slot>
    </div>
</template>
<script>
export default {
    name: "MyCategory",
    props: ["title"],
};
</script>
<style>
.category {
    background: rgb(111, 111, 202);
    width: 200px;
    height: 300px;
}
h2 {
    text-align: center;
    background: orange;
}
img {
    width: 100%;
}
video {
    width: 100%;
}
</style>
