<template>
  <div class="box">
    <t-menu
      v-model:expanded="expanded"
      theme="dark"
      default-value="item1"
      :collapsed="collapsed"
      style="height: 100vh;"
    >

      <template #logo>
        <img
          :width="32"
          class="t-menu__logo--center"
          src="../../assets/svg/iot.svg"
          alt="logo"
          style="margin-left: 16px;"
        />
        <p v-show="!collapsed" style="color: white; margin-left: 8px; font-weight: 700;">南华大学 IOT 云平台</p>
      </template>

      <t-menu-item value="item1">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <t-icon name="server" />
        </template>
        资源列表
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <t-icon name="root-list" />
        </template>
        根目录
      </t-menu-item>
      <t-submenu value="2">
        <template #icon>
          <t-icon name="control-platform" />
        </template>
        <template #title>
          <span>调度平台</span>
        </template>
        <t-menu-item value="2-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="2-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="2-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <t-icon name="precise-monitor" />
        </template>
        精准监控
      </t-menu-item>
      <t-submenu title="消息区" value="3">
        <template #icon>
          <t-icon name="mail" />
        </template>
        <template #title>
          <span>消息区</span>
        </template>
        <t-menu-item value="3-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="3-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="3-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <t-icon name="user-circle" />
        </template>
        个人中心
      </t-menu-item>
      <t-submenu value="4">
        <template #icon>
          <t-icon name="play-circle" />
        </template>
        <template #title>
          <span>视频区</span>
        </template>
        <t-menu-item value="4-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="4-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="4-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <t-icon name="edit-1" />
        </template>
        资源编辑
      </t-menu-item>
      <template #operations>
        <t-icon class="t-menu__operations-icon" name="view-list" @click="changeCollapsed" />
      </template>
    </t-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(false)
const changeCollapsed = () => {
  collapsed.value = !collapsed.value
}

const expanded = ref([])
</script>

<style scoped>

</style>