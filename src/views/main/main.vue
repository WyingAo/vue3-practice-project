<template>
  <div class="main">
    <el-container class="layout-container-demo">
    <el-aside width="200px" >
      <navMenu></navMenu>
    </el-aside>

    <el-container>
      <el-header>
     <NavHeader></NavHeader>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script lang="ts" setup>
import navMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
</script>


<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  background-color: #f0f2f5;
}
.el-aside {
  background-color:#1b394e
}
.el-header {
  background-color: #fff;
  height: 60px;
  padding: 0;
  margin: 0;
  box-shadow: 0 -1px 5px #000;
  z-index: 999;
}
.el-menu {
  height: 100%;
}

</style>