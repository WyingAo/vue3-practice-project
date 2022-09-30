<template>
    <div class="header">
     <div class="header-left">
    <el-icon size="30px"> <Fold /></el-icon>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/login' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
     </div>
     <div class="header-right">{{123}}</div>
    </div>
</template>

<script setup lang="ts">
import {
  Fold,
  Expand
} from '@element-plus/icons-vue'

</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
.header-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 580px;
}
}
</style>