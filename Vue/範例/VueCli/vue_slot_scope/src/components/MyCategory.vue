<template lang="">
    <div class="category">
        <h2>{{ title }}</h2>
        <slot :games="games" msg="Hello"></slot>
    </div>
</template>
<script>
export default {
    name: "MyCategory",
    props: ["title"],
    data() {
        return {
            games: [
                "薩爾達傳說 王國之淚",
                "even if TEMPEST 黃昏中魔女如是說",
                "十三支演義 偃月三國傳 1・2 for Nintendo Switch",
                "VARIABLE BARRICADE 百密一疏少女心 NS",
            ],
        };
    },
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
