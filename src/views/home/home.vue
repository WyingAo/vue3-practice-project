<template>
  <div>
   <h1>首页</h1>
   <button @click="router.push('/login')">去登录</button>
   {{obj}}
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const obj = '11111'
</script>

<style lang="scss" scoped>

</style>