<template>
  <div class="main">
    <el-container class="layout-container-demo">
    <el-aside width="200px" >
      <navMenu></navMenu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import navMenu from '@/components/nav-menu'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
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