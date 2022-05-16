export default {
    /*install第一個參數是Vue,第二個以後是使用者傳遞的參數 */
    install(Vue, x, y, z) {
        console.log(x, y, z);

        //全局過濾器
        Vue.filter("mySlice", function (value) {
            return value.slice(0, 4);
        });

        Vue.directive("fbind", {
            //指令與元素成功綁定時
            bind(element, binding) {
                console.log("bind");
                element.value = binding.value;
            },
            //指令所在元素被插入頁面時
            inserted(element) {
                console.log("inserted");
                element.focus();
            },
            //指定所在的模板被重新解析時
            update(element, binding) {
                console.log("update");
                element.value = binding.value;
            },
        });

        //定義混入
        Vue.mixin({
            data() {
                return {
                    test: "測試",
                };
            },
        });

        //Vue原型添加一個方法
        Vue.prototype.hello = () => {
            alert("你好ㄚ");
        };
    },
};
