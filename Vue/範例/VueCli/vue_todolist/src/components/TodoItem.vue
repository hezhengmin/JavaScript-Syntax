<template lang="">
    <!-- list-item开始 -->
    <li>
        <label>
            <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)" />
            <!-- vue 不建議修改props ，不宜使用v-model="item.done -->
            <!-- <input type="checkbox" v-model="item.done" /> -->
            <span>{{ item.name }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
    </li>
    <!-- list-item结束 -->
</template>
<script>
export default {
    name: "TodoItem",
    props: ["item", "checkTodo", "deleteTodo"],
    methods: {
        handleCheck(id) {
            this.checkTodo(id);
        },
        handleDelete(id) {
            if (confirm("確認刪除嗎?")) {
                console.log(`刪除的${id}`);
                this.deleteTodo(id);
            }
        },
    },
};
</script>
<style scoped>
/*list-item 样式 */
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}
li:hover button {
    display: block;
}
</style>
