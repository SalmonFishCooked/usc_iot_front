<script setup>
import SideBar from "./components/SideBar/SideBar.vue";
import TopBar from "./components/TopBar/TopBar.vue";
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="w-full" style="margin-left: 232px;">
      <TopBar />
      <router-view v-slot="{ Component }" style="margin-left: 24px; margin-top: 12px; margin-right: 24px;">
        <keep-alive>
        <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Inter,Apple System,"SF Pro SC","SF Pro Display","Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN",sans-serif;
}

.shadow-box {
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
}

/* scrollbar style */
::-webkit-scrollbar {
  background-color: transparent;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #cfd6df;
  border-radius: 10px;
  box-shadow: none;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
  box-shadow: none;
}

:hover::-webkit-scrollbar-thumb {
  background-color: #c5cbd4;
}
</style>
