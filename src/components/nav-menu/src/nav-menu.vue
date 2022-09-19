<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
  <div class="wya-menu-title">
  <img src="~@/assets/image/测试图片.webp" alt="">
  <h2>v3+ts</h2>
  </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><ChatLineSquare /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Tools /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import {
  HomeFilled,
  ChatLineSquare,
  Tools
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu { 
  background-color:#1b394e ;
}

.wya-menu-title{
  display: flex;
  justify-content:space-around;
  align-items: center;
  background-color: skyblue;
  img{
    width: 80px;
    height: 60px;
    border-radius: 50%;
  }
  h2 {
    font-size: 30px;
    color: #1b394e;
  }
}
::v-deep .el-sub-menu__title {
  background-color: #132736;
  color: #fff;
  &:hover{
  background-color: skyblue;
  color: yellow;
  }
}
.el-menu-item  {
  color: #fff;
  background-color: #1b394e;
  &:hover{
  background-color: skyblue;
  color: yellow;
  }
}
 ::v-deep .el-menu-item-group__title{
  padding: 0;
}
</style>