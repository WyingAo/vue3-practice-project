<template>
  <div class="login-form">
    <el-form :model="form" label-width="auto" class="wya-form" width="200px">
    <el-form-item label="手机号">
      <el-input v-model="form.username"/>
    </el-form-item>

    <el-form-item label="验证码">
      <el-input v-model="form.password" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit" >登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  username:'',
  password:''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.login-form {
  padding-left: 46px;
}
.el-input {
  width: 280px;
}
.el-button {
margin-left: 110px;
}
</style>