<template lang="">
    <!-- footer开始 -->
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="todosChecked" />
        </label>
        <span>
            <span>已完成{{ totalDone }}</span>
            / 全部{{ todosLength }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成的任务</button>
    </div>
    <!-- footer结束 -->
</template>
<script>
export default {
    name: "TodoFooter",
    props: ["todos", "checkedAllTodo", "deleteCheckedTodo"],
    computed: {
        todosLength() {
            return this.todos.length;
        },
        totalDone() {
            /*
            reduce 統計過濾條件的總共數值, pre 看最後面設定多少數值 0

            return this.todos.reduce((pre, current) => {
                console.log(pre, current);
                return pre + (current.done ? 1 : 0);
            }, 0);
            */

            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
        },
        //全部勾選checkbox或取消全部的checkbox
        todosChecked: {
            get() {
                return this.totalDone === this.todosLength && this.totalDone > 0;
            },
            set(value) {
                this.checkedAllTodo(value);
            },
        },
    },
    methods: {
        clearAll() {
            this.deleteCheckedTodo();
        },
    },
};
</script>
<style scoped>
/* footer样式 */
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input {
    position: relative;
    top: 1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
