<script setup>
import SideBar from "./components/SideBar/SideBar.vue";
import TopBar from "./components/TopBar/TopBar.vue";
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Inter,Apple System,"SF Pro SC","SF Pro Display","Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN",sans-serif;
}
</style>
