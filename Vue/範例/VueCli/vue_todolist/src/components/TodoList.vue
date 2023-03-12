<template lang="">
    <div>
        <!-- list开始 -->
        <ul class="todo-main">
            <TodoItem v-for="item in todoList" :key="item.id" :todo="item" />
        </ul>
        <!-- list结束 -->
    </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
    name: "TodoList",
    components: { TodoItem },
    data() {
        return {
            todoList: [
                { id: "001", name: "吃飯", done: true },
                { id: "002", name: "玩遊戲", done: false },
                { id: "003", name: "睡覺", done: true },
            ],
        };
    },
};
</script>
<style scoped>
/*list样式 */
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
