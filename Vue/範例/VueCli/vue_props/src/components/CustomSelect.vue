<template>
    <div>
        <b>{{ title }}：</b>
        <el-select v-model="value" placeholder="請選擇縣市" @change="selectedChange">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        parentSelectedValue: {
            type: Number,
            required: false,
            default: null,
        },
    },
    //子組件要偵聽父組件來的PROPS
    watch: {
        parentSelectedValue(newValue, oldValue) {
            console.log(newValue);
            this.value = newValue;
        },
    },
    data() {
        return {
            options: [
                {
                    value: 1,
                    label: "臺北市",
                },
                {
                    value: 2,
                    label: "臺中市",
                },
                {
                    value: 3,
                    label: "基隆市",
                },
                {
                    value: 4,
                    label: "臺南市",
                },
                {
                    value: 5,
                    label: "高雄市",
                },
                {
                    value: 6,
                    label: "新北市",
                },
                {
                    value: 7,
                    label: "宜蘭縣",
                },
                {
                    value: 8,
                    label: "桃園市",
                },
                {
                    value: 9,
                    label: "嘉義市",
                },
                {
                    value: 10,
                    label: "新竹縣",
                },
                {
                    value: 11,
                    label: "苗栗縣",
                },
                {
                    value: 12,
                    label: "南投縣",
                },
                {
                    value: 13,
                    label: "彰化縣",
                },
                {
                    value: 14,
                    label: "新竹市",
                },
                {
                    value: 15,
                    label: "雲林縣",
                },
                {
                    value: 16,
                    label: "嘉義縣",
                },
                {
                    value: 17,
                    label: "屏東縣",
                },
                {
                    value: 18,
                    label: "花蓮縣",
                },
                {
                    value: 19,
                    label: "臺東縣",
                },
                {
                    value: 20,
                    label: "金門縣",
                },
                {
                    value: 21,
                    label: "澎湖縣",
                },
                {
                    value: 22,
                    label: "連江縣",
                },
            ],
            value: null,
        };
    },

    methods: {
        selectedChange(val) {
            this.$emit("returnSelectedChange", val);
        },
    },
};
</script>
