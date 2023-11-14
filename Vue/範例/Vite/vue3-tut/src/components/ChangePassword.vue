<template lang="">
    <el-row>
        <el-col :span="8" :offset="8">
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="120px"
                class="demo-ruleForm">
                <el-form-item label="密碼" prop="pass">
                    <div style="margin-bottom: 1px">
                        <el-input
                            class="w-50"
                            v-model="ruleForm.pass"
                            type="password"
                            show-password
                            autocomplete="off" />
                        <password-meter :password="ruleForm.pass" />
                    </div>
                </el-form-item>
                <el-form-item label="確認密碼" prop="checkPass">
                    <el-input v-model="ruleForm.checkPass" type="password" show-password autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>
</template>
<script setup>
import { reactive, ref } from "vue";
import PasswordMeter from "vue-simple-password-meter";

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
<style lang="scss" scoped>
.w-50 {
    width: 12.5rem;
}
// https://github.com/miladd3/vue-simple-password-meter
// 製訂密碼強度樣式
.po-password-strength-bar {
    border-radius: 2px;
    transition: all 0.2s linear;
    height: 5px;
    margin-top: 2px;
}

.po-password-strength-bar.risky {
    background-color: #f95e68;
    width: 10%;
}

.po-password-strength-bar.guessable {
    background-color: #fb964d;
    width: 32.5%;
}

.po-password-strength-bar.weak {
    background-color: #fdd244;
    width: 55%;
}

.po-password-strength-bar.safe {
    background-color: #b0dc53;
    width: 77.5%;
}

.po-password-strength-bar.secure {
    background-color: #35cc62;
    width: 100%;
}
</style>
