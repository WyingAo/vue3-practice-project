<template>
  <div class="login-form">
    <el-form ref="ruleFormRef" :model="form" label-width="auto" class="wya-form" width="200px" 
    :rules="rules"
    >
    <el-form-item label="账号" prop="username">
      <el-input v-model="form.username"/>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>

    <el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue'
import type { ElForm } from 'element-plus'
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const form = reactive({
  username:'admin123',
  password:'admin123'
})

const rules = {
  username:[
    {
      required: true,
      message: '用户名不可为空',
      trigger: 'blur' 
    }
  ],
  password:[
  {
      required: true,
      message: '密码不可为空',
      trigger: 'blur'
    },
   {
      pattern: /^[\w+]{6,16}$/,
      message: '密码为6-16个字符',
      trigger: 'blur'
  }
  ]
}
const onSubmit = () => {
  ruleFormRef.value?.validate((valid)=>{
    if(valid){

    }else {
      
    }
  })
}
</script>

<style lang="scss" scoped>
.login-form {
  padding-left: 50px;
}
.el-input {
  width: 280px;
}
.el-button {
margin-left: 70px;
}
</style>