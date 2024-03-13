<template>
    <div id="app">
        <el-input-number
            v-model="parentSelectedValue"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"></el-input-number>
        選擇的數值：{{ selectedValue }}
        <div>
            標題：
            <el-input style="width: 150px" v-model="title" placeholder=""></el-input>
        </div>
        <custom-select
            :parentSelectedValue="parentSelectedValue"
            :title="title"
            @returnSelectedChange="getSelectedValue"></custom-select>
    </div>
</template>

<script>
import customSelect from "./components/CustomSelect.vue";

export default {
    name: "App",
    components: {
        customSelect,
    },
    data() {
        return {
            selectedValue: null,
            title: "縣市",
            parentSelectedValue: null,
        };
    },
    methods: {
        getSelectedValue(val) {
            this.selectedValue = val;
        },
        handleChange(value) {
            this.parentSelectedValue = value;
        },
    },
};
</script>

<style></style>
