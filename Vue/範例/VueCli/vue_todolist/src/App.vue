<template>
    <div id="app">
        <div class="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <TodoHeader :addTodo="addTodo" />
                    <TodoList :todos="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
                    <TodoFooter
                        :todos="todoList"
                        :checkedAllTodo="checkedAllTodo"
                        :deleteCheckedTodo="deleteCheckedTodo" />
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
            //從localStorage取值，若沒有給空[]
            todoList: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },
    watch: {
        //深度監聽
        todoList: {
            deep: true,
            handler() {
                localStorage.setItem("todos", JSON.stringify(this.todoList));
            },
        },
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
        //全勾或全不勾
        checkedAllTodo(checked) {
            this.todoList.forEach((todo) => {
                todo.done = checked;
            });
        },
        //刪除已完成勾選的項目
        deleteCheckedTodo() {
            this.todoList = this.todoList.filter((todo) => !todo.done);
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
