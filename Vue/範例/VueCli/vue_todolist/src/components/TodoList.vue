<template lang="">
    <div>
        <!-- list开始 -->
        <ul class="todo-main">
            <TodoItem v-for="todo in todos" :key="todo.id" :item="todo" :checkTodo="checkTodo" />
        </ul>
        <!-- list结束 -->
    </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
    name: "TodoList",
    props: ["todos", "checkTodo"],
    components: { TodoItem },
    data() {
        return {};
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
