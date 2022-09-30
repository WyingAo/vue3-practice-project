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
   <template v-for="item in NavMenus " :key="item.id">
    <el-sub-menu :index="item.id + ''" >
      <template #title>
        <el-icon><Monitor /></el-icon>
        <span>{{item.title}}</span>
      </template>
      <template v-for="itemChildren in item.children" :key="itemChildren.id">
      <el-menu-item-group>
        <el-menu-item :index="itemChildren.id +''">{{itemChildren.title}}</el-menu-item>
      </el-menu-item-group>
     </template>
    </el-sub-menu>
  </template>
  </el-menu>
   
</template>

<script setup lang="ts">
import {
  Monitor
} from '@element-plus/icons-vue'
import LocalCache from '@/utils/request/cache'
const NavMenus = LocalCache.getCache('userMenus')
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