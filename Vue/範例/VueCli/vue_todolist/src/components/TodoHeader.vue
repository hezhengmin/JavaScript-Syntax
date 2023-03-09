<template lang="">
    <div>
        <input type="text" v-model="newTodo" placeholder="Add a new todo" />
        <button @click="addTodo">Add</button>
    </div>
</template>
<script>
export default {
    name: "TodoHeader",
    data() {
        return {
            newTodo: "",
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== "") {
                let obj = {
                    text: this.newTodo,
                    done: false,
                };
                this.$emit("addTodo", obj);
                this.newTodo = "";

                /*this.$emit('eventName', eventData)。
                eventName是自定义事件的名称，可以是任何字符串。
                eventData是传递给父组件的数据，可以是任何JavaScript值。 */
            }
        },
    },
};
</script>
<style lang=""></style>
