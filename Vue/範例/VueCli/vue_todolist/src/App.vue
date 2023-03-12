<template>
    <div id="app">
        <div class="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <TodoHeader :addTodo="addTodo" />
                    <TodoList :todos="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
                    <TodoFooter />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
    name: "App",
    components: { TodoHeader, TodoList, TodoFooter },
    data() {
        return {
            todoList: [
                { id: "001", name: "吃飯", done: true },
                { id: "002", name: "玩遊戲", done: false },
                { id: "003", name: "睡覺", done: true },
            ],
        };
    },
    methods: {
        addTodo(obj) {
            this.todoList.unshift(obj);
        },
        checkTodo(id) {
            console.log(`改變check`, id);
            this.todoList.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done;
            });
        },
        deleteTodo(id) {
            //filter過濾元素產生新的
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
        },
    },
};
</script>

<style scoped>
body {
    background: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
