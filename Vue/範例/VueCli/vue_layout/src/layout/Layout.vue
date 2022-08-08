<template>
    <div class="layout">
        <header>
            <h2>layout</h2>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </header>
        <main>
            <slot />
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: `Layout`,
};
</script>

<style></style>
