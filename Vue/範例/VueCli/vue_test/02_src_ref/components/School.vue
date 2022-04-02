<template>
    <div class="demo">
        <h2>{{ name }}</h2>
        <h2>{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: "SchoolName",
    data() {
        return {
            name: "Minghe",
            address: "台中市",
        };
    },
};
</script>

<style>
.demo {
    color: blue;
}
</style>
