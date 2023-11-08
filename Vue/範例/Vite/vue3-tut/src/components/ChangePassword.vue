<template lang="">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="密碼" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" show-password autocomplete="off" />
        </el-form-item>
        <el-form-item label="確認密碼" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" show-password autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { reactive, ref } from "vue";

const ruleFormRef = ref();
const ruleForm = reactive({
    pass: "",
    checkPass: "",
});

const validatePass = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("請輸入密碼"));
    } else {
        const hasLowerCase = /[a-z]/.test(value);
        const hasUpperCase = /[A-Z]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasSpecialChar = /[!@#\$%^&*]/.test(value);
        if (value.length < 8 || !hasLowerCase || !hasUpperCase || !hasDigit || !hasSpecialChar) {
            callback(new Error("要求密碼長度至少為8個字符，必須包含大小寫字母、數字和特殊符號的組合。"));
        }

        console.log(ruleFormRef.value);

        if (ruleForm.checkPass !== "") {
            if (!ruleFormRef.value) return;
            ruleFormRef.value.validateField("checkPass", () => null);
        }

        callback();
    }
};
const validatePass2 = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("請再次輸入密碼"));
    } else if (value !== ruleForm.pass) {
        callback(new Error("兩次輸入的密碼不一致"));
    } else {
        callback();
    }
};

const rules = reactive({
    pass: [{ validator: validatePass, trigger: "blur" }],
    checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = (formEl) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log("submit!");
        } else {
            console.log("error submit!");
            return false;
        }
    });
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
<style lang=""></style>
