<template>
  <div class="box">
    <t-menu
      v-model:expanded="expanded"
      theme="dark"
      v-model:value="menuValue"
      :collapsed="collapsed"
      style="height: 100vh; position: fixed"
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

      <t-submenu value="0">
        <template #icon>
          <t-icon name="cloud" />
        </template>
        <template #title>
          <span>开发者中心</span>
        </template>
        <t-menu-item value="0-1"> 设备管理 </t-menu-item>
      </t-submenu>

      <t-submenu value="1">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        <template #title>
          <span>设备数据</span>
        </template>
        <t-menu-item value="1-1"> 历史在线数据 </t-menu-item>
        <t-menu-item value="1-2"> 历史传感数据 </t-menu-item>
        <t-menu-item value="1-3"> 历史命令数据 </t-menu-item>
      </t-submenu>

      <t-submenu value="2">
        <template #icon>
          <t-icon name="chart-bubble" />
        </template>
        <template #title>
          <span>逻辑控制</span>
        </template>
        <t-menu-item value="2-1"> 策略管理 </t-menu-item>
        <t-menu-item value="2-2"> 策略执行记录 </t-menu-item>
      </t-submenu>

      <t-menu-item value="precise-monitor">
        <template #icon>
          <t-icon name="precise-monitor" />
        </template>
        精准监控
      </t-menu-item>

<!--      <template #operations>-->
<!--        <t-icon class="t-menu__operations-icon" name="view-list" @click="changeCollapsed" />-->
<!--      </template>-->
    </t-menu>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()

const menuValue = ref('0-1')
watch(menuValue, (newVal) => {
  switch (newVal) {
    case '0-1':
      router.push({name: 'Device'});break;
  }
}, {
  immediate:true //初始化也监测一次
})

const collapsed = ref(false)
const changeCollapsed = () => {
  collapsed.value = !collapsed.value
}

const expanded = ref([])
</script>

<style scoped>

</style>