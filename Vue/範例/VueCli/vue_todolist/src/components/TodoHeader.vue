<template lang="">
    <!-- header开始 -->
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
    <!-- header结束 -->
</template>
<script>
//類似uuid
import { nanoid } from "nanoid";

export default {
    name: "TodoHeader",
    props: ["addTodo"],
    data() {
        return { title: "" };
    },
    methods: {
        add(e) {
            let todoObj = {
                id: nanoid(),
                name: this.title,
                done: false,
            };
            console.log(todoObj);

            //props 可以傳方法回去
            this.addTodo(todoObj);
            this.title = "";
        },
    },
};
</script>
<style scoped>
/* header */
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
