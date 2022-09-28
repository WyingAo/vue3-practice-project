<template>
<div class="login">
<loginPanel></loginPanel>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './login-ui/loginPanel.vue';
import useStore from '@/store'
export default defineComponent({
  components:{
    loginPanel
  },
  setup(){

    return {}
  }
})
</script>

<style lang="scss" scoped>
.login{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(159, 184, 187);
}
</style>