<template>
  <div class="tab-panel">
    <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
    :stretch="true"
  >
    <el-tab-pane name="form">
      <template #label>
        <div class="text">
        <el-icon><Avatar /></el-icon>
        <span style="margin-left: 3px;">账号登录</span>
      </div>
    </template>
    <LoginForm></LoginForm>
    </el-tab-pane>
    <el-tab-pane name="phone">
      <template #label>
        <div class="text">
          <el-icon><Cellphone /></el-icon>
        <span style="margin-left: 3px;">手机登录</span>
      </div>
    </template>
    <loginPhone></loginPhone>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import LoginForm from './loginForm.vue';
import loginPhone from './loginPhone.vue';
const activeName = ref<string|number|undefined>('form')
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    if(tab.paneName){
      activeName.value = tab.paneName
    }
} 
</script>

<style lang="scss" scoped>
  .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tab-panel{
  position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    padding: 20px;
    width: 500px;
    border: 1px solid rgb(239, 202, 202);
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>